# Form Validation in React Without Third-Party Libraries

This project demonstrates how to create a form with validation in React without using any third-party libraries. The form includes fields for user details such as name, email, phone number, and more, along with validation logic implemented using JavaScript.

## Features

- **Custom Validation**: All validation logic is implemented manually using JavaScript.
- **Dynamic Error Handling**: Errors are displayed dynamically as the user interacts with the form.
- **Password Visibility Toggle**: Users can toggle the visibility of the password field.
- **Dropdowns for Country and City**: Includes dropdowns for selecting a country and city.
- **Success Message**: Displays a success message with submitted data upon successful form submission.

## Validation Rules

The following validation rules are applied to the form fields:

- **First Name**: Required.
- **Last Name**: Required.
- **Username**: Required.
- **Email**: Must be a valid email format.
- **Password**: Required.
- **Phone Number**: Must be a 10-digit number.
- **Country Code**: Required.
- **Country**: Required (dropdown selection).
- **City**: Required (dropdown selection).
- **PAN**: Must follow the format `AAAAA9999A`.
- **Aadhar**: Must be a 12-digit number.

## Functions and Operators Used

### State Management
- `useState` is used to manage form data, errors, and submission state.

### Event Handlers
- `handleChange`: Updates form state as the user types.
- `handleSubmit`: Validates the form and sets the submission state.

### Validation Logic
- Regular expressions are used for validating email, phone number, PAN, and Aadhar:
  - Email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Phone: `/^\d{10}$/`
  - PAN: `/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/`
  - Aadhar: `/^\d{12}$/`

### Conditional Rendering
- Displays error messages dynamically based on validation results.
- Shows a success message upon successful form submission.

### Array and Object Methods
- `Object.entries`: Used to iterate over form data for displaying submitted values.
- `Object.keys`: Used to check if there are any validation errors.

## File Structure

```plaintext
vite-project/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── Form.jsx
│   └── styles/
│       └── form.css
├── public/
│   └── index.html
├── [README.md](http://_vscodecontentref_/0)
└── package.json