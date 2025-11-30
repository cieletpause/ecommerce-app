import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [section, setSection] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    if (window.confirm("¿Seguro que deseas vaciar el carrito?")) {
      setCart([]);
    }
  };

  return (
    <div className="container">
      <h1>Tienda React</h1>

      {/* BOTÓN DE MENÚ */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 15px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Menú
      </button>

      {/* CONTENEDOR DEL MENÚ */}
      {showMenu && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "250px",
            marginBottom: "20px",
            background: "#f0f0f0",
          }}
        >
          <p
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setSection("actividades")}
          >
            ▸ Actividades realizadas
          </p>

          <p
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setSection("sistema")}
          >
            ▸ Sistema implementado
          </p>

          <p
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setSection("codigo")}
          >
            ▸ Código fuente (ZIP)
          </p>

          <p
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setSection("reporte")}
          >
            ▸ Reporte de modificaciones
          </p>

          {/* BOTÓN NUEVO: REGRESAR A LA TIENDA */}
          <button
            onClick={() => setSection("")}
            style={{
              marginTop: "15px",
              padding: "8px 12px",
              background: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Regresar a la Tienda
          </button>
        </div>
      )}

      {/* CONTENIDO SEGÚN LA SECCIÓN */}
      {section === "" && (
        <>
          <ProductList addToCart={addToCart} />
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </>
      )}

      {section === "actividades" && (
        <div>
          <h2>Actividades realizadas</h2>
          <p>Aquí colocarás el texto o capturas de tus actividades del curso.</p>
        </div>
      )}

      {section === "sistema" && (
        <div>
          <h2>Sistema implementado</h2>
          <p>
            Aquí puedes mostrar las capturas o explicación del sistema funcionando.
          </p>
        </div>
      )}

      {section === "codigo" && (
        <div>
          <h2>Código fuente</h2>
          <a
            href="https://github.com/cieletpause/ecommerce-app/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar ZIP
          </a>
        </div>
      )}

      {section === "reporte" && (
        <div>
          <h2>Reporte de modificaciones</h2>
          <p>
            Aquí agregarás el resumen de ajustes de cada Sprint tal como lo
            estás poniendo en tu documento.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
