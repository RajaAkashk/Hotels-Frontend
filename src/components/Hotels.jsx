import useFetch from "../useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch(
    "https://bi-hw-2-hotels-sh65.vercel.app/hotels"
  );

  console.log(data);

  return data ? (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>{book.name}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>loading....</p>
  );
};

export default Hotels;
