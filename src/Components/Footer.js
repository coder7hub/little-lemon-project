import logo from '../assets/images/logo footer.svg';

function Footer() {
  return (
    <>
      <div className="flex flex-col text-center text-white justify-center md:flex-row bg-[#495e57] px-[16px] sm:px-[20px] py-[32px] md:px-[288px] md:py-[32px]">
        {/* Logo */}
        <figure className="w-[60%] sm:w-[40%] ml-[20%] sm:ml-[30%] md:ml-[0%] md:w-[20%] mb-[20px] md:mb-0">
          <img src={logo} alt="Little Lemon Logo" className="w-full h-auto" />
        </figure>

        {/* Contact Sections */}
        <div className="flex flex-col md:flex-row mt-[20px] sm:mt-[40px] md:mt-[30px] md:ml-[150px] gap-[30px] sm:gap-[40px] md:gap-[60px] text-[14px] sm:text-[16px]">
          {/* Reach Out To Us */}
          <div className="ReachOutToUs flex flex-col items-center md:items-start">
            <h4 className="text-[#f4ce14] text-[20px] sm:text-[23px] font-bold mb-[10px] md:mb-[14px]">
              Reach out to us
            </h4>
            <address className="not-italic">
              <p className="underline font-semibold">Address:</p>
              <p className="font-semibold leading-relaxed">
                Little Lemon Restaurant
                <br />
                123 Main Street
                <br />
                Anytown, USA 12345
              </p>
              <p className="underline font-semibold mt-[8px]">Email Address:</p>
              <p className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
              </p>
              <p className="underline font-semibold mt-[8px]">Phone Number:</p>
              <p className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="tel:+15551234567">(555) 123-4567</a>
              </p>
            </address>
          </div>

          {/* Get To Know Us */}
          <div className="GetToKnowUS flex flex-col items-center md:items-start">
            <h4 className="text-[#f4ce14] text-[20px] sm:text-[23px] font-bold mb-[10px] md:mb-[14px]">
              Get to know us
            </h4>
            <ul className="space-y-[6px] sm:space-y-[8px]">
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="#careers">Careers</a>
              </li>
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="#press-releases">Press Releases</a>
              </li>
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="#exclusive-recipes">Exclusive Recipes</a>
              </li>
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="#our-kitchen">Our Kitchen</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="SocialMediaLinks flex flex-col items-center md:items-start">
            <h4 className="text-[#f4ce14] text-[20px] sm:text-[23px] font-bold mb-[10px] md:mb-[14px]">
              Connect with us
            </h4>
            <ul className="space-y-[6px] sm:space-y-[8px]">
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li className="cursor-pointer hover:text-[#333] font-semibold">
                <a href="https://linkedin.com/littlelemon" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
