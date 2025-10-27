import React, { useContext } from 'react';
import { InfoContext } from '../../ContextAPI/ContextAPI';

export default function Payment({ goBackToPreviousStep, continueToNextStep }) {
  const { userInfo } = useContext(InfoContext);
  const { numGuests } = userInfo;

  return (
    <>
      <div>
       

        <div className=''>
          <form className="bg-[#edefee] rounded-[20px] px-4 sm:px-[44px] py-6 sm:py-[32px] mt-[50px]">
            <fieldset>
              <legend>
                <h1 className="ReservationTextH1 text-[#495e57] font-bold text-3xl underline text-center sm:text-left">
                  Payments Selection
                </h1>
              </legend>

              {/* Payment Form and Details */}
              <div className="form-payment flex flex-col-reverse sm:flex-col md:flex-row md:justify-between gap-6">

                {/* Payment Section */}
                <section className="Lemonpaymentsection w-full md:w-auto">
                  <article className="payment-icon flex flex-row justify-evenly sm:justify-center gap-4 mt-[40px] flex-wrap">
                    <div className="iconbg bg-[#ffffff] rounded-full py-1 px-1">
                      <img width="48" height="48" src="https://img.icons8.com/color/48/google-pay.png" alt="google-pay" />
                    </div>
                    <div className="iconbg2 bg-[#4527A0] rounded-full py-1 px-1">
                      <img width="48" height="48" src="https://img.icons8.com/color/48/phone-pe.png" alt="phone-pe" />
                    </div>
                    <div className="iconbg bg-[#ffffff] rounded-full py-1 px-1">
                      <img width="48" height="48" src="https://img.icons8.com/color/48/paytm.png" alt="paytm" />
                    </div>
                  </article>

                  <p className="CreditDebit text-center sm:text-left mt-5 text-[#495e57] font-bold">
                    or pay using Credit / Debit Card
                  </p>

                  <article className="formpaymentcardsection mt-5 flex flex-col gap-4">
                    <div className="paymentFormInput flex flex-col">
                      <label className="LabelPaymentsectionInput">Card Number</label>
                      <input
                        type="number"
                        placeholder="0000 0000 0000 0000"
                        className="inputPaymentSectiondesign bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-full"
                      />
                    </div>
                    <div className="paymentFormInput flex flex-col">
                      <label className="LabelPaymentsectionInput">Card Holder Full Name</label>
                      <input
                        type="text"
                        placeholder="Card Holder Full Name"
                        className="inputPaymentSectiondesign bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-full"
                      />
                    </div>
                    <div className="paymentExpireCVVinputsection flex flex-col sm:flex-row gap-4">
                      <section className="flex flex-col w-full sm:w-1/2">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          placeholder="01/23"
                          className="ExpiryDate bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-full"
                        />
                      </section>
                      <section className="flex flex-col w-full sm:w-1/2">
                        <label>CVV</label>
                        <input
                          type="text"
                          placeholder="000"
                          className="bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-full"
                        />
                      </section>
                    </div>
                  </article>
                </section>

                {/* Payment Details Section */}
                <section className="LemonDetailssection mt-6 md:mt-0 w-full md:w-auto">
                  <div>
                    <h4 className="font-bold text-2xl text-center sm:text-left">Payment Details</h4>
                  </div>
                  <div className="detailinfopayment mt-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <p className="textofPaymentDetailSec font-medium text-[20px]">Reservation Charge</p>
                    <p className="lastchild font-medium text-[20px]">Rs. 100</p>
                  </div>
                  <div className="detailinfopayment mt-2 sm:mt-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <p className="textofPaymentDetailSec font-medium text-[20px]">No. of Guests</p>
                    <p className="lastchild font-medium text-[20px]">{numGuests.value}</p>
                  </div>
                  <div className="detailinfopayment mt-2 sm:mt-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <p className="textofPaymentDetailSec font-medium text-[20px]">Total Charges</p>
                    <p className="lastchild font-medium text-[20px]">Rs.{numGuests.value * 100}</p>
                  </div>
                  <div className="detailinfopayment mt-2 sm:mt-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <p className="textofPaymentDetailSec font-medium text-[20px]">Discount</p>
                    <p className="lastchild font-medium text-[20px]">-Rs.{numGuests.value * 10}</p>
                  </div>
                  <article className="mt-2 sm:mt-6">
                    <hr />
                    <div className="detailinfopayment mt-2 flex flex-col sm:flex-row sm:justify-between gap-2">
                      <p className="textofPaymentDetailSec font-medium text-[20px]">Amount to be paid</p>
                      <p className="lastchild font-medium text-[20px]">
                        <b>Rs.{numGuests.value * 100 - numGuests.value * 10}</b>
                      </p>
                    </div>
                  </article>
                </section>
              </div>

              {/* Buttons */}
              <div className="buttonsContainer mt-6 flex flex-col sm:flex-row gap-4 justify-between md:justify-end">
                <button
                  className="Resetbutton border-3 border-[#495e57] rounded-[10px] py-[10px] px-[40px] sm:px-[50px] font-bold text-[#495e57] hover:translate-y-1 transition duration-300"
                  onClick={goBackToPreviousStep}
                >
                  Back
                </button>
                <button
                  className="ContinueButton bg-[#495e57] text-white py-[10px] px-[40px] sm:px-[50px] rounded-[10px] font-bold hover:translate-y-1 transition duration-300"
                  type="submit"
                  onClick={continueToNextStep}
                >
                  Continue
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
