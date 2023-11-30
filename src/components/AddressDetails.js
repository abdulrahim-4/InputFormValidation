import React, { useState } from 'react';

const AddressDetails = ({ formData, handleChange, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({
    address: '',
    city: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    // Validate city
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    } else {
      console.log('Please fill out all required fields before proceeding.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Address</h2>

      <label className="block mb-2" htmlFor="address">
        Address:
        <input
          type="text"
          id="address"
          className="border p-2 mb-4 w-full"
          value={formData.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </label>

      <label className="block mb-2" htmlFor="city">
        City:
        <input
          type="text"
          id="city"
          className="border p-2 mb-4 w-full"
          value={formData.city}
          onChange={handleChange}
          required
        />
        {errors.city && <p className="text-red-500">{errors.city}</p>}
      </label>

      <button className="bg-gray-500 text-white px-4 py-2 mr-2" onClick={prevStep}>
        Previous
      </button>
      <button className="bg-violet-500 text-white px-4 py-2" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default AddressDetails;
