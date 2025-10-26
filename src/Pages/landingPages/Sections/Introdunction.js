import InfoPicture from '../../../assets/images/About.892d0eda0aaf84567d3d.png'
function introduction (){
    return (
        <>
        <div className="flex flex-col md:flex-row  px-[20px] py-[32px] md:px-[288px] md:py-[32px]" id="about">
            <div className=" text-center">
                <div className="mb-[30px] ">
                <h1 className='font-bold text-[40px] md:text-[45px]  md:mt-[20px]'>Little Lemon</h1>
                <h4 className='text-[18px] font-semibold md:mt-[20px]'>Chicago</h4>
                </div>
               
                <p className='text-[#495e57] text-[17px] font-medium' >Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>

            </div >
            {/*right side :photo */}
           
                <img src={InfoPicture } alt="InfoPhot" className="w-[70%] md:w-[50%] ml-[60px] mt-[30px]"/>
            
        </div>
        </>
    )
}export default introduction;