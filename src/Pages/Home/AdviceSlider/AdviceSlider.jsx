import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";

// import required modules
import { Navigation } from "swiper/modules";
import UseAdvice from "../../../Hooks/UseAdvice";
import CommonButton from "../../../Component/CommonButton";

const AdviceSlider = () => {
  const [advices] = UseAdvice();
  const showAdd = advices.filter(advice=> advice.status === 'accept')
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {showAdd.map((advice) => (
          <SwiperSlide key={advice}>
            <div className="hero my-20">
              <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                <img
                  src={advice.medicine_image}
                  className=""
                />
                <div className=" w-1/2 space-y-4 ">
                  <h1 className="text-7xl font-bold">{advice.title}</h1>
                  <p className=" text-lg font-medium">
                    {advice.details}
                  </p>
                  <p className="s text-3xl font-semibold text-custom-custom ">
                    ${advice.price}
                  </p>
                  <div className=" flex item-center gap-6 pt-4">
                    <button className="btn rounded-md bg-custom-custom text-lg text-white">
                      Buy Now{" "}
                      <span>
                        <FaArrowRight />
                      </span>{" "}
                    </button>
                    <CommonButton textSize={'text-lg'} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AdviceSlider;
