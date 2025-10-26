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

// ReservationSection1: Form for table reservations with dynamic time selection
export default function ReservationSection1({ continueToNextStep, availableTimes, dispatch }) {
  const { setUserInfo } = useContext(InfoContext);

// State: Tracks form field values and touch states for validation
  const [formData, setFormData] = useState({
    name: { value: '', isTouched: false },
    occasion: { value: '', isTouched: false },
    date: { value: '', isTouched: false },
    time: { value: '', isTouched: false },
    numGuests: { value: '', isTouched: false },
    mobile: { value: '', isTouched: false },
    email: { value: '', isTouched: false }
  });

// Function: Updates a specific form field’s value in formData
  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], value }
    }));
  };

// Function: Marks a form field as touched for validation
  const touchField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], isTouched: true }
    }));
  };

// Function: Validates form fields for submission
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

// Function: Resets form fields to initial state
  const clearForm = () => {
    const cleared = {};
    Object.keys(formData).forEach((key) => {
      cleared[key] = { value: '', isTouched: false };
    });
    setFormData(cleared);
  };

// Function: Marks empty fields as touched for validation
  const validateFields = () => {
    Object.keys(formData).forEach((field) => {
      if (!formData[field].value) {
        touchField(field);
      }
    });
  };

// Function: Handles form submission, validates, and proceeds to next step
  const Submit = (e) => {
    e.preventDefault();
    validateFields();
    if (!getIsFormValid()) return;
    setUserInfo(formData);
    clearForm();
    continueToNextStep();
  };

// Function: Updates date field and dispatches action to update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    updateField('date', selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

