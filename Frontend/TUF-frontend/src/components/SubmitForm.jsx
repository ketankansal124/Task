import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        codeLanguage: '',
        stdin: '',
        sourceCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/TUF/v1/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle success
                console.log('Details submitted successfully');
                navigate('/submission');
                
            } else {
                // Handle error
                console.log(response);
            }
        } catch (error) {
            console.error('Error submitting Details:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
            <input
                type="text"
                name="codeLanguage"
                placeholder="Code Language"
                value={formData.codeLanguage}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
            <textarea
                name="stdin"
                placeholder="Standard Input"
                value={formData.stdin}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                rows={4}
            />
            <textarea
                name="sourceCode"
                placeholder="Source Code"
                value={formData.sourceCode}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                rows={6}
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
    );
};

export default SubmitForm;
