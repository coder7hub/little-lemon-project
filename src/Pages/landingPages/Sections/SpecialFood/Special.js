import SpecialsCard from "./Specials.Card";
import GreekSalad from "../../../../assets/images/id1-greek-salad.jpg";
import Bruchetta from "../../../../assets/images/id2-Bruchetta.svg";
import LemonSalad from "../../../../assets/images/id3-lemon-salad.jpg";

// Data for food this week
const ThisWeekSpecialsFood = [
  {
    id: 1,
    name: "Greek Salad",
    image: GreekSalad,
    info: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
    delivery: "Order a delivery",
  },
  {
    id: 2,
    name: "Bruchetta",
    image: Bruchetta,
    info: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 5.99,
    delivery: "Order a delivery",
  },
  {
    id: 3,
    name: "Lemon Salad",
    image: LemonSalad,
    info: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 12.99,
    delivery: "Order a delivery",
  },
];

function Special() {
  return (
    <div
      className="flex flex-col justify-center px-[16px] sm:px-[20px] py-[32px] md:px-[288px] md:py-[32px]"
      id="menu"
    >
      {/* Section title and button */}
      <div className="flex flex-col md:flex-row md:justify-between text-center md:text-start">
        <h1 className="text-[26px] sm:text-[30px] mt-[10px] font-extrabold md:text-[45px]">
          This week specials
        </h1>
        <button className="bg-[#f4ce14] mt-[20px] sm:mt-[30px] px-[20px] py-[12px] rounded-[10px] text-[16px] sm:text-[18px] font-bold cursor-pointer hover:translate-y-[2px] duration-500 ease-in-out self-center md:self-auto">
          Online Menu
        </button>
      </div>

      {/* Food cards */}
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-[30px] mt-[40px]">
        {ThisWeekSpecialsFood.map((food) => (
          <div
            key={food.id}
            className="w-[90%] sm:w-[320px] md:w-auto rounded-t-[20px] bg-[#edefee] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[1px_0px_2px_6px_rgba(37,33,33,0.1)] cursor-pointer"
          >
            <SpecialsCard
              name={food.name}
              image={food.image}
              info={food.info}
              price={food.price}
              delivery={food.delivery}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Special;
