import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Integrate backend logic here (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#F9F9F9] p-8 rounded-2xl shadow-md">
          <div>
            <label className="block text-blue-900 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 text-[#D4B968] px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
