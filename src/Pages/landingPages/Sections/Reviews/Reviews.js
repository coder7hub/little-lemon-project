import ReviewsCard from "./ReviewsCard"
import ProfileIMage from "../../../../assets/images/ProfileImage.png"

const reviewsList = [
    {
      id:1,
      name:`Joshua`,
      image : ProfileIMage,
     
      reviews:16,
      Comment:"Decadent, delicious dessert - the perfect ending to a fantastic meal."
      

    },
    {
        id:2,
        name:`Sasha`,
        image : ProfileIMage,
      
        reviews:10 ,
        Comment:`The pasta dish was flavorful and hearty, and the portion size was generous.`
        
  
    },
    {
        id:3,
        name:`Robin`,
        image : ProfileIMage,
       
        reviews:9,
        Comment:`The sushi was fresh and flavorful, and the presentation was beautiful.`
        
  
    },
    {
        id:4,
        name:`Natasha`,
        image : ProfileIMage,
       
        reviews:14,
        Comment:`The pizza was delicious, with just the right amount of cheese and amazing toppings.`
        
  
    }
]
function reviews (){
    return (

        <>
        {/*section of the reviews */}
        <section className="flex flex-col md:flex-row  bg-[#495e57] px-[20px] py-[42px] md:px-[288px] md:py-[32px]">
         <div>
            {/**title  */}
             <div className="flex justify-center ">
                <h1  className="text-[#f4ce14] font-semibold text-[32px] md:text-[45px]">Valuable Customer Reviews</h1>
            </div>
            {/* card  */}
            <div className=" flex  flex-col   justify-center ml-[100px] md:ml-[0px] md:flex-row gap-[30px] space-y-[30px] mt-[30px] ">
                {reviewsList.map(card=>(
                    <div key={card.id}  className=" flex    text-center p-[15px]  w-[220px] h-[160px] bg-[#fff] cursor-pointer  transition  duration-[400ms] ease-in-out transform hover:h-[220px]  "
                    >
                     <ReviewsCard 
                      name={card.name}
                     image={card.image}
                     reviews={card.reviews}
                     Comment={card.Comment}/>
                     </div>
                ))}
            
            </div>
         </div>
        </section>
        </>
    )
} 
export default reviews