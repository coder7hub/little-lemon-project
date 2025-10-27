import React, { useContext } from 'react';
import { InfoContext } from '../../ContextAPI/ContextAPI';

import ReviesPicture from '../../assets/images/reviewsectionPic.jpg';
import LittleLemonReviews from '../../assets/images/littlelimonreviewspicrture.png';

export default function Reviews({ continueToNextStep, goBackToPreviousStep }) {
  const { userInfo } = useContext(InfoContext);

  const { name, occasion, date, time, numGuests, mobile, email } = userInfo;

  return (
    <>
      <div >
        {/* Decorative Shape */}
       

        {/* Form Container */}
        <div>
          <form className="bg-[#edefee] rounded-[20px] px-4 sm:px-8 py-6 sm:py-8 mt-[50px]">
            <fieldset>
              <legend>
                <h1 className="ReservationTextH1 text-[#495e57] font-bold text-3xl underline text-center sm:text-left">
                  Review the Details
                </h1>
              </legend>

              {/* Review Section */}
              <section className="SectionsOftheForm pt-4 mt-4 flex flex-col md:flex-row gap-6 md:gap-[36px] items-center justify-center">
                <div className="reviesContainmain flex flex-col md:flex-row items-center md:items-start bg-[#495e57] rounded-[31px] gap-6 md:gap-[120px] py-6 md:py-[30px] px-6 md:px-[60px] text-white font-bold text-[17px] w-full">

                  {/* Image Section */}
                  <figure className="figureimagesectio bg-white rounded-[18px] w-full md:w-auto">
                    <img
                      className="pictureOFreservation w-full md:w-auto h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                      src={ReviesPicture}
                      alt="Review"
                    />
                    <figcaption>
                      <div className="textoffigcaption flex flex-row gap-2 justify-center md:justify-start">
                        <div className="textHP flex flex-col py-2 px-3">
                          <h4 className="text-[#495e57] text-[16px]">Happy {occasion.value}</h4>
                          <p className="text-[#495e57] text-[13px]">From Little Lemon</p>
                        </div>
                        <div>
                          <img className="h-[40px] mt-2" src={LittleLemonReviews} alt="Logo" />
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  {/* Info Section */}
                  <div className="infoReservationContainer flex flex-col text-center md:text-left gap-4 w-full md:w-auto">
                    <div className="flex flex-col md:flex-row md:gap-2">
                      Reservation for: <span>{name.value}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-2">
                      Date: <span>{date.value}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-2">
                      Time: {time.value}
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-2">
                      No.Guests: <span>{numGuests.value}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-2">
                      Mobile: <span>{mobile.value}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-2">
                      Email: <span>{email.value}</span>
                    </div>
                  </div>

                </div>
              </section>

              {/* Buttons */}
              <div className="buttonsContainer mt-4 flex flex-col sm:flex-row gap-4 justify-between md:justify-end">
                <button
                  className="Resetbutton border-2 border-[#495e57] rounded-[10px] py-2 px-6 font-bold text-[#495e57] hover:bg-[#f4ce14] hover:text-black transition"
                  type="reset"
                  onClick={goBackToPreviousStep}
                >
                  Back
                </button>

                <button
                  className="ContinueButton bg-[#495e57] text-white py-2 px-6 rounded-[10px] font-bold hover:bg-[#f4ce14] hover:text-black transition"
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
