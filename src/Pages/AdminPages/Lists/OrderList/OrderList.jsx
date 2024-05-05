import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import SingleOrder from "./SingleOrder";
import useOrders from "../../../../hooks/useOrders";

export default function OrderList() {
  const [orders, isLoading, refetch] = useOrders();
  const axiosPublic = useAxiosPublic();

  const [allOrders, setAllOrders] = useState(orders);
  const [selectedOrders, setSelectedOrders] = useState(allOrders);

  const handleChangeStatus = (event) => {
    const orderType = event.target.value;
    if (orderType === "all") {
      setAllOrders(orders);
    } else if (orderType) {
      setAllOrders(orders.filter((order) => order.status === orderType));
    }
  };

  useEffect(() => {
    setAllOrders(orders);
  }, [orders]);

  useEffect(() => {
    setSelectedOrders(allOrders);
  }, [allOrders]);

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
              Total {selectedOrders.length} Orders available
            </h2>
            <select className="border" onChange={handleChangeStatus}>
              <option value="all">All</option>
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
                <h2>No Data found</h2>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