// JSX: Reservation form UI
  return (
    <div className="contReservation">
      <div className="h-[40px] w-[40px] ">
        <svg width="200" height="50" viewBox="0 0 100 38">
          <path
            d="M 99.4912 38 C 93.4848 38 87.7963 35.3005 83.998 30.6475 L 65.4932 7.97917 C 57.4905 -1.82412 42.5095 -1.82411 34.5068 7.97918 L 16.002 30.6475 C 12.2037 35.3005 6.51524 38 0.508789 38 H 99.4912 Z"
            fill="rgb(237, 239, 238)"
          />
        </svg>
      </div>
      {/* Form: Collects reservation details */}
      <form onSubmit={Submit} className='  bg-[#edefee] rounded-[20px] px-[64px] py-[32px]'>
        <fieldset>
          <legend>
            <h1 className="ReservationTextH1  text-[#495e57] font-bold text-3xl underline ">Reservation of Table</h1>
          </legend>
{/* Section 1: Name and Occasion */}
          <section className="SectionsOftheForm flex  flex-col md:flex-row    text-[18px] mt-[20px]  md:gap-[250px] gap-[20px] ">
{/* Field: Name */}
            <div className="nameandinputform flex flex-col relative">
              <label htmlFor="name">
                <span className='text-[red]'>*</span>Name :
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full bg-[#d9d9d9]   rounded-[10px] text-[18px]  text-[18px] py-[18px] px-[30px]  md:w-[156%]  "
                value={formData.name.value}
                onChange={(e) => updateField('name', e.target.value)}
                onBlur={() => touchField('name')}
                required
              />
              {/* Validation: Error if empty, Success if length > 2 */}
              <div className="ErrorMessageDisplay md:flex md:absolute md:left-[12px] top-[54%] md:top-[54%]">
                {formData.name.isTouched && !formData.name.value ? (
                  <ErrorMessage />
                ) : formData.name.isTouched && formData.name.value.length > 2 ? (
                  <SuccessMessage />
                ) : null}
              </div>
            </div>
{/* Field: Occasion */}
            <div className="nameandinputform">
              <label htmlFor="occasion">
                <span className='text-[red]'>*</span>Occasion:
              </label>
              <select
                id="occasion"
                name="occasion"
                className="w-full bg-[#d9d9d9]    md:w-[140%] rounded-[10px]  text-[18px]   py-[20px]  px-[30px]    "
                value={formData.occasion.value}
                onChange={(e) => updateField('occasion', e.target.value)}
                onBlur={() => touchField('occasion')}
              >
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {/* Validation: Error if empty, Success if selected */}
              <div className="ErrorMessageDisplay md:flex md:absolute   md:left-[890px] md:top-[52.8%]">
                {formData.occasion.isTouched && formData.occasion.value === '' ? (
                  <ErrorMessage />
                ) : formData.occasion.isTouched ? (
                  <SuccessMessage />
                ) : null}
              </div>
            </div>
          </section>
{/* Section 2: Date, Time, Number of Guests */}
          <section className="flex flex-col md:flex-row gap-[20px] mt-[20px] md:gap-[89px]">
{/* Field: Date - Triggers dispatch for available times */}
            <div className="nameandinputform">
              <label htmlFor="date">
                <span className='text-[red]'>*</span>Date :
              </label>
              <input
                type="date"
                id="date"
                className="inputDateTimeNoGuest w-full bg-[#d9d9d9]   rounded-[10px]  text-[18px] py-[20px] px-[30px]    "
                value={formData.date.value}
                onChange={handleDateChange}
                onBlur={() => touchField('date')}
              />
              {/* Validation: Error if empty, Success if selected */}
              <div className="ErrorMessageDisplay md:flex absolute md:left-[362px] md:top-[66.5%]">
                {formData.date.isTouched && !formData.date.value ? (
                  <ErrorMessage />
                ) : formData.date.isTouched ? (
                  <SuccessMessage />
                ) : null}
              </div>
            </div>
{/* Field: Time - Populated from availableTimes prop */}
            <div className="nameandinputform  ">
              <label htmlFor="time">
                <span className='text-[red]'>*</span>Time:
              </label>
              <select
                id="time"
                className="inputDateTimeNoGuest md:w-[140%] w-full bg-[#d9d9d9]   text-[18px] rounded-[10px]  py-[20px] px-[30px]    "
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
              {/* Validation: Error if empty, Success if selected */}
              <div className="ErrorMessageDispla md:absolute md:left-[711px] md:top-[66.5%]">
                {formData.time.isTouched && !formData.time.value ? (
                  <ErrorMessage />
                ) : formData.time.isTouched ? (
                  <SuccessMessage />
                ) : null}
              </div>
            </div>
{/* Field: Number of Guests */}
            <div className="nameandinputform md:ml-[70px]   " >
              <label htmlFor="numGuests">
                <span className='text-[red]'>*</span>No. of Guests:
              </label>
              <select
                id="numGuests"
                className="inputDateTimeNoGuest  w-full bg-[#d9d9d9]   rounded-[10px]  text-[18px] py-[20px] px-[30px]  md:w-[122%]  "
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
               {/* Validation: Success if selected */}
              <div className="ErrorMessageDisplay  md:absolute md:left-[1038px] md:top-[66.3%]">
                {formData.numGuests.isTouched && formData.numGuests.value ? (
                  <SuccessMessage />
                ) : null}
              </div>
            </div>
          </section>
{/* Section 3: Mobile and Email */}
          <section className="SectionsOftheForm mt-[20px]  flex flex-col md:flex-row md:gap-[198px] gap-[20px]">
{/* Field: Mobile */}
            <div className="nameandinputform">
              <label htmlFor="mobile">
                <span className='text-[red]'>*</span>Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Mobile"
                className="w-full bg-[#d9d9d9]    md:w-[135%] rounded-[10px]   text-[18px] py-[20px]  px-[30px]  "
                value={formData.mobile.value}
                onChange={(e) => updateField('mobile', e.target.value)}
                onBlur={() => touchField('mobile')}
                pattern="[0-9]{8,}"
              />
              {/* Validation: Error if length < 8, Success if valid */}
              <div className="ErrorMessageDisplay  md:absolute md:left-[360px] md:top-[81%]">
                {formData.mobile.isTouched && formData.mobile.value.length >= 8 ? (
                  <SuccessMessage />
                ) : formData.mobile.isTouched ? (
                  <ErrorMessage />
                ) : null}
              </div>
            </div>
{/* Field: Email */}
            <div className="nameandinputform">
              <label htmlFor="email">
                <span className='text-[red]'>*</span>Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full bg-[#d9d9d9]    md:w-[126%] rounded-[10px]   text-[18px] py-[20px]  px-[30px]   "
                value={formData.email.value}
                onChange={(e) => updateField('email', e.target.value)}
                onBlur={() => touchField('email')}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              {/* Validation: Error if invalid, Success if valid email */}
              <div className="ErrorMessageDisplay  md:absolute md:left-[890px] md:top-[81.1%]">
                {formData.email.isTouched && validator.isEmail(formData.email.value) ? (
                  <SuccessMessage />
                ) : formData.mobile.isTouched ? (
                  <ErrorMessage />
                ) : null}
              </div>
            </div>
          </section>
{/* Button Section: Reset clears form, Continue submits to next step */}
          <div className="buttonsContainer  mt-[18px] flex gap-[36px] justify-between md:justify-end">
            <button type="reset" className="border-3 border-[#495e57 ] rounded-[10px] cursor-pointer md:text-[22px] font-bold text-[#495e57] md:py-[10px] md:px-[50px] py-[10px] px-[40px] cursor-pointer duration-500  hover:translate-y-2 easy-in-out " onClick={clearForm}>
              Reset
            </button>
            <button type="submit" className="ContinueButton bg-[#495e57] text-white py-[10px] px-[40px]  md:py-[10px] md:px-[50px] cursor-pointer font-bold rounded-[10px] md:text-[22px] cursor-pointer hover:translate-y-2  duration-500 easy-in-out">
              Continue
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}