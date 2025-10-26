import logo from '../assets/images/logo footer.svg'
function Footer (){
    return(
        <>
        <div className="flex flex-col text-center text-white justify-center  md:flex-row  bg-[#495e57] px-[20px] py-[32px] md:px-[288px] md:py-[32px]">

        
         <figure className='w-[40%]  ml-[30%] md:ml-[0%] md:w-[20%]  '>
            <img src={logo}></img>
            </figure>
{/* Contact Section */}
            <div className='flex flex-col md:flex-row  mt-[40px] md:mt-[0px]  md:ml-[150px] md:mt-[30px]  space-x-9'>
             <div className="ReachOutToUs ">
                <h4 className='text-[#f4ce14] text-[23px] font-bold mb-[14px] md:mb-[0px]'>Reach out to us </h4>
                <address>
                    <p className="PwithUnderline underline font-semibold ">
                        Address:
                    </p>
                    <p className='font-semibold'>
                       Little Lemon Restaurant
                       <br></br>
                       123 Main Street
                       <br></br>
                       Anytown, USA 12345
                    </p>
                    <p className="PwithUnderline underline font-semibold ">Email Address:</p>
                    <p className='cursor-pointer hover:text-[#333] font-semibold'><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                    <p className="PwithUnderline underline font-semibold ">Phone Number:</p>
                    <p className='cursor-pointer hover:text-[#333] font-semibold'><a href="tel:+15551234567">(555) 123-4567</a></p>
                </address>
            </div>
 {/* "Get to know us" Section */}
            <div className="GetToKnowUS ">
            <h4 className='text-[#f4ce14] text-[23px] font-bold mb-[14px] md:mb-[0px] '>Get to know us </h4>
            <ul>
                 <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="#about">About</a></li>
                 <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="#careers">Careers</a></li>
                 <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="#press-releases">Press Releases</a></li>
                 <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="#exclusive-recipes">Exclusive Recipes</a></li>
                 <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="#our-kitchen">Our Kitchen</a></li>
             </ul>
            </div>
{/* Social Media Links */}
            <div className="SocialMediaLinks  ">
                 <h4 className='text-[#f4ce14] text-[23px] font-bold mb-[14px] md:mb-[0px]'>Connect with us</h4>
                 <ul>
                      <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="https://facebook.com/littlelemon">Facebook</a></li>
                      <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="https://instagram.com/littlelemon">Instagram</a></li>
                      <li className='cursor-pointer hover:text-[#333] font-semibold'><a href="https://linkedin.com/littlelemon">LinkedIn</a></li>
                </ul>
            </div>
           </div>
       </div>
        </>
    )
}
export default Footer