import { FaStar } from "react-icons/fa";

function ReviewsCard({ name, reviews, Comment, image }) {
  return (
    <>
      <div className="flex flex-col gap-[13px] items-center sm:items-start text-center sm:text-left">
        {/* Stars */}
        <div className="flex flex-row gap-[6px] justify-center">
          {[1, 2, 3, 4].map((star) => (
            <div key={star} className="bg-[#f4ce14] rounded-[2px] p-[3px]">
              <FaStar />
            </div>
          ))}
        </div>

        {/* Profile */}
        <div className="flex flex-row justify-center sm:justify-start items-center gap-[10px]">
          <img
            src={image}
            alt="Profile"
            className="h-[33px] w-[33px] rounded-full object-cover"
          />
          <div className="flex flex-col items-start">
            <h4 className="text-[16px] sm:text-[18px] font-semibold">{name}</h4>
            <p className="text-[#ee9972] text-[10px]">{reviews} reviews</p>
          </div>
        </div>

        {/* Comment */}
        <div className="box-border block">
          <p className="text-[#495e57] text-[14px] sm:text-[16px] leading-snug">
            {Comment}
          </p>
        </div>
      </div>
    </>
  );
}

export default ReviewsCard;
