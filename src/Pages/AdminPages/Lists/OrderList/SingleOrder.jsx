import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import { ThemeContext } from "../../../../Providers/ThemeProvider";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function SingleOrder({ order, handleDeleteOrder }) {
  const { language } = useContext(ThemeContext);
  const axiosPubic = useAxiosPublic();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const editedStatus = data.status;
    const orderStatus = {
      editedStatus,
    };
    axiosPubic.patch(`/orders/${order._id}`, orderStatus).then((res) => {
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="border border-black p-2 mb-2 flex space-x-5 items-start">
      <div>
        <p>Order Id : {order._id}</p>
        <p>Order Date : {order.timestamp}</p>
        <p className="border-t">Name: {order.name}</p>
        <p>Name: {order.mail}</p>
        <p className="border-b">Phone: {order.phone}</p>
        <p>District: {order?.fullAddress?.district}</p>
        <p>City: {order?.fullAddress?.city}</p>
        <p>Zip: {order?.fullAddress?.zip}</p>
        <p>Address: {order?.fullAddress?.moreDetails}</p>
        <table>
          <thead>
            <tr>
              <th className="border">Product</th>
              <th className="border">Qunatity</th>
              <th className="border">Unit Price</th>
              <th className="border">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {order.orders.map((slOrderItem) => (
              <tr key={slOrderItem.bookId}>
                <td className="border text-center">
                  {slOrderItem.title[language]}
                </td>
                <td className="border text-center">{slOrderItem.items}</td>
                <td className="border text-center">{slOrderItem.price}</td>
                <td className="border text-center">
                  {slOrderItem.items * slOrderItem.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Delivery Charge: BDT
          <span className="font-bold ml-5">{order.deliveryCharge} TK</span>
        </p>
        <p>
          Grand Total: BDT
          <span className="ml-5 font-bold">
            {order.orders.reduce(
              (start, current) =>
                start + parseInt(current.price * current.items),
              0
            ) + order.deliveryCharge}{" "}
            TK
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Order Status</p>
        <div className="flex flex-col border">
          <select defaultValue={order.status} {...register("status")}>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="canceled">Canceled</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
        <button className="py-1 px-10 bg-slate-400">Save</button>
      </form>

      <button
        className="py-1 px-10 bg-slate-400"
        onClick={() => handleDeleteOrder(order._id)}
      >
        Delete Order
      </button>
    </div>
  );
}
