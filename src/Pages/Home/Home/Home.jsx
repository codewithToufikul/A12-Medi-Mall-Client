import AdviceSlider from "../AdviceSlider/AdviceSlider";
import Blogs from "../Blogs/Blogs";
import CategorySection from "../CategorySection/CategorySection";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import NewsLatter from "../NewaLatter/NewsLatter";

const Home = () => {
    return (
        <div>
            <div className=" bg-base-200">
            <div className=" max-w-[1540px] mx-auto">
            <AdviceSlider/>
            </div>
            </div>
            <CategorySection/>
            <DiscountProducts/>
            <Blogs/>
            <div>
                <NewsLatter/>
            </div>
        </div>
    );
};

export default Home;