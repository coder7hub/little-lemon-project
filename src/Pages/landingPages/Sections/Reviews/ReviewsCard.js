import {FaStar} from 'react-icons/fa';


 function ReviewsCard ({name,reviews, Comment ,image , }){
    return(
        <>
        
           <div className="flex     flex-col   gap-[13px]  ">
            <div className="flex  flex-row gap-[10px]  justify-center ">
              <div className="bg-[#f4ce14] rounded-[2px] p-[3px] "> <FaStar /></div>
              <div className="bg-[#f4ce14] rounded-[2px] p-[3px]"> <FaStar /></div>
              <div className="bg-[#f4ce14] rounded-[2px] p-[3px]"> <FaStar /></div>
              <div className="bg-[#f4ce14] rounded-[2px] p-[3px]"> <FaStar /></div>
            </div>
                
              <div className="flex flex-row justify-center gap-[15px]">
                 <img src={image} alt="ProfileImage" className="h-[33px] w-[32px] rounded-[100%]" />
                  <div className="flex flex-col">
                     <h4 className='text-[18px] font-semibold'>{name}</h4>
                     <p className=' text-[#ee9972] text-[10px]'>{reviews}reviews</p>
                 </div>
             </div>
              
              <div className='box-border block [unicode-bidi:isolate] '>
               <div className=''>
                <p className='text-[#495e57] text-[16px]  '>
                   {Comment}
                </p>
               </div>
             </div>
        </div>
       
      
        </>
    )
 }export default ReviewsCard