import { useEffect } from "react";
import { useState } from "react";
import ShoeCard from "./ShoeCard";

export default function Shoes() {
  function fetchShoes() {
    fetch("https://63fde0ab1626c165a0a214f8.mockapi.io/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }
  function deleteShoe(id) {
    fetch("https://63fde0ab1626c165a0a214f8.mockapi.io/shoes/" + id, {
      method: "DELETE",
    }).then((res) => fetchShoes());
  }
  const [shoes, setShoes] = useState();
  useEffect(() => {
    fetchShoes();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
      {!shoes ? (
        <h1>Loading ... </h1>
      ) : (
        shoes.map((shoe) => (
          <ShoeCard
            shoe={shoe}
            key={shoe.id}
            onDelete={() => deleteShoe(shoe.id)}
          />
        ))
      )}
    </div>
  );
}
