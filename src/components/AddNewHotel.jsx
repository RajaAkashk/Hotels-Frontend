import { useState } from "react";

const AddNewHotel = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: "",
    isParkingAvailable: "",
    isWifiAvailable: "",
    isPoolAvailable: "",
    isSpaAvailable: "",
    isRestaurantAvailable: "",
    photos: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormValue((prevValue) => ({
      ...prevValue,
      [name]:
        name === "rating" || name === "phoneNumber" ? parseInt(value) : value,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const FormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://bi-hw-2-hotels-sh65.vercel.app/hotels",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValue),
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        throw "Failed to add hotel data.";
      }

      const data = await response.json();
      console.log("Hotel successfully added:", data);
    } catch (error) {
      console.log("error in fetching:", error);
    }
  };

  return (
    <div>
      <h1>Add Hotel</h1>
      <form onSubmit={FormSubmitHandler}>
        <label htmlFor="name">Name Of Hotel</label>
        <br />
        <input
          type="text"
          value={formValue.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <select
          name="category"
          value={formValue.category}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="location">Location</label>
        <br />
        <input
          type="text"
          value={formValue.location}
          name="location"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          value={formValue.rating}
          name="rating"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="website">Website</label>
        <br />
        <input
          type="text"
          value={formValue.website}
          name="website"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="phoneNumber ">Phone Number</label>
        <br />
        <input
          type="number"
          value={formValue.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="checkInTime">Check In Time </label>
        <br />
        <input
          type="text"
          value={formValue.checkInTime}
          name="checkInTime"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="checkOutTime">Check Out Time</label>
        <br />
        <input
          type="text"
          value={formValue.checkOutTime}
          name="checkOutTime"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="amenities">Amenities</label>
        <br />
        <input
          type="text"
          value={formValue.amenities}
          name="amenities"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="priceRange">Price Range</label>
        <select
          name="priceRange"
          value={formValue.priceRange}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br /> <br />
        <label htmlFor="reservationsNeeded">Reservations Needed</label>
        <input
          type="checkbox"
          value={formValue.reservationsNeeded}
          checked={formValue.reservationsNeeded}
          name="reservationsNeeded"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="isParkingAvailable">Is ParkingAvailable</label>
        <input
          type="checkbox"
          value={formValue.isParkingAvailable}
          checked={formValue.isParkingAvailable}
          name="isParkingAvailable"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="isWifiAvailable">isWifiAvailable</label>
        <input
          type="checkbox"
          value={formValue.isWifiAvailable}
          checked={formValue.isWifiAvailable}
          name="isWifiAvailable"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="isPoolAvailable">isPoolAvailable</label>
        <input
          type="checkbox"
          value={formValue.isPoolAvailable}
          checked={formValue.isPoolAvailable}
          name="isPoolAvailable"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="isSpaAvailable">isSpaAvailable</label>
        <input
          type="checkbox"
          value={formValue.isSpaAvailable}
          checked={formValue.isSpaAvailable}
          name="isSpaAvailable"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="isRestaurantAvailable">isRestaurantAvailable</label>
        <input
          type="checkbox"
          value={formValue.isRestaurantAvailable}
          checked={formValue.isRestaurantAvailable}
          name="isRestaurantAvailable"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="photos">Photos</label>
        <br />
        <input
          type="text"
          value={formValue.photos}
          name="photos"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddNewHotel;
