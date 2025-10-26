import React from "react";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleClearCart = () => {
    if (window.confirm("¿Seguro que deseas vaciar el carrito?")) {
      clearCart();
      alert("El carrito se ha vaciado correctamente.");
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.name} - ${item.price}
                <button
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => removeFromCart(index)}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>

          <button
            onClick={handleClearCart}
            style={{
              backgroundColor: "#ff6961",
              border: "none",
              borderRadius: "5px",
              color: "white",
              padding: "8px 12px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
