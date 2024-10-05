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
    <div className="min-h-screen lightgreenbg flex flex-col items-center p-6">
    <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg dark text-white">
      <h1 className="text-6xl font-bold text-center mb-4">Become a <span className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-transparent bg-clip-text'>Volunteer</span></h1>
      <p className="text-xl mt-12 mb-4">What you will do as a volunteer: </p>
      <ul className=" list-inside text-lg mb-8 space-y-2">
        <li>➯ Raise awareness and educate communities.</li>
        <li>➯ Build and lead community initiatives.</li>
        <li>➯ Oversee tree impact programs throught sales and seed return refunds.</li>
        <li>➯ Develop and implement solutions to improve the environment.</li>
      </ul>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" >Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state">State</label>
          <input
            id="state"
            name="state"
            type="text"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="story">Do you have a story to tell?</label>
          <textarea
            id="story"
            name="story"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
            value={formData.why}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-200 text-black p-2 rounded-md hover:bg-green-300 transition duration-300"
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