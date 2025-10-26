import {FaTruck} from 'react-icons/fa'

function SpecialsCard ({name,image,info,price,delivery}){
    return (
        <>
        <div className="space[60px]">

            <div>
                <img src={image} alt={image} className="rounded-t-[20px] w-[275px] h-[178px]"/> 
            </div>
            <div className="flex flex-col  gap-[40px] p-[20px]">
                <div className="flex flex-row justify-between">
                    <h4 className="text-[19px] font-semibold">
                        {name}
                    </h4>
                     <p className="text-[#ee9972] text-[16px] font-bold ">${price}</p>
                </div>
                <div>
                    <p className="text-[#495e57] w-[230px]">
                        {info}
                    </p>
                </div>
                <div className=" flex flex-row  align-center font-[16px] font-semibold  ">
                    {delivery} 

                  <p className="pl-2 pt-[5px] " > <FaTruck  /></p>
                </div>

            </div>
            
        </div>


        </>
    )
}
export default SpecialsCard