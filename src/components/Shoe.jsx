import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ShoeCard from "./ShoeCard";

export default function Shoe() {
  const { id } = useParams();
  const [shoe, setShoe] = useState();
  function fetchShoe() {
    fetch("https://63fde0ab1626c165a0a214f8.mockapi.io/shoes/" + id)
      .then((res) => res.json())
      .then((data) => setShoe(data));
  }
  useEffect(() => {
    fetchShoe();
  }, []);
  return (
    <div>
      {!shoe ? (
        <h1>Loading ... </h1>
      ) : (
        <div>
          <img src={shoe.img} />
          <h1>{shoe.name}</h1>
          <h3>{shoe.price} $</h3>
          <Button>Delete</Button>
          <Button>Edit</Button>
        </div>
      )}
    </div>
  );
}
