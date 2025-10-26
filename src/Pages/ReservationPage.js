import { useState ,useReducer } from 'react';
import { InfoProvider } from '../ContextAPI/ContextAPI';
import ReservationSection1 from './ReservationPages/ReservationSection';
import ReviewsSection2 from './ReservationPages/Reviews';
import PaymentSection3 from './ReservationPages/Payment';
import Success4 from './ReservationPages/Success';

const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

export default function Reservation({ navigateFunc }) {
  const [step, setStep] = useState(1);
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  const continueToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };
  const goBackToPreviousStep = () => {
    setStep(prevStep => Math.max(1, prevStep - 1));
  };

  

  return (
    <>
      <InfoProvider>
        <div className='flex flex-col md:flex-col  px-[20px] py-[32px] md:px-[288px] md:py-[32px]'>
          {/* Steps Header */}
          <div className="stepsOFreservation  flex flex-row justify-between  align-center pt-[16px] px-[48px] ">
            <div className="StepFirstCont  ">
             <div className={` w-[39px] h-[39px] md:w-[45px] md:h-[45px] rotate-45 bg-[#495e57] ml-[23px]  ${step === 1 ? 'bg-[#495e57] '  : step > 1 ? 'bg-yellow-400 text-black' : 'bg-[#495e57]'}`}>

                <p className='   text-2xl text-white  pl-[11px] pt-[3px] -rotate-45'>1</p>
              </div>
              <p className="text-[18px] text-base/6 pt-[18px] text-[#495e57] font-medium">Reservation</p>
            </div>
            <div className="StepFirstCont">
              <div className={`w-[39px] h-[39px]  md:w-[45px] md:h-[45px] rotate-45 bg-[#495e57] ml-[5px] ${step === 2 ? 'bg-[#495e57]' : step > 2 ? 'bg-yellow-400 items-black' : 'bg-[#495e57]'}`}>
                <p className='   text-2xl text-white  pl-[11px] pt-[3px] -rotate-45'>2</p>
              </div>
              <p className="text-[18px] text-base/6 pt-[18px] text-[#495e57] font-medium">Review</p>
            </div>
            <div className="StepFirstCont flex flex-col align-center">
              <div className={`w-[39px] h-[39px]  md:w-[45px] md:h-[45px] rotate-45 bg-[#495e57] ml-[10px] ${step === 3 ? 'bg-[#495e57]' : step > 3 ? 'bg-yellow-400' : 'bg-[#495e57]'}`}>
                <p className='   text-2xl text-white  pl-[11px] pt-[3px] -rotate-45'>3</p>
              </div>
              <p className="text-[18px] text-base/6 pt-[18px] text-[#495e57] font-medium">Payment</p>
            </div>
          </div>

          {/* Step Forms */}
          {step === 1 && (
            <ReservationSection1
              continueToNextStep={continueToNextStep}
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          )}
          {step === 2 && (
            <ReviewsSection2
              continueToNextStep={continueToNextStep}
              goBackToPreviousStep={goBackToPreviousStep}
            />
          )}
          {step === 3 && (
            <PaymentSection3
              continueToNextStep={continueToNextStep}
              goBackToPreviousStep={goBackToPreviousStep}
            />
          )}
          {step === 4 && (
            <Success4
              navigateFunc={navigateFunc}
              continueToNextStep={continueToNextStep}
              goBackToPreviousStep={goBackToPreviousStep}
            />
          )}
        </div>
      </InfoProvider>
    </>
  );
}