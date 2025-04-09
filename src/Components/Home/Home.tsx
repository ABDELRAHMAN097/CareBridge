import React, { useState } from "react";
import HomeImage from "../../assets/home.png";
import availabilityImage from "../../assets/available.png";
import mapImage from "../../assets/map.jpeg";
import zipCodesData from "./zip_codes.json";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isMapPopupOpen, setIsMapPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

const handleCheckAvailability = () => {
  const normalizedInput = inputValue.trim();

  if (!normalizedInput) {
    setErrorMessage("Please enter a zip code or city name.");
    return;
  }

  setErrorMessage(""); // Clear any previous error message
  const isZipCodeAvailable = zipCodesData.some(
    ({ city, zipCode }) =>
      city.toLowerCase() === normalizedInput.toLowerCase() ||
      zipCode === normalizedInput
  );
  setIsAvailable(isZipCodeAvailable);
};



  const closePopup = () => {
    setIsAvailable(null);
  };

  const openMapPopup = () => {
    setIsMapPopupOpen(true);
  };

  const closeMapPopup = () => {
    setIsMapPopupOpen(false);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-hidden relative">
      <img
        src={HomeImage}
        alt="Home"
        className="h-full w-full object-cover"
      />
      <div className="absolute text-black px-4 md:items-start md:left-20">
        <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-[50px] font-bold mb-4 leading-tight text-center drop-shadow-[0_0_10px_white]">
  Rehab Services, <br /> delivered to you
</h1>
          <p className="text-lg md:text-xl mb-6 text-center py-2 font-bold">
            Call +1 (708) 678-9145
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-lg font-bold bg-transparent sm:bg-white rounded-full gap-2 sm:gap-0 justify-center items-center">
            <input
              type="text"
              placeholder="Enter your zip code or city"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className=" required flex-1 p-3 sm:p-4 border-none outline-none text-gray-800 placeholder-gray-500 rounded-full text-center sm:text-left"
            />
            <button
              onClick={handleCheckAvailability}
              className="shadow-lg px-6 py-3 sm:py-4 bg-blue-900 text-white hover:bg-blue-700 transition-transform rounded-full sm:rounded-l-none"
            >
              CHECK AVAILABILITY
            </button>
          </div>
          {errorMessage && (
  <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
)}
        </div>
      </div>
      {isAvailable !== null && (
        <div className="absolute  inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative lg:max-w-sm md:max-w-sm max-w-[300px]">
            <button
              onClick={closePopup}
              className="absolute text-3xl top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            {isAvailable ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Service Availability</h2>
                <p className="text-blue-700 text-xl font-bold">PT: yes</p>
                <p className="text-blue-700 text-xl font-bold">OT: yes</p>
                <p className="text-blue-700 text-xl font-bold">SLP: yes</p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-2">Sorry</h2>
                <p className="mb-2">Contact the office for the availability</p>
                <div className="mt-4 space-y-2">
          <p className="flex items-center text-sm sm:text-base">
            <a href="tel:+17086789145" className="text-blue-600 font-bold hover:underline">
              +1 (708) 678-9145
            </a>
          </p>
          <p className="flex items-center text-sm sm:text-base">
            <a
              href="mailto:admin@carebridgerehab.com"
              className="text-blue-600 font-bold hover:underline"
            >
              admin@carebridgerehab.com
            </a>
          </p>
        </div>
                <p className="mt-2 text-gray-700 text-sm">
                  Please make sure you have entered the correct zip code or
                  verified the spelling for accuracy.
                </p>
              </div>
            )}
            <img
              src={availabilityImage}
              alt="Availability"
              className="cursor-pointer "
              onClick={openMapPopup}
            />
          </div>
        </div>
      )}
      {isMapPopupOpen && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="max-w-[300px] bg-white p-4 rounded-lg shadow-lg relative md:max-w-md w-full">
            <button
              onClick={closeMapPopup}
              className="absolute text-3xl -top-1 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={mapImage}
              alt="Map"
              className="w-full h-auto rounded-lg max-h-[470px] "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
