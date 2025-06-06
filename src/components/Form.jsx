import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        firstName: '',
        
        lastName: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        countryCode: '',
        country: '',
        city: '',
        pan: '',
        aadhar: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        }
    };

    const handleChange = (e) => {
        const updatedForm = { ...form, [e.target.name]: e.target.value };
        setForm(updatedForm);
        setErrors(validate(updatedForm));
    }

    const validate = (formToValidate = form) => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const aadharRegex = /^\d{12}$/;


        if (!formToValidate.firstName) newErrors.firstName = "First Name is Required";
        if (!formToValidate.lastName) newErrors.lastName = "Last Name is Required";
        if (!formToValidate.username) newErrors.username = "Username is Required";
        if (!emailRegex.test(formToValidate.email)) newErrors.email = "Invalid email";
        if (!formToValidate.password) newErrors.password = 'Password is required';
        if (!phoneRegex.test(formToValidate.phone)) newErrors.phone = 'Invalid phone number';
        if (!formToValidate.countryCode) newErrors.countryCode = 'Country code required';
        if (!formToValidate.country) newErrors.country = 'Country is required';
        if (!formToValidate.city) newErrors.city = 'City is required';
        if (!panRegex.test(formToValidate.pan)) newErrors.pan = 'Invalid PAN number';
        if (!aadharRegex.test(formToValidate.aadhar)) newErrors.aadhar = 'Invalid Aadhar number';


        return newErrors;

    };



    return (
        <>
            <nav className='fixed top-0 left-0 w-full bg-gray-600 text-white px-6 py-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>My React Form</h1>
                    <span className='text-sm'>Validation Project</span>
                </div>
            </nav>

            {submitted ? (
                <div className='min-h-screen flex items-center justify-center bg-gray-100 mt-20'>
                    <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
                       
                        <div className='bg-white p-6 rounded-lg  w-full max-w-md'>
                            <div className="flex items-center justify-center mb-4 text-green-600">

                                <h2 className="text-xl font-semibold">Form Submitted Successfully</h2>
                            </div>

                            <div className="space-y-2">
                                {Object.entries(form).map(([key, value]) => (
                                    <div key={key} className="flex justify-between  text">
                                        <span className="font-thin text-blue-600 capitalize">
                                            { key.replace (/([A-Z])/g, ' $1')}
                                        </span>
                                        <span className= "text-yellow-800 break-all">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div className='min-h-screen flex items-center justify-center bg-gray-100 mt-20'>
                    <form
                        onSubmit={handleSubmit}
                        className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
                        {["firstName", "lastName", "username", "email", "password", "phone", "countryCode", "country", "city", 'pan', "aadhar"].map(field => (
                            <div key={field} className='mb-4'>
                                <label>
                                    {field.charAt(0).toUpperCase() + field.slice(1)} :
                                </label>
                                {field === 'password' ? (
                                    <input
                                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black'
                                        type={showPassword ? 'text' : 'password'}
                                        name={field}
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                ) : field === 'country' ? (
                                    <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black" name='country' value={form.country} onChange={handleChange}>
                                        <option value="">Select Country</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Germany">Germany</option>
                                    </select>
                                ) : field === 'city' ? (
                                    <select
                                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black'
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select City</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="New York">New York</option>
                                        <option value="Berlin">Berlin</option>
                                        <option value="England">England</option>
                                        <option value="London">London</option>
                                    </select>
                                ) : (
                                    <input
                                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black'
                                        name={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                    />
                                )}
                                {errors[field] && <p className='text-red-500 text-sm mt-1'>{errors[field]}</p>}
                            </div>
                        ))}

                        <div className='mb-4'>
                            <label className='inline-flex items-center'>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                /> Show Password
                            </label>

                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};


export default Form;