import { Helmet } from "react-helmet-async";
import { RiSearchLine } from "react-icons/ri";
import useProducts from "../../Hooks/useProducts";
import { FaCartArrowDown } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaArrowUp91 } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

const Shop = () => {
  const [products, isLoading] = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderSkeletons = () => (
    Array.from({ length: 10 }).map((_, index) => (
      <tr key={index} className="hover">
        <th className=""><Skeleton width={20} /></th>
        <td className="text-lg"><Skeleton width={150} /></td>
        <td className="text-base"><Skeleton width={100} /></td>
        <td className="text-base"><Skeleton width={100} /></td>
        <td className="text-base font-semibold"><Skeleton width={50} /></td>
        <td className="flex justify-center items-center gap-5 text-base font-semibold">
          <Skeleton width={30} height={30} circle={true} />
          <Skeleton width={30} height={30} circle={true} />
        </td>
      </tr>
    ))
  );

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  }

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
      <div className="grid grid-cols-4 gap-4 mt-7 max-w-[1400px] mx-auto">
        <div className="col-span-1">
          <h2 className="pl-4 text-2xl mb-4">PRODUCT CATEGORIES</h2>
          <div className="p-4">
            <ul className="space-y-2">
              <li className="text-lg p-3 bg-gray-100 hover:bg-white">Tablet</li>
              <li className="text-lg p-3 bg-gray-100 hover:bg-white">Injection</li>
              <li className="text-lg p-3 bg-gray-100 hover:bg-white">Capsules</li>
              <li className="text-lg p-3 bg-gray-100 hover:bg-white">Syrup</li>
              <li className="text-lg p-3 bg-gray-100 hover:bg-white">Personal Care</li>
              <li className="text-lg p-3 bg-gray-100 hover:bg-white">Health Device</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          {isLoading ? (
            <div className="flex justify-center">
              <div className="w-full overflow-x-auto mt-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-lg">Name</th>
                      <th className="text-lg">Category</th>
                      <th className="text-lg">Company</th>
                      <th className="text-lg">Unit Price</th>
                      <th className="text-lg text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderSkeletons()}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
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
                        <th className="text-lg">Unit Price</th>
                        <th className="text-lg text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={product._id} className="hover">
                          <th className="">{index + 1}</th>
                          <td className="text-lg">{product.medicineName}</td>
                          <td className="text-base">{product.category}</td>
                          <td className="text-base">{product.medicineCompany}</td>
                          <td className="text-base font-semibold">${product.perUnitPrice}</td>
                          <td className="flex justify-center items-center gap-5 text-base font-semibold">
                            <button
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Add Cart"
                              className={`btn hover:text-white rounded-md bg-white text-custom-custom border-2 border-custom-custom hover:bg-custom-custom text-lg`}
                            >
                              <FaCartArrowDown />
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
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      {selectedProduct && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-fit">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className=" grid grid-cols-2">
              <div>
                <img src={selectedProduct.medicineImage} alt={selectedProduct.medicineName} />
              </div>
              <div>
                   <div className=" flex justify-between mr-5">
                   <div className=" flex items-end gap-2 ">
                    <h1 className=" text-4xl">{selectedProduct.medicineName}</h1>
                    <h3 className=" text-xl mt-2">{selectedProduct.genericName}</h3>
                    </div>
                    <div>
                        <h2 className=" font-semibold text-custom-custom">{selectedProduct.category}</h2>
                    </div>
                   </div>
                    <h2 className=" text-xl mt-5"><span className=" text-xl font-semibold ">Company:</span> {selectedProduct.medicineCompany}</h2>
                    <h1 className=" text-lg mt-6"><span className=" font-semibold">Mas Unit:</span> {selectedProduct.massUnit}</h1>
                    <h1>{selectedProduct.perUnitPrice}</h1>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Shop;
