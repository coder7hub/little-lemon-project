import React, { useContext } from 'react';
import { InfoContext } from '../../ContextAPI/ContextAPI';

import ReviesPicture from '../../assets/images/reviewsectionPic.jpg'
import LittleLemonReviews from '../../assets/images/littlelimonreviewspicrture.png'



export default function Reviews({continueToNextStep,goBackToPreviousStep}) {
  
  const { userInfo } = useContext(InfoContext);

  const {name , occasion,date, time ,numGuests ,mobile , email} = userInfo;
    return (
        <>
        <div className="">
          <div className="shapeofReviewsSection flex justify-center translate-x-3 ">
           <svg width="200" height="50" viewBox="0 0 100 38">
                <path d="M 99.4912 38 C 93.4848 38 87.7963 35.3005 83.998 30.6475 L 65.4932 7.97917 C 57.4905 -1.82412 42.5095 -1.82411 34.5068 7.97918 L 16.002 30.6475 C 12.2037 35.3005 6.51524 38 0.508789 38 H 99.4912 Z" 
                fill="rgb(237, 239, 238)" fill-rule="evenodd" clip-rule="evenodd"/>
           </svg>
         </div>
         <div className>
             <form className=' bg-[#edefee] rounded-[20px] px-[44px] py-[32px]' >
                  <fieldset>
                      <legend>
                           <h1 className="ReservationTextH1 text-[#495e57] font-bold text-3xl underline">Review the Details</h1>
                      </legend>
                      <section className="SectionsOftheForm pt-[18px] mt-[20px] flex flex-col md:flex-row gap-[36px] align-center justify-center">
                        <div className="reviesContainmain flex flex-col md:flex-row align-center bg-[#495e57] rounded-[31px] md:gap-[120px] gap-[30px] py-[30px] px-[60px] text-white font-bold text-[17px]">
                         <figure className='figureimagesectio bg-white rounded-[18px] ' >
                            <img  className ="pictureOFreservation  h-[250px] rounded-t-lg"src={ReviesPicture }></img>
                              <figcaption>
                                <div className='textoffigcaption flex flex-row gap-[3px] justify-center'>
                                  <div className='textHP flex flex-col py-[8px] px-[10px]'> 
                                    <h4 className='text-[#495e57] text-[16px]'>
                                       Happy {occasion.value}
                                       </h4>
                                       <p className=' text-[#495e57] text-[13px]'>
                                       From Little Lemon
                                       </p>
                                  </div>
                                   
                                       <div>
                                         <img className=" h-[40px] flex item-center  mt-2" src={LittleLemonReviews}>
                                         </img>
                                       </div>
                                </div>
                            
                            </figcaption>
                         </figure>
                         {/* */}
                         <div className="infoReservationContainer flex flex-col text-center gap-[20px] md:mt-[20px] ">
                            <div  className='flex flex-col md:flex-row  md:gap-[10px]  '>
                               Reservation for:<span>{name.value}</span>
                            </div>
                           
                            <div className='flex flex-col md:flex-row md:gap-[10px] '>
                                 Date:  <span>{date.value}</span>
                            </div>
                            <div className='flex flex-col md:flex-row md:gap-[10px]   '>
                                 Time: {time.value}
                            </div>
                            <div className='flex flex-col md:flex-row   md:gap-[10px]  '>
                                 No.Guests:  <span> {numGuests.value} </span>
                            </div>
                            <div className='flex flex-col md:flex-row  md:gap-[10px] '>
                                Mobile:  <span> {mobile.value} </span>
                            </div>
                            <div className='flex flex-col md:flex-row  md:gap-[10px] '>
                               Email:  <span>{email.value}</span>
                            </div>
                         </div>
                        </div>
                   </section>
                      {/*Button */}
                      <div className="buttonsContainer buttonsContainer  mt-[18px] flex gap-[36px] justify-between md:justify-end">
                          <button 
                          className="Resetbutton  border-3 border-[#495e57 ] rounded-[10px] cursor-pointer md:text-[22px] font-bold text-[#495e57] md:py-[10px] md:px-[50px] py-[10px] px-[40px] hover:translate-y-2  duration-500 easy-in-out" 
                          type="reset"
                          onClick={goBackToPreviousStep}>
                            Back
                          </button>
                         
                          <button 
                         
                          className="ContinueButton  bg-[#495e57] text-white py-[10px] px-[40px]  md:py-[10px] md:px-[50px] cursor-pointer font-bold rounded-[10px] md:text-[22px] hover:translate-y-2  duration-500 easy-in-out" 
                          type="submit"
                          onClick={continueToNextStep}>
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
