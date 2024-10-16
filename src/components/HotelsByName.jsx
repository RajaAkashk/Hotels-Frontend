import useFetch from "../useFetch";

const HotelsByName = ({ nameOfHotel }) => {
  const { data, loading, error } = useFetch(
    `https://bi-hw-2-hotels-sh65.vercel.app/hotels/${nameOfHotel}`
  );

  console.log(data);

  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error fetching data. Please try again later.</p>;
  }

  if (loading) {
    return <p>Hotels data is loading....</p>;
  }

  if (!data || !data.name) {
    return <p>No hotel found with the name "{nameOfHotel}".</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>
        <strong>Location: </strong>
        {data.location}
      </p>
      <p>
        <strong>Rating: </strong>
        {data.rating}
      </p>
      <p>
        <strong>Price: </strong>
        {data.priceRange}
      </p>
    </div>
  );
};

export default HotelsByName;
