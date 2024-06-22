import React, { useState } from "react";
import { JpgUpload, PngUpload } from "../../constants/Icons";
import { uploadProductImage, addNewProduct } from "../../services/ApiService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    short_description: "",
    description: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const add_product = async () => {
    let product = productDetails;

    console.log(productDetails);
    const response = await uploadProductImage(image);

    if (response.success) {
      console.log("Image uploaded successfully!");
      product.image = response.image_url;
      const addResponse = await addNewProduct(product);
      if (addResponse.status) {
        toast.success("Product added successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Failed to add product!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full py-8 px-12 my-5 mx-8 rounded-md bg-[#F7F8F7] box-border max-w-[800px]">
      <div className="w-full text-gray-700 text-base">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder=""
          className="box-border w-full py-2 rounded pl-4 pr-4 border border-gray-300 outline-none font-poppins text-base"
        />
      </div>
      <div className="flex gap-5">
        <div className="w-full text-gray-700 text-base">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder=""
            className="box-border w-full py-2 rounded pl-4 pr-4 border border-gray-300 outline-none font-poppins text-base"
          />
        </div>
        <div className="w-full text-gray-700 text-base">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder=""
            className="box-border w-full py-2 rounded pl-4 pr-4 border border-gray-300 outline-none font-poppins text-base"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="w-full text-gray-700 text-base">Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          id=""
          className="box-border w-full py-2 rounded pl-4 pr-4 border bg-white border-gray-300 outline-none font-poppins text-base"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="flex flex-col">
        <p className="w-full text-gray-700 text-base">Short Description</p>
        <textarea
          value={productDetails.short_description}
          onChange={changeHandler}
          name="short_description"
          id=""
          className="box-border w-full py-2 rounded pl-4 pr-4 border border-gray-300 outline-none font-poppins text-base"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <p className="w-full text-gray-700 text-base">Description</p>
        <textarea
          value={productDetails.description}
          onChange={changeHandler}
          name="description"
          id=""
          className="box-border w-full py-2 rounded pl-4 pr-4 border border-gray-300 outline-none font-poppins text-base"
        ></textarea>
      </div>
      <div className="flex justify-center items-center box-border w-full h-1/4 rounded bg-gray-50 outline-dashed outline-2 outline-gray-400">
        <label
          htmlFor="file-input"
          className="h-full w-full flex justify-center items-center"
        >
          <div className="flex gap-5 justify-center items-center w-full h-full">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="object-center max-w-full max-h-full"
              />
            ) : (
              <>
                <JpgUpload /> or <PngUpload />
              </>
            )}
          </div>
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          accept="image/png, image/jpeg, image/jpg"
          hidden
        />
      </div>
      <span className="-mt-3 p-0 font-medium text-gray-400 text-xs">
        Support file types: PNG.JPG. JPEG
      </span>
      <button
        onClick={() => {
          add_product();
        }}
        className="bg-blue-400 uppercase text-lg p-2 font-poppins font-bold text-white rounded-md outline-none cursor-pointer"
      >
        Add
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AddProduct;
