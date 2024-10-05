"use client"
import { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    why: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <>
    <div className="min-h-screen dark flex flex-col items-center p-6">
    <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg  lightgreenbg">
      <h1 className="text-3xl font-bold text-center mb-4">Become a Volunteer</h1>
      <p className="text-xl text-gray-700 text-center mb-8">What you will do as a volunteer</p>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
        <li>Help spread information</li>
        <li>Manage communities</li>
        <li>Run tree impact recycling via selling and providing refunds</li>
        <li>Implement solutions to improve the environment</li>
      </ul>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="text-gray-700">State</label>
          <input
            id="state"
            name="state"
            type="text"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="story" className="text-gray-700">Do you have a story to tell?</label>
          <textarea
            id="story"
            name="story"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.why}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full test text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  </>
  )
}

export default page 