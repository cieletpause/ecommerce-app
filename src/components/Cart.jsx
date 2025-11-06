import React from "react";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleClearCart = () => {
    if (cart.length === 0) {
      alert("Tu carrito ya está vacío.");
      return;
    }

    const confirmClear = window.confirm("¿Estás seguro de vaciar el carrito?");
    if (confirmClear) {
      clearCart();
      alert("Tu carrito ha sido vaciado con éxito. ¡Gracias por tu compra!");
    }
  };

  return (
    <div
      style={{
        marginTop: "40px",
        backgroundColor: "#f9fafb",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ color: "#333", borderBottom: "2px solid #ccc", paddingBottom: "8px" }}>
        🛒 Carrito de compras
      </h2>

      {cart.length === 0 ? (
        <p style={{ color: "#777", marginTop: "15px" }}>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  padding: "10px 15px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "500" }}>
                  {item.name} - ${item.price}
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    backgroundColor: "#ef4444",
                    border: "none",
                    color: "white",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: "15px", color: "#111" }}>Total: ${total}</h3>

          <button
            onClick={handleClearCart}
            style={{
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "6px",
              color: "white",
              padding: "10px 15px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "15px",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
