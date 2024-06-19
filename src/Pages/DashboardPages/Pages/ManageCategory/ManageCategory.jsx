import { useState } from "react";
import Swal from "sweetalert2";
import UseCategory from "../../../../Hooks/UseCategory";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageCategory = () => {
  const [categories, refetch] = UseCategory();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = async (categoryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/category/${categoryId}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Category has been deleted.", "success");
        }
      }
    });
  };

  const handleEdit = (category) => {
    setSelectedProduct(category);
    setIsModalOpen(true);
  };

  const handleAddNew = (e) => {
    e.preventDefault();
    const form = e.target;
    const categoryName = form.categoryName.value;
    const image = form.image.value;
    const category = {
      categoryName,
      image,
    };

    axiosSecure
      .post("/category", category)
      .then((response) => {
        if (response.data.insertedId) {
          refetch();
          toast.success("Category added");
          setIsModalOpen(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleUpdateCategory = (event) => {
    event.preventDefault();
    const form = event.target.closest('form'); 
    const categoryName = form.name.value;
    const image = form.img.value;
    const category = {
      categoryName,
      image,
    };
    axiosSecure
      .put(`/category/${selectedProduct._id}`, category)
      .then((response) => {
        if (response.data.modifiedCount  > 0) {
          refetch();
          toast.success("Category updated");
          closeModal();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-14">
        <h1 className="text-5xl">Manage All Categories</h1>
      </div>
      <div className="mx-auto p-8 max-w-[1200px] mt-10 bg-white">
        <button
          className="btn bg-blue-300 mb-5 text-base text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Add Category
        </button>

        {isModalOpen && (
          <dialog id="my_modal_3" className="modal" open>
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </form>
              <form onSubmit={handleAddNew} className="card-body">
                <h1 className="text-2xl text-center">Add a new Category</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="categoryName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Image URL"
                    name="image"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-base text-white bg-custom-custom">
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-custom-custom text-white">
                <th className="text-xl">Category Name</th>
                <th className="text-xl">Image</th>
                <th className="text-center text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>
                    <h1 className="text-lg uppercase">
                      {category.categoryName}
                    </h1>
                  </td>
                  <td>
                    <img
                      src={category.image}
                      alt={category.categoryName}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="flex justify-center space-x-4">
                    <button
                      onClick={() => handleEdit(category)}
                      className="btn px-4 py-2 bg-green-300 text-white hover:bg-green-400"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="btn px-4 py-2 bg-red-300 text-white hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedProduct && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <form onSubmit={handleAddNew} className="card-body">
              <h1 className="text-2xl text-center">Edit Category</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={selectedProduct.categoryName}
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="url"
                  defaultValue={selectedProduct.image}
                  name="img"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                onClick={handleUpdateCategory} 
                 className="btn text-base text-white bg-custom-custom">
                  Update Category
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-red-300" onClick={closeModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageCategory;
