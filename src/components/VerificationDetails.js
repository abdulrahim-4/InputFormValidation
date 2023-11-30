import React, { useState } from 'react';

const VerificationDetails = ({ formData, handleChange, prevStep }) => {
  const [errors, setErrors] = useState({
    aadharCard: '',
    panCard: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Aadhar Card Number
    const aadharCardRegex = /\d/g;
    if (!aadharCardRegex.test(formData.aadharCard)) {
      newErrors.aadharCard = 'Aadhar Card Number must be a 12-digit number';
      isValid = false;
    }

    // Validate Pan Card Number
    const panCardRegex =  /\d/g;
    if (!panCardRegex.test(formData.panCard)) {
      newErrors.panCard = 'Invalid Pan Card Number format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      console.log('Form submitted successfully');
    } else {
      console.log('VerificationDetails form has errors. Cannot proceed to submit.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Verification</h2>

      <label className="block mb-2" htmlFor="aadharCard">
        Aadhar Card Number:
        <input
          type="text"
          id="aadharCard"
          className="border p-2 mb-4 w-full"
          value={formData.aadharCard}
          onChange={handleChange}
          required
        />
        {errors.aadharCard && <p className="text-red-500">{errors.aadharCard}</p>}
      </label>

      <label className="block mb-2" htmlFor="panCard">
        Pan Card Number:
        <input
          type="text"
          id="panCard"
          className="border p-2 mb-4 w-full"
          value={formData.panCard}
          onChange={handleChange}
          required
        />
        {errors.panCard && <p className="text-red-500">{errors.panCard}</p>}
      </label>

      <button className="bg-gray-500 text-white px-4 py-2 mr-2" onClick={prevStep}>
        Previous
      </button>
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleNext}>
        Submit
      </button>
    </div>
  );
};

export default VerificationDetails;
