import React, { useState } from "react";
import "./InputContainer.css";
import { Button } from "../Button/Button";
import { Textbox } from "../Textbox/Textbox";

export function InputContainer({ onSearch }) {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    radius: "",
  });

  const handleInputChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
  };

  const handleSearchClick = () => {
    onSearch(formData);
  };

  return (
    <div className="input-container">
      <Textbox
        header="Latitude:"
        value={formData.latitude}
        onChange={(value) => handleInputChange("latitude", value)}
      />
      <Textbox
        header="Longitude:"
        value={formData.longitude}
        onChange={(value) => handleInputChange("longitude", value)}
      />
      <Textbox
        header="Radius:"
        value={formData.radius}
        onChange={(value) => handleInputChange("radius", value)}
      />
      <Button text="Search" onClick={handleSearchClick} />
    </div>
  );
}
