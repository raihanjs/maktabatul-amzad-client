import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import SingleOrder from "./SingleOrder";
import useOrders from "../../../../hooks/useOrders";

export default function OrderList() {
  const [orders, isLoading, refetch] = useOrders();
  const axiosPublic = useAxiosPublic();

  const [selectedOrders, setSelectedOrders] = useState(orders);
  const [status, setStatus] = useState("");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    setSelectedOrders(orders);
  }, [status]);

  useEffect(() => {
    let allOrders = orders;
    if (status === "pending") {
      const pnOrders = allOrders.filter((order) => order.status === "pending");
      allOrders = pnOrders;
    } else if (status === "confirmed") {
      const cnOrders = allOrders.filter(
        (order) => order.status === "confirmed"
      );
      allOrders = cnOrders;
    } else if (status === "delivered") {
      const dvOrders = allOrders.filter(
        (order) => order.status === "delivered"
      );
      allOrders = dvOrders;
    } else if (status === "canceled") {
      const ccOrders = allOrders.filter((order) => order.status === "canceled");
      allOrders = ccOrders;
    }
    setSelectedOrders(allOrders);
  }, [status]);

  const handleDeleteOrder = (id) => {
    axiosPublic.delete(`/orders/${id}`).then((res) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          if (res.data.deletedCount === 1) {
            refetch();
          }
          Swal.fire({
            title: "Deleted!",
            text: "This order has been deleted.",
            icon: "success",
          });
        }
      });
    });
  };
  return (
    <div className="m-2">
      {isLoading ? (
        <>
          <p>Loading Orders ...</p>
        </>
      ) : (
        <>
          <div className="flex space-x-3 items-center">
            <h2 className="my-5">
              Total {selectedOrders.length} orders available
            </h2>
            <select className="border" onChange={handleChangeStatus}>
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          <div className="m-2">
            {selectedOrders.length > 0 ? (
              <>
                {selectedOrders.map((order) => (
                  <SingleOrder
                    key={order._id}
                    order={order}
                    handleDeleteOrder={handleDeleteOrder}
                  ></SingleOrder>
                ))}
              </>
            ) : (
              <>
                <h2>No Data found for status: {status}</h2>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
