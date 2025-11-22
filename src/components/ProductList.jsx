import React, { useState } from "react";

const products = [
  { id: 1, name: "Playera React", price: 250 },
  { id: 2, name: "Sudadera JS", price: 600 },
  { id: 3, name: "Gorra CSS", price: 180 },
  { id: 4, name: "Taza HTML", price: 150 },
  { id: 5, name: "Sticker Frontend", price: 60 },
];

const ProductList = ({ addToCart }) => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Productos disponibles</h2>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "6px",
          width: "60%",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {product.name} - ${product.price}
              </span>

              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#0077cc",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
