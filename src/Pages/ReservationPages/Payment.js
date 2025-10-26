import React, { useContext } from 'react';
import { InfoContext } from '../../ContextAPI/ContextAPI';

export default function Payment({goBackToPreviousStep,continueToNextStep}) {
   
  const { userInfo } = useContext(InfoContext);
  const {numGuests } = userInfo;
  return (
        <>
          <div className="">
          <div className="shapeofReviewsSection3 shapeofReviewsSection flex justify-end  translate-x-4">
           <svg width="200" height="50" viewBox="0 0 100 38">
                <path d="M 99.4912 38 C 93.4848 38 87.7963 35.3005 83.998 30.6475 L 65.4932 7.97917 C 57.4905 -1.82412 42.5095 -1.82411 34.5068 7.97918 L 16.002 30.6475 C 12.2037 35.3005 6.51524 38 0.508789 38 H 99.4912 Z" 
                fill="rgb(237, 239, 238)" fill-rule="evenodd" clip-rule="evenodd"/>
           </svg>
         </div>
         <div>
             <form className=' bg-[#edefee] rounded-[20px] px-[44px] py-[32px]' >
                  <fieldset>
                      <legend>
                           <h1 className="ReservationTextH1 ReservationTextH1 text-[#495e57] font-bold text-3xl underline">Payments Selection</h1>
                      </legend>

                      <div className="form-payment flex flex-col-reverse md:flex-row md:justify-between">
                        <section className="Lemonpaymentsection">
                          <article className="payment-icon flex flex-row   justify-evenly  mt-[40px] ">
                            <div className="iconbg  bg-[#ffffff] rounded-[100%] py-[3px] px-[3px]">
                             <img width="48" height="48" src="https://img.icons8.com/color/48/google-pay.png" alt="google-pay"/>
                            </div>
                            <div className="iconbg2 bg-[#4527A0] rounded-[100%] py-[3px] px-[3px]">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/phone-pe.png" alt="phone-pe"/>
                            </div>
                            <div className="iconbg bg-[#ffffff] rounded-[100%] py-[3px] px-[3px]">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/paytm.png" alt="paytm"/>
                            </div>

                          </article>
                          <p className="CreditDebit flex justify-center mt-[20px] text-[#495e57] font-bold">
                            or pay using Credit / Debit Card
                          </p>
                          <article className="formpaymentcardsection mt-[20px]">
                            <div className="paymentFormInput   flex flex-col mt-[5px] ">
                              <label className="LabelPaymentsectionInput">Card Number</label>
                              <input type="number" placeholder=" 0000 0000 0000 0000" className="inputPaymentSectiondesign inputPaymentSectiondesign bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-[100%]"></input>
                            </div>
                            <div className="paymentFormInput  flex flex-col mt-[5px] ">
                              <label className="LabelPaymentsectionInput">Card Holder Full Name</label>
                              <input type="number" placeholder="Card Holder Full Name" className="inputPaymentSectiondesign bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-[100%]"></input>
                            </div>
                            <div className="paymentExpireCVVinputsection flex flex-row mt-[5px]">
                              <section className='flex flex-col'>
                                <label>Expiry Date</label>
                                <input type="num" placeholder="01/23" className="ExpiryDate  bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-[90%] "></input>
                              </section>
                              <section className='flex flex-col'>
                                <label>CVV</label>
                                <input type="num" placeholder="000" className="bg-[#d9d9d9] rounded-[10px] text-[14px] font-semibold h-[41px] p-[16px] w-[100%]" ></input>
                              </section>
                            </div>

                          </article>
                        </section>
{/*Payment Details */}
                        <section className="LemonDetailssection mt-[30px]   ">
                          <div>
                            <h4 className='font-bold  text-2xl'>Payment Details</h4>
                          </div>
                          <div className="detailinfopayment  mt-[30px] flex flex-row justify-between md:space-x-[140px]">
                            <p className="textofPaymentDetailSec font-medium text-[20px]">
                              Reservation Charge
                            </p>
                            <p className="lastchild font-medium  text-[20px]">
                              Rs. 100
                            </p>
                          </div>

                          <div className="detailinfopayment  mt-[10px] md:mt-[30px] flex flex-row justify-between">
                            <p className="textofPaymentDetailSec font-medium text-[20px]">
                             No. of Guests 
                            </p>
                            <p className="lastchild font-medium text-[20px]">
                              {numGuests.value}
                            </p>
                          </div>
                          <div className="detailinfopayment  mt-[10px] md:mt-[30px] flex flex-row justify-between">
                            <p className="textofPaymentDetailSec font-medium text-[20px]">
                              Total Charges
                            </p>
                            <p className="lastchild font-medium text-[20px]">
                             Rs.{numGuests.value * 100}
                            </p>
                          </div>
                          <div className="detailinfopayment  my-[10px] md:mt-[30px] flex flex-row justify-between">
                            <p className="textofPaymentDetailSec font-medium text-[20px]">
                               Discount
                            </p>
                            <p className="lastchild font-medium text-[20px]">
                              -Rs. {numGuests.value *10}
                            </p>
                          </div>
                         
                          <article>
                            <hr/>
                          <div className="detailinfopayment  mt-[10px] md:mt-[30px] md:mt-[0px] flex flex-row justify-between">
                            <p className="textofPaymentDetailSec font-medium text-[20px]">
                               Amount to be paid
                            </p>
                            <p className="lastchild font-medium text-[20px]">
                           <b>Rs.{(numGuests.value * 100)-(numGuests.value *10)}</b>
                            </p>
                          </div>
                          </article>
                        </section>
                      </div>
          {/*Button */}
                      <div className="buttonsContainer buttonsContainer  mt-[18px] flex gap-[36px] justify-between md:justify-end">
                          <button 
                           className="Resetbutton border-3 border-[#495e57 ] rounded-[10px] cursor-pointer md:text-[22px] font-bold text-[#495e57] md:py-[10px] md:px-[50px] py-[10px] px-[40px] hover:translate-y-2  duration-500 easy-in-out" 
                           onClick={goBackToPreviousStep}
                           >
                            Back
                          </button>
                         
                          <button className="ContinueButton ContinueButton bg-[#495e57] text-white py-[10px] px-[40px]  md:py-[10px] md:px-[50px] cursor-pointer font-bold rounded-[10px] md:text-[22px] hover:translate-y-2  duration-500 easy-in-out"
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
    )
}
