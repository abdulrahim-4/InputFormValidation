import React, { useState } from 'react';

const PaymentDetails = ({ formData, handleChange, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate card number
    const cardNumberRegex = /^\d+$/;
    if (!cardNumberRegex.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card Number must contain only numbers';
      isValid = false;
    }

    // Validate expiry date
    const expiryDateRegex = /^\d+$/;
    if (!expiryDateRegex.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry Date must contain only numbers';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    } else {
      console.log('Please fill out all required fields with valid numbers before proceeding.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Payment Details</h2>

      <label className="block mb-2" htmlFor="cardNumber">
        Card Number:
        <input
          type="text"
          id="cardNumber"
          className="border p-2 mb-4 w-full"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}
      </label>

      <label className="block mb-2" htmlFor="expiryDate">
        Expiry Date:
        <input
          type="text"
          id="expiryDate"
          className="border p-2 mb-4 w-full"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
        {errors.expiryDate && <p className="text-red-500">{errors.expiryDate}</p>}
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

export default PaymentDetails;
