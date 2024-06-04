import SectionHead from "../../../Component/SectionHead";
import UseCategory from "../../../Hooks/UseCategory";

const CategorySection = () => {
    const [categories] = UseCategory()
    console.log(categories);
    return (
        <div className=" flex flex-row-reverse items-start justify-between  max-w-[1440px] mt-[90px] mx-auto">
            <div className=" mt-5">
                <div>
                    <SectionHead top={'WHAT ARE YOU LOOKING FOR?'} text={'SHOP BY CATEGORIES'} />
                </div>
                <div className=" grid grid-cols-3 gap-5 mt-12">
                    {
                        categories.map(category => <div className=" hover:shadow-lg w-[240px] py-12 bg-blue-50 space-y-2  flex flex-col justify-center items-center" key={category} >
                            <img className=" mb-5 w-16" src={category.image} alt="" />
                            <h1 className=" text-2xl font-semibold">{category.categoryName}</h1>
                            <p className=" text-lg font-semibold"><span className=" text-custom-custom">{category.itemsCount}</span> Products !</p>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/v4YPmxQ/banner-category-1-1.png" alt="" />
            </div>
        </div>
    );
};

export default CategorySection;