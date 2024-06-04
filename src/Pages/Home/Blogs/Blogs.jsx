import SectionHead from "../../../Component/SectionHead";

const Blogs = () => {
  return (
    <div className=" mt-[80px] max-w-[1440px] mx-auto">
      <SectionHead
        top={`let's see`}
        text={"read our latest blogs"}
      ></SectionHead>
      <div>
        <div className="card card-compact w-96">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
