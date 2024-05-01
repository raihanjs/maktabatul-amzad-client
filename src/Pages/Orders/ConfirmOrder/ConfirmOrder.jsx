import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../Providers/CartProviders";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import useUser from "../../../hooks/useUser";

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [userDetails] = useUser();
  const { language } = useContext(ThemeContext);
  const { cart, setCart } = useContext(CartContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const totlaPrice = cart.reduce(
    (acc, curr) => acc + parseInt(curr.price * curr.quantity),
    0
  );

  const [selectedDistrict, setSelectedDistrict] = useState(
    userDetails?.address?.district
  );
  const deliveryCharge = selectedDistrict === "dhaka" ? 60 : 120;

  const handleChangeDistrict = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
  };

  const onSubmit = async (data) => {
    const orderInfo = cart.map((cartItem) => ({
      bookId: cartItem._id,
      title: cartItem.title,
      items: cartItem.quantity,
      price: cartItem.price,
    }));

    const orderDetails = {
      name: data.name,
      mail: data.mail,
      fullAddress: {
        district: data.district,
        city: data.city,
        zip: data.zip,
        moreDetails: data.address,
      },
      phone: data.phone,
      orders: orderInfo,
      deliveryCharge: deliveryCharge,
      status: "pending",
    };
    axiosPublic.post("/addcart", orderDetails).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your order has been placed",
          showConfirmButton: false,
          timer: 1500,
        });
        setCart([]);
        navigate("/");
      }
    });
  };

  return (
    <section className="container">
      <PageTitle title={["কার্ট ডিটেইলস", "Cart Details", "تفاصيل العربة"]} />
      {cart.length > 0 ? (
        <>
          <div className="md:flex justify-between my-5">
            {/* Cart Summary */}
            <div className="md:w-4/12">
              <p className="text-xl font-semibold mb-5">Order Summary</p>
              <div className="h-[350px] overflow-y-scroll">
                {cart.map((cartitem) => (
                  <div key={cartitem._id} className="flex items-center mb-5">
                    <Link to={`/book/${cartitem._id}`}>
                      <img src={cartitem.thumb} className="w-20 mr-2" alt="" />
                    </Link>
                    <div>
                      <p className="font-semibold">
                        {cartitem.title[language]}
                      </p>
                      <p>
                        <span className="mr-2">Price:</span>
                        {cartitem.price}
                      </p>
                      <p>
                        <span className="mr-2">Items:</span>
                        {cartitem.quantity}
                      </p>
                      <p>
                        <span className="mr-2">Total Price:</span>
                        {cartitem.quantity * parseInt(cartitem.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-5 border-t border-primary">
                <p>TotalPrice</p>
                <p className="mr-5">{totlaPrice} TK</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Delivery Charge</p>
                <p className="mr-5">{deliveryCharge} TK</p>
              </div>
              <div className="flex justify-between items-center mt-5 border-t border-primary">
                <p>Grand Total</p>
                <p className="mr-5">{totlaPrice + deliveryCharge} TK</p>
              </div>
            </div>
            {/* Billing address */}
            <div className="mt-5 md:mt-0 md:w-7/12">
              <p className="text-xl font-semibold mb-5">Billing Address</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label htmlFor="">Name</label>
                  <input
                    className="py-1 px-3 border w-full"
                    defaultValue={userDetails?.name}
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" className="text-red text-sm">
                      Name is required
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      className="py-1 px-3 border w-full"
                      defaultValue={userDetails?.email}
                      {...register("mail", {
                        required: "Mail is required",
                      })}
                      aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.mail && (
                      <p role="alert" className="text-red text-sm">
                        {errors.mail.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">Phone</label>
                    <input
                      className="py-1 px-3 border w-full"
                      defaultValue={userDetails?.phone}
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <p role="alert" className="text-red text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-5 mb-5">
                  {/* District */}
                  <div>
                    <p>District</p>
                    <select
                      defaultValue={selectedDistrict}
                      {...register("district", { required: true })}
                      className="py-1 px-3 border capitalize w-full"
                      onChange={handleChangeDistrict}
                    >
                      <option value="barisal" className="capitalize">
                        barishal
                      </option>
                      <option value="chittagong" className="capitalize">
                        chittagong
                      </option>
                      <option value="dhaka" className="capitalize">
                        dhaka
                      </option>
                      <option value="maymensingh" className="capitalize">
                        maymensingh
                      </option>
                      <option value="khulna" className="capitalize">
                        khulna
                      </option>
                      <option value="rajshahi" className="capitalize">
                        rajshahi
                      </option>
                      <option value="comilla" className="capitalize">
                        comilla
                      </option>
                      <option value="rangpur" className="capitalize">
                        rangpur
                      </option>
                      <option value="sylhet" className="capitalize">
                        sylhet
                      </option>
                    </select>
                  </div>
                  {/* City */}
                  <div>
                    <label htmlFor="">City</label>
                    <input
                      className="py-1 px-3 border w-full"
                      defaultValue={userDetails?.address?.city}
                      {...register("city", { required: true })}
                      aria-invalid={errors.city ? "true" : "false"}
                    />
                    {errors.city?.type === "required" && (
                      <p role="alert" className="text-red text-sm">
                        City name is required
                      </p>
                    )}
                  </div>
                  {/* Zip */}
                  <div>
                    <label htmlFor="">Zip</label>
                    <input
                      className="py-1 px-3 border w-full"
                      defaultValue={userDetails?.address?.zip}
                      {...register("zip", { required: true })}
                      aria-invalid={errors.zip ? "true" : "false"}
                    />
                    {errors.zip?.type === "required" && (
                      <p role="alert" className="text-red text-sm">
                        ZIP code is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="">Address Details</label>
                  <textarea
                    className="py-1 px-3 border w-full h-32"
                    defaultValue={userDetails?.address?.details}
                    {...register("address", { required: true })}
                    aria-invalid={errors.address ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" className="text-red text-sm">
                      address is required
                    </p>
                  )}
                </div>

                <input
                  type="submit"
                  value="Confirm Order"
                  className="py-2 px-8 bg-primary text-white mt-5 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <h3 className="capitalize text-xl font-bold mt-40">
              You do not have any items in your cart
            </h3>
          </div>
        </>
      )}
    </section>
  );
}
