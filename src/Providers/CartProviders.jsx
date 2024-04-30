import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (book) => {
    const existCart = cart.find((cartItem) => cartItem._id === book._id);
    if (existCart) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item._id === book._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...book, quantity: 1 }]);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const handleDeleteCartItem = (bookId) => {
    const remainingcart = cart.filter((cartItem) => cartItem._id !== bookId);
    setCart(remainingcart);
  };

  const cartInfo = { handleAddtoCart, cart, setCart, handleDeleteCartItem };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
