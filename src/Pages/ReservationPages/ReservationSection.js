import React, { useContext, useState } from 'react';
import { InfoContext } from '../../ContextAPI/ContextAPI';
import { BiSolidError } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import validator from 'validator';

// UI Components: Display error or success icons for form validation feedback
const ErrorMessage = () => (
  <p className="ErrorMessage text-[red]" data-testid="error-message">
    <BiSolidError />
  </p>
);

const SuccessMessage = () => (
  <p className="SuccessMessage text-[green]" data-testid="success-message">
    <MdDone />
  </p>
);

export default function ReservationSection1({ continueToNextStep, availableTimes, dispatch }) {
  const { setUserInfo } = useContext(InfoContext);

  const [formData, setFormData] = useState({
    name: { value: '', isTouched: false },
    occasion: { value: '', isTouched: false },
    date: { value: '', isTouched: false },
    time: { value: '', isTouched: false },
    numGuests: { value: '', isTouched: false },
    mobile: { value: '', isTouched: false },
    email: { value: '', isTouched: false }
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], value }
    }));
  };

  const touchField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], isTouched: true }
    }));
  };

  const getIsFormValid = () => {
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

  const clearForm = () => {
    const cleared = {};
    Object.keys(formData).forEach((key) => {
      cleared[key] = { value: '', isTouched: false };
    });
    setFormData(cleared);
  };

  const validateFields = () => {
    Object.keys(formData).forEach((field) => {
      if (!formData[field].value) {
        touchField(field);
      }
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    validateFields();
    if (!getIsFormValid()) return;
    setUserInfo(formData);
    clearForm();
    continueToNextStep();
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    updateField('date', selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  return (
    <div className="contReservation px-4 sm:px-6 md:px-16">
      <form onSubmit={Submit} className="bg-[#edefee] rounded-[20px] px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-32 mt-[50px]">
        <fieldset>
          <legend>
            <h1 className="ReservationTextH1 text-[#495e57] font-bold text-2xl sm:text-3xl underline">
              Reservation of Table
            </h1>
          </legend>

          {/* Section 1: Name and Occasion */}
          <section className="SectionsOftheForm flex flex-col sm:flex-row text-[16px] sm:text-[18px] mt-5 gap-4 sm:gap-20">
            {/* Name */}
            <div className="nameandinputform flex flex-col relative w-full">
              <label htmlFor="name">
                <span className="text-[red]">*</span>Name :
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.name.value}
                  onChange={(e) => updateField('name', e.target.value)}
                  onBlur={() => touchField('name')}
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.name.isTouched && !formData.name.value ? (
                    <ErrorMessage />
                  ) : formData.name.isTouched && formData.name.value.length > 2 ? (
                    <SuccessMessage />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Occasion */}
            <div className="nameandinputform w-full">
              <label htmlFor="occasion">
                <span className="text-[red]">*</span>Occasion:
              </label>
              <div className="relative">
                <select
                  id="occasion"
                  name="occasion"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.occasion.value}
                  onChange={(e) => updateField('occasion', e.target.value)}
                  onBlur={() => touchField('occasion')}
                >
                  <option value="">Select Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.occasion.isTouched && formData.occasion.value === '' ? (
                    <ErrorMessage />
                  ) : formData.occasion.isTouched ? (
                    <SuccessMessage />
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Date, Time, Number of Guests */}
          <section className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-5">
            {/* Date */}
            <div className="nameandinputform w-full">
              <label htmlFor="date">
                <span className="text-[red]">*</span>Date :
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.date.value}
                  onChange={handleDateChange}
                  onBlur={() => touchField('date')}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.date.isTouched && !formData.date.value ? (
                    <ErrorMessage />
                  ) : formData.date.isTouched ? (
                    <SuccessMessage />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="nameandinputform w-full">
              <label htmlFor="time">
                <span className="text-[red]">*</span>Time:
              </label>
              <div className="relative">
                <select
                  id="time"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.time.value}
                  onChange={(e) => updateField('time', e.target.value)}
                  onBlur={() => touchField('time')}
                >
                  <option value="">none</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.time.isTouched && !formData.time.value ? (
                    <ErrorMessage />
                  ) : formData.time.isTouched ? (
                    <SuccessMessage />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Number of Guests */}
            <div className="nameandinputform w-full">
              <label htmlFor="numGuests">
                <span className="text-[red]">*</span>No. of Guests:
              </label>
              <div className="relative">
                <select
                  id="numGuests"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.numGuests.value}
                  onChange={(e) => updateField('numGuests', e.target.value)}
                  onBlur={() => touchField('numGuests')}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                  <option value="10+">10+</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.numGuests.isTouched && formData.numGuests.value ? <SuccessMessage /> : null}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Mobile and Email */}
          <section className="SectionsOftheForm flex flex-col sm:flex-row gap-4 sm:gap-16 mt-5">
            {/* Mobile */}
            <div className="nameandinputform w-full">
              <label htmlFor="mobile">
                <span className="text-[red]">*</span>Mobile
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Mobile"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.mobile.value}
                  onChange={(e) => updateField('mobile', e.target.value)}
                  onBlur={() => touchField('mobile')}
                  pattern="[0-9]{8,}"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.mobile.isTouched && formData.mobile.value.length >= 8 ? (
                    <SuccessMessage />
                  ) : formData.mobile.isTouched ? (
                    <ErrorMessage />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="nameandinputform w-full">
              <label htmlFor="email">
                <span className="text-[red]">*</span>Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-[#d9d9d9] rounded-[10px] py-4 px-3 text-[16px] sm:text-[18px]"
                  value={formData.email.value}
                  onChange={(e) => updateField('email', e.target.value)}
                  onBlur={() => touchField('email')}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.email.isTouched && validator.isEmail(formData.email.value) ? (
                    <SuccessMessage />
                  ) : formData.email.isTouched ? (
                    <ErrorMessage />
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <div className="buttonsContainer mt-5 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-end">
            <button
              type="reset"
              className="border-2 border-[#495e57] rounded-[10px] font-bold text-[#495e57] py-2 px-6 sm:px-12 hover:translate-y-1 duration-500"
              onClick={clearForm}
            >
              Reset
            </button>
            <button
              type="submit"
              className="ContinueButton bg-[#495e57] text-white py-2 px-6 sm:px-12 font-bold rounded-[10px] hover:translate-y-1 duration-500"
            >
              Continue
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
