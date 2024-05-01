import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import { CartContext } from "../../../Providers/CartProviders";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const CartDetails = () => {
  const [quantityChanged, setQuantityChanged] = useState(0);
  const { cart, handleDeleteCartItem } = useContext(CartContext);

  let [totlaPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    totlaPrice = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price * curr.quantity),
      0
    );
    setTotalPrice(totlaPrice);
  }, [quantityChanged]);

  const handleDeleteItem = (id) => {
    handleDeleteCartItem(id);
    setQuantityChanged(quantityChanged + 1);
  };
  return (
    <section className="container">
      <PageTitle title={["কার্ট ডিটেইলস", "Cart Details", "تفاصيل العربة"]} />

      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 border border-primary border-b-0 mt-10">
            {cart?.map((cartItem) => (
              <CartItem
                setQuantityChanged={setQuantityChanged}
                quantityChanged={quantityChanged}
                key={cartItem?._id}
                cart={cartItem}
                handleDeleteItem={handleDeleteItem}
              ></CartItem>
            ))}
          </div>

          <div className="my-5 md:w-6/12 lg:4/12 ml-auto">
            <div className="my-2 flex justify-end">
              <p className="mr-5">Total Price</p>
              <p>{totlaPrice} TK</p>
            </div>
            <div className="flex justify-end">
              <Link to="/confirmorder">
                <PrimaryBtn text="Checkout" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-20">
            <h3 className="text-xl font-bold">
              আপনার কার্টে কোন প্রোডাক্ট পাওয়া যায়নি
            </h3>
          </div>
        </>
      )}
    </section>
  );
};

export default CartDetails;
