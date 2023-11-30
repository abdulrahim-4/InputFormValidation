import React, { useState } from 'react';

const PersonalDetails = ({ formData, handleChange, nextStep }) => {
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    } else if (/\d/.test(formData.fullName)) {
      newErrors.fullName = 'Full Name cannot contain numbers';
      isValid = false;
    }

    // Validate email
    const emailRegex =  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Details</h2>

      <label className="block mb-2" htmlFor="fullName">
        Full Name:
        <input
          type="text"
          id="fullName"
          className="border p-2 mb-4 w-full"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </label>

      <label className="block mb-2" htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          className="border p-2 mb-4 w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </label>

      <label className="block mb-2" htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          className="border p-2 mb-4 w-full"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </label>

      <button className=" bg-violet-500 text-white px-4 py-2" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
