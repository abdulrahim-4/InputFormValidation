import React from 'react';

const Result = ({ formData }) => {
    if (!formData) {
        return null; 
    }

    return (
        <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">The form is successfully submitted!!</h2>
            <h2 className="text-2xl font-bold mb-4">Form Submission Result:</h2>
            <p><strong>Full Name:</strong> {formData.fullName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Password:</strong> {formData.password}</p>
            <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
            <p><strong>Card Number:</strong> {formData.cardNumber}</p>
            <p><strong>Expiry Date:</strong> {formData.expiryDate}</p>
            <p><strong>Aadhar Card Number:</strong> {formData.aadharCard}</p>
            <p><strong>Pan Card Number:</strong> {formData.panCard}</p>



        </div>
    );
}

export default Result;
