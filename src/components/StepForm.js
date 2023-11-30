import React, { useState } from 'react';
import Result from './Result';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import PaymentDetails from './PaymentDetails';
import VerificationDetails from './VerificationDetails';

function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password:'',
        address: '',
        city: '',
        cardNumber: '',
        expiryDate: '',
        aadharCard: '',
        panCard: '',
    });

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Failed to submit the form. Server responded with status ${response.status}`);
            }

            const responseData = await response.json();

            console.log('Form submitted successfully:', responseData);
            nextStep();
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalDetails formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} />
            case 2:
                return <AddressDetails formData={formData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} />
            case 3:
                return <PaymentDetails formData={formData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} />
            case 4:
                return <VerificationDetails formData={formData} handleChange={handleChange} prevStep={prevStep} />
            case 5:
                return <Result formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
            <form onSubmit={handleSubmit}>
                {renderStep()}
            </form>
        </div>
    );
}

export default App;
