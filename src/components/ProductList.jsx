import React from "react";

const products = [
  { id: 1, name: "Playera React", price: 250 },
  { id: 2, name: "Sudadera JS", price: 600 },
  { id: 3, name: "Gorra CSS", price: 180 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => addToCart(product)}
            >
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
