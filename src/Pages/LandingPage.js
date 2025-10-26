import Hero from '.././Pages/landingPages/Hero'
import SpecialFood from  '.././Pages/landingPages/Sections/SpecialFood/Special'
import Reviews from  '.././Pages/landingPages/Sections/Reviews/Reviews'
import Introdunction from  '.././Pages/landingPages/Sections/Introdunction'

function LandingPage({ navigateFunc }) {
  return (
   <>
  <div className=''>
   
  
  <Hero navigateFunc={navigateFunc} />
  <SpecialFood />
  <Reviews />
  <Introdunction />
   </div>


   </>
  );
}

export default LandingPage;
