import CommonButton from "../../../Component/CommonButton";

// eslint-disable-next-line react/prop-types
const DiscountPerCard = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const {medicineName, genericName, medicineImage, massUnit, discountPercentage, perUnitPrice} = product;
    const unit = massUnit;
    const fixUnit = unit.split(' ')
    const unitNum = parseInt(fixUnit[0])
    const totalProductPrice = unitNum * perUnitPrice;
    const discountedPrice = totalProductPrice / 100 * discountPercentage;
    const afterDiscountPrice = totalProductPrice - discountedPrice;
    console.log(afterDiscountPrice);
    return (
        <div className=" bg-orange-50 pt-12 pb-9 rounded-lg ">
            <div className="flex flex-col justify-center items-center">
                <h3 className=" text-xl font-medium">{medicineName}</h3>
                <h1 className={`text-2xl font-semibold`}>{genericName}</h1>
                <div className=" relative mt-7">
                <div className=" flex justify-center items-center  bg-orange-100 w-72 h-72 rounded-full ">
                    <img className=" w-62" src={medicineImage} alt="" />
                </div>
                <div className=" absolute -top-3 -left-3 bg-custom-custom w-24  p-5 flex justify-center items-center rounded-full">
                <p className=" text-2xl font-bold text-white">{discountPercentage}% <br /> <span className=" text-xl font-normal">OFF</span></p>
                </div>
                </div>
                <div className=" flex justify-between items-center w-full px-14 mt-6">
                <div className=" flex  gap-3">
                    <p className="  text-lg font-semibold line-through">${totalProductPrice}</p>
                    <p className=" text-3xl font-medium text-custom-custom">${afterDiscountPrice}</p>
                </div>
                <CommonButton textSize={'text-base'} />
                </div>
            </div>
        </div>
    );
};

export default DiscountPerCard;