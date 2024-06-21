import { Helmet } from "react-helmet-async";
import { RiSearchLine } from "react-icons/ri";
import useProducts from "../../Hooks/useProducts";
import { FaCartArrowDown } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaArrowUp91 } from "react-icons/fa6";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext, useState } from "react";
import CommonButton from "../../Component/CommonButton";
import usePublicAxios from "../../Hooks/usePublicAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const Shop = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [products] = useProducts();
  const [carts, refetch] = useCart();
  console.log(carts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const axiosPublic = usePublicAxios();


  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };

  const handleAddCart = async (medicine) => {
    if(!user){
      return toast.error('login fast !')
    }
    setLoading(true);
    const product = {
      medicineName: medicine.medicineName,
      genericName: medicine.genericName,
      shortDescription: medicine.shortDescription,
      medicineImage: medicine.medicineImage,
      category: medicine.category,
      medicineCompany: medicine.medicineCompany,
      massUnit: medicine.massUnit,
      perUnitPrice: medicine.perUnitPrice,
      discountPercentage: medicine.discountPercentage,
      userEmail: user.email,
      sellerEmail: medicine.sellerEmail,
      quantity: 1,
    };
    try {
      const res = await axiosPublic.post("/cart", product);
      setLoading(false);
      console.log(res.data);
      toast.success('Successfully added!');
      refetch();
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>MediMall || Shop</title>
      </Helmet>
      <div className="bg-gray-50">
        <div className="flex py-6 pt-12 pl-9 gap-4 items-end max-w-[1540px] mx-auto">
          <h1 className="text-6xl">All Medicine</h1>
          <p className="text-lg text-custom-custom">Shop now...</p>
        </div>
      </div>
      <div className="max-w-[1540px] mt-16 flex justify-center mx-auto">
        <div className="">
          <label className="input w-[400px] input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search Medicine" />
            <span className="text-3xl text-custom-custom">
              <RiSearchLine />
            </span>
          </label>
        </div>
      </div>
      <div className="  mt-7 max-w-[1400px] mx-auto">
        <div className="">
    
            <>
              <div className="flex justify-end mt-[-40px]">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="text-base btn bg-transparent"
                  >
                    Sort by <FaArrowUp91 />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="overflow-x-auto mt-3">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="text-lg">Name</th>
                        <th className="text-lg">Category</th>
                        <th className="text-lg">Company</th>
                        <th className="text-lg">Per Unit Price</th>
                        <th className="text-lg text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={product._id} className="hover">
                          <th className="">{index + 1}</th>
                          <td className="text-lg">{product.medicineName}</td>
                          <td className="text-base">{product.category}</td>
                          <td className="text-base">
                            {product.medicineCompany}
                          </td>
                          <td className="text-base font-semibold">
                            ${product.perUnitPrice}
                          </td>
                          <td className="flex justify-center items-center gap-5 text-base font-semibold">
                            <button
                              onClick={() => handleAddCart(product)}
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Add Cart"
                              className={`btn hover:text-white rounded-md bg-white text-custom-custom border-2 border-custom-custom hover:bg-custom-custom text-lg`}
                            >
                              {loading ? (
                                <span className="loading w-5 loading-spinner text-white"></span>
                              ) : (
                                <FaCartArrowDown />
                              )}
                            </button>
                            <button
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="View Medicine"
                              className="btn hover:text-white rounded-md bg-white border-2 hover:bg-custom-custom text-xl"
                              onClick={() => handleViewProduct(product)}
                            >
                              <FiEye />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      {selectedProduct && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-fit">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className=" grid items-center grid-cols-2 p-10">
              <div className=" w-[400px]">
                <img
                  className=""
                  src={selectedProduct.medicineImage}
                  alt={selectedProduct.medicineName}
                />
              </div>
              <div className=" w-full">
                <div className=" flex justify-between mr-5">
                  <div className="">
                    <h1 className=" text-4xl">
                      {selectedProduct.medicineName}
                    </h1>
                    <h3 className=" text-xl mt-2">
                      {selectedProduct.genericName}
                    </h3>
                  </div>
                  <div>
                    <h2 className=" font-semibold text-custom-custom">
                      {selectedProduct.category}
                    </h2>
                  </div>
                </div>
                <h2 className=" text-xl mt-5">
                  <span className=" text-xl font-semibold ">Company:</span>{" "}
                  {selectedProduct.medicineCompany}
                </h2>
                <h1 className=" text-lg mt-6">
                  <span className=" font-semibold">Mas Unit:</span>{" "}
                  {selectedProduct.massUnit}
                </h1>
                <h1 className=" text-lg">
                  <span className=" font-semibold">Per Unit Price:</span> $
                  {selectedProduct.perUnitPrice}
                </h1>
                <h1 className=" text-lg">
                  <span className=" font-semibold">Discount:</span>{" "}
                  {selectedProduct.discountPercentage}%
                </h1>
                <div className=" mb-5 w-[600px]">
                  <h1 className=" text-lg">
                    <span className=" font-semibold">Medicine Details:</span>{" "}
                    {selectedProduct.shortDescription.slice(0, 150)}
                  </h1>
                </div>
                <div className=" flex justify-end">
                  <CommonButton textSize={"text-lg"}></CommonButton>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Shop;
