import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [sucessMessage, setSuccessMessage] = useState("");

  const { data, loading, error } = useFetch(
    "https://bi-hw-2-hotels-sh65.vercel.app/hotels"
  );

  console.log(data);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(
        `https://bi-hw-2-hotels-sh65.vercel.app/hotels/${hotelId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const data = await response.json();

      if (data) {
        setSuccessMessage("Successfullt deleted book.");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error in deleting book:", error);
    }
  };

  return data ? (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{sucessMessage}</p>
    </div>
  ) : (
    loading && <p>loading....</p>
  );
};

export default Hotels;
