import React, { useState, useEffect } from "react";

const GeolocationComponent = ({ country, setCountry }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      fetchCountryName(position.coords.latitude, position.coords.longitude);
    };

    const errorCallback = (error) => {
      setError(error.message);
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      setError("Geolocation is not available in this browser.");
    }
  });

  const fetchCountryName = async (lat, long) => {
    const apiKey = "c0199226615d4336a11d37f7e7f0ee3a";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results.length > 0) {
        const countryName = data.results[0].components.country;
        setCountry(countryName);
      } else {
        setError("Unable to fetch country name.");
      }
    } catch (error) {
      setError("Error fetching country name.");
    }
  };

  return <div></div>;
};

export default GeolocationComponent;