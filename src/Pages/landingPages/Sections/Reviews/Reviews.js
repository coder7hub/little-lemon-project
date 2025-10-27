import ReviewsCard from "./ReviewsCard";
import ProfileIMage from "../../../../assets/images/ProfileImage.png";

const reviewsList = [
  {
    id: 1,
    name: "Joshua",
    image: ProfileIMage,
    reviews: 16,
    Comment:
      "Decadent, delicious dessert - the perfect ending to a fantastic meal.",
  },
  {
    id: 2,
    name: "Sasha",
    image: ProfileIMage,
    reviews: 10,
    Comment:
      "The pasta dish was flavorful and hearty, and the portion size was generous.",
  },
  {
    id: 3,
    name: "Robin",
    image: ProfileIMage,
    reviews: 9,
    Comment: "The sushi was fresh and flavorful, and the presentation was beautiful.",
  },
  {
    id: 4,
    name: "Natasha",
    image: ProfileIMage,
    reviews: 14,
    Comment:
      "The pizza was delicious, with just the right amount of cheese and amazing toppings.",
  },
];

function Reviews() {
  return (
    <>
      {/* Reviews section */}
      <section className="flex flex-col items-center bg-[#495e57] px-[16px] sm:px-[20px] py-[42px] md:px-[288px] md:py-[32px]">
        {/* Title */}
        <div className="flex justify-center text-center">
          <h1 className="text-[#f4ce14] font-semibold text-[26px] sm:text-[32px] md:text-[45px]">
            Valuable Customer Reviews
          </h1>
        </div>

        {/* Review cards */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[20px] sm:gap-[30px] mt-[30px] w-full">
          {reviewsList.map((card) => (
            <div
              key={card.id}
              className="flex text-center p-[15px] w-[85%] sm:w-[220px] sm:h-[160px] bg-[#fff] cursor-pointer transition duration-[400ms] ease-in-out transform hover:h-[220px] rounded-[10px] shadow-sm"
            >
              <ReviewsCard
                name={card.name}
                image={card.image}
                reviews={card.reviews}
                Comment={card.Comment}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Reviews;
