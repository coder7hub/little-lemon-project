import { FaTruck } from "react-icons/fa";

function SpecialsCard({ name, image, info, price, delivery }) {
  return (
    <div className="flex flex-col items-center sm:items-start md:w-[240px] lg:w-[260px]">
      <img
        src={image}
        alt={name}
        className="rounded-t-[20px] w-full sm:w-[275px] h-[200px] sm:h-[178px] object-cover"
      />

      <div className="flex flex-col gap-[24px] sm:gap-[40px] p-[16px] sm:p-[20px] w-full">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-[18px] sm:text-[19px] font-semibold">{name}</h4>
          <p className="text-[#ee9972] text-[15px] sm:text-[16px] font-bold">
            ${price}
          </p>
        </div>

        <p className="text-[#495e57] text-[14px] sm:text-[15px] leading-relaxed">
          {info}
        </p>

        <div className="flex flex-row items-center font-semibold text-[15px] sm:text-[16px]">
          {delivery}
          <FaTruck className="ml-2 text-[18px]" />
        </div>
      </div>
    </div>
  );
}

export default SpecialsCard;
