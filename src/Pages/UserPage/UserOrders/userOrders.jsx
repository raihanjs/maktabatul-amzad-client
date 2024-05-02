import React, { useContext } from "react";
import useOrders from "../../../hooks/useOrders";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function userOrders() {
  const { language } = useContext(ThemeContext);
  const [orders, isLoading] = useOrders();

  return (
    <div>
      <div className="text-center p-5 border-b-2">
        <h3 className="text-2xl font-bold">My Orders</h3>
        <p>See All Your Orders</p>
      </div>

      {isLoading ? (
        <>Loading Orders ...</>
      ) : (
        <>
          {orders.length > 0 ? (
            <div className="m-5">
              {orders.map((order) => (
                <div className="border border-2 mb-5 p-3" key={order._id}>
                  <h2 className="text-lg font-bold">Order Id: {order._id}</h2>
                  <p>Order Status: {order.status}</p>
                  <p>Order Date: {order.timestamp.slice(0, 10)}</p>
                  <p>
                    Deliver To: District - {order.fullAddress.district}, City -{" "}
                    {order.fullAddress.city}, Zip - {order.fullAddress.zip},
                    Details - {order.fullAddress.moreDetails}
                  </p>
                  <br />
                  <table className="w-full text-center">
                    <thead>
                      <tr>
                        <th className="border border-black">Item No</th>
                        <th className="border border-black">Name</th>
                        <th className="border border-black">Price</th>
                        <th className="border border-black">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orders.map((singleOrderItem, index) => (
                        <tr key={singleOrderItem.bookId}>
                          <td className="border border-black">{index + 1}</td>
                          <td className="border border-black">
                            {singleOrderItem.title[language]}
                          </td>
                          <td className="border border-black">
                            {singleOrderItem.price}
                          </td>
                          <td className="border border-black">
                            {singleOrderItem.items}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                  <div className="flex justify-end">
                    <div>
                      <p>
                        Total Price:
                        {order.orders.reduce(
                          (acc, book) => acc + book.price * book.items,
                          0
                        )}
                      </p>
                      <p className="border-b-2 border-black">
                        Delivery Charge: {order.deliveryCharge}
                      </p>
                      <p>
                        Grand Total:{" "}
                        {order.orders.reduce(
                          (acc, book) => acc + book.price * book.items,
                          order.deliveryCharge
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-36">
              <h3 className="text-2xl font-bold text-center">
                You Did not order any item yet
              </h3>
            </div>
          )}
        </>
      )}

      {/* Orders container */}
    </div>
  );
}
