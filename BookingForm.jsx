// 📄 src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://consultation-backend-akc7.onrender.com/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        alert('Booking sent successfully!');
      } else {
        alert('Failed to send booking.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to server.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow rounded">
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="date" name="date" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="time" name="time" onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="message" placeholder="Additional Message (Optional)" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Book Consultation</button>
    </form>
  );
};

export default BookingForm;