import React, { useContext } from 'react';
import { InfoContext } from '../../ContextAPI/ContextAPI';

import SuccesPicture from "../../assets/images/SuccessPicture.png"

export default function Success( {navigateFunc}){
     const { userInfo } = useContext(InfoContext);
    
      const {date, time } = userInfo;
    
    return(
        <>
         <div className="SuccesssectionP">
             <form className=' bg-[#edefee] rounded-[20px] px-[64px] py-[32px] text-center mt-[50px]' > 
                <div className="SuccesSectionPage">
                            
                        <div>
                            <img src={SuccesPicture} alt="succesPicture" className="PictureSu flex justify-center ml-[6%] md:ml-[33%]"></img>
                       </div>
                         </div>
                         <section className="textofSuccessSectionPage">
                            <p className="boldSuccessSection">
                                <b>Congratulations on your successful table reservation!</b>
                            </p>
                            <p className="boldSuccessSection mt-[20px]">
                              Your Reservation ID is <b>1746430483380</b>and your table is reserved for <b> {date.value} </b>at <b>{time.value}</b>
                            </p>
                            <p className="boldSuccessSection mt-[20px]">
                               Get ready to indulge in a delightful dining experience! We have sent the reservation details to your email and mobile number. Enjoy your meal!
                            </p>
                         </section>
                      <div className="buttonsContainerS mt-[20px]">
                         <button className="ContinueButton mt-[30px] bg-[#f4ce14] rounded-[10px] cursor-pointer text-[20px]  p-[10px] w-[165px] font-bold hover:translate-y-2  duration-500 easy-in-out"
                         onClick={() => navigateFunc('/')}>
                            Home 
                          </button>
                      </div>
                  
                </form>
            </div>
        </>
    )
}