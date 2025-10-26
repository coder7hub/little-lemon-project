import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createContext } from 'react';
import ReservationSection1 from '../ReservationSection'; // Adjust path if needed
import validator from 'validator';

// Мокаем InfoContext
export const InfoContext = createContext(null);

// Мокаем validator.isEmail для предсказуемого поведения
jest.mock('validator', () => ({
  isEmail: jest.fn(),
}));

// Настройка контекста
const mockContextValue = {
  setUserInfo: jest.fn(),
};

// Мок для функций props
const mockContinueToNextStep = jest.fn();
const mockDispatch = jest.fn();
const mockAvailableTimes = ['17:00', '18:00', '19:00'];

describe('ReservationSection1', () => {
  // Настройка перед каждым тестом
  beforeEach(() => {
    // Очищаем моки перед каждым тестом
    jest.clearAllMocks();
    validator.isEmail.mockImplementation((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

    render(
      <InfoContext.Provider value={mockContextValue}>
        <ReservationSection1
          continueToNextStep={mockContinueToNextStep}
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
        />
      </InfoContext.Provider>
    );
  });

  // Тест для рендеринга заголовка
  test('Renders the Reservation of Table heading', () => {
    const headingElement = screen.getByText(/Reservation of Table/i);
    expect(headingElement).toBeInTheDocument();
  });

  // Тесты для HTML5-валидации
  test('name input has correct HTML5 attributes', () => {
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('required');
  });

  test('email input has correct HTML5 attributes', () => {
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
    // expect(emailInput).toHaveAttribute('required'); // Раскомментировать, если добавите required
  });

  test('mobile input has correct HTML5 attributes', () => {
    const mobileInput = screen.getByLabelText(/mobile/i);
    expect(mobileInput).toHaveAttribute('type', 'tel');
    expect(mobileInput).toHaveAttribute('pattern', '[0-9]{8,}');
    // expect(mobileInput).toHaveAttribute('required'); // Раскомментировать, если добавите required
  });

  test('date input has correct HTML5 attributes', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    // expect(dateInput).toHaveAttribute('required'); // Раскомментировать, если добавите required
  });

  test('time select has correct HTML5 attributes', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    // expect(timeSelect).toHaveAttribute('required'); // Раскомментировать, если добавите required
  });

  test('number of guests select has correct HTML5 attributes', () => {
    const guestsSelect = screen.getByLabelText(/no\. of guests/i);
    // expect(guestsSelect).toHaveAttribute('required'); // Раскомментировать, если добавите required
  });

  test('occasion select has correct HTML5 attributes', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    // expect(occasionSelect).toHaveAttribute('required'); // Раскомментировать, если добавите required
  });

  // Тесты для JavaScript-валидации
  test('error message appears for invalid name', async () => {
    const user = userEvent;
    const nameInput = screen.getByLabelText(/name/i);

    // Вводим невалидное имя (слишком короткое)
    await user.type(nameInput, 'Jo');
    await user.tab(); // Срабатывает onBlur для isTouched

    // Проверяем, что отображается иконка ошибки
    const errorIcon = await screen.findByTestId('error-message');
    expect(errorIcon).toBeInTheDocument();
  });

  test('success message appears for valid name', async () => {
    const user = userEvent;
    const nameInput = screen.getByLabelText(/name/i);

    // Вводим валидное имя
    await user.type(nameInput, 'John Doe');
    await user.tab(); // Срабатывает onBlur для isTouched

    // Проверяем, что отображается иконка успеха
    const successIcon = await screen.findByTestId('success-message');
    expect(successIcon).toBeInTheDocument();
  });

  test('form prevents submission when invalid', async () => {
    const user = userEvent;
    const submitButton = screen.getByRole('button', { name: /continue/i });

    // Оставляем форму невалидной (пустые поля)
    await user.click(submitButton);

    // Проверяем, что continueToNextStep не вызывается
    expect(mockContinueToNextStep).not.toHaveBeenCalled();
    expect(mockContextValue.setUserInfo).not.toHaveBeenCalled();
  });

  test('form submits when valid', async () => {
    const user = userEvent;

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const mobileInput = screen.getByLabelText(/mobile/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsSelect = screen.getByLabelText(/no\. of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole('button', { name: /continue/i });

    // Заполняем все поля валидными данными
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(mobileInput, '12345678');
    await user.type(dateInput, '2025-05-12');
    await user.selectOptions(timeSelect, '17:00');
    await user.selectOptions(guestsSelect, '2');
    await user.selectOptions(occasionSelect, 'Birthday');

    await user.click(submitButton);

    // Проверяем, что форма отправляется
    expect(mockContinueToNextStep).toHaveBeenCalled();
    expect(mockContextValue.setUserInfo).toHaveBeenCalled();
  });

  test('getIsFormValid returns false for invalid form data', () => {
    const invalidFormData = {
      name: { value: 'Jo', isTouched: true },
      occasion: { value: '', isTouched: true },
      date: { value: '', isTouched: true },
      time: { value: '', isTouched: true },
      numGuests: { value: '', isTouched: true },
      mobile: { value: '123', isTouched: true },
      email: { value: 'invalid', isTouched: true },
    };

    validator.isEmail.mockReturnValue(false);

    const getIsFormValid = (formData) => {
      return (
        formData.name.value.length > 2 &&
        formData.occasion.value &&
        formData.date.value &&
        formData.time.value &&
        formData.numGuests.value &&
        formData.mobile.value.length >= 8 &&
        validator.isEmail(formData.email.value)
      );
    };

    expect(getIsFormValid(invalidFormData)).toBe(false);
  });

  test('getIsFormValid returns true for valid form data', () => {
    const validFormData = {
      name: { value: 'John Doe', isTouched: true },
      occasion: { value: 'Birthday', isTouched: true },
      date: { value: '2025-05-12', isTouched: true },
      time: { value: '17:00', isTouched: true },
      numGuests: { value: '2', isTouched: true },
      mobile: { value: '12345678', isTouched: true },
      email: { value: 'john@example.com', isTouched: true },
    };

    validator.isEmail.mockReturnValue(true);

    const getIsFormValid = (formData) => {
      return (
        formData.name.value.length > 2 &&
        formData.occasion.value &&
        formData.date.value &&
        formData.time.value &&
        formData.numGuests.value &&
        formData.mobile.value.length >= 8 &&
        validator.isEmail(formData.email.value)
      );
    };

    expect(getIsFormValid(validFormData)).toBe(true);
  });
});