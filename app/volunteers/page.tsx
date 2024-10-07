"use client"
import { useState } from 'react'
import handler from './lib/actions/check';

const page = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactInfo: "",
    registrationDetails: "",
    description: "",
    website: "",
    socialMedia: "",
    missionGoals: "",
    termsConditions: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    
    await handler(formData);
  };

  return (
    <>
    <div className="min-h-screen lightgreenbg flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg dark text-white">
        <h1 className="text-6xl font-bold text-center mb-4">Be a part of <span className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-transparent bg-clip-text'>FundHive</span></h1>
        <p className="text-xl mt-12 mb-4">Fill out the form:</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contactInfo">Contact Information (Mail)</label>
            <input
              id="contactInfo"
              name="contactInfo"
              type="email"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.contactInfo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="registrationDetails">Registration Details</label>
            <input
              id="registrationDetails"
              name="registrationDetails"
              type="text"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.registrationDetails}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Detailed Description</label>
            <textarea
              id="description"
              name="description"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="website">Company Website</label>
            <input
              id="website"
              name="website"
              type="url"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="socialMedia">Social Media Account</label>
            <input
              id="socialMedia"
              name="socialMedia"
              type="text"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.socialMedia}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="missionGoals">Mission and Goals</label>
            <textarea
              id="missionGoals"
              name="missionGoals"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.missionGoals}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="termsConditions">Terms and Conditions</label>
            <textarea
              id="termsConditions"
              name="termsConditions"
              className="text-black mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lightgreenbg"
              value={formData.termsConditions}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full lightgreenbg text-black p-2 rounded-md hover:bg-green-200 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default page;
