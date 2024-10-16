import "./App.css";
import HotelsByName from "./components/HotelsByName";
import Hotels from "./components/Hotels";
import AddNewHotel from "./components/AddNewHotel";

function App() {
  return (
    <div>
      <AddNewHotel />
      <Hotels />
      <HotelsByName nameOfHotel={"Sunset Resort"} />
    </div>
  );
}

export default App;
