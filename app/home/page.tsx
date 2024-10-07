import React from 'react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Get Your Crowdsourcing Site Featured!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Apply to have your project showcased on our website and reach a larger audience.
        </p>
        <a href="/volunteers" className="inline-block bg-slate-600 text-white py-3 px-6 rounded-lg hover:bg-slate-900 transition-all">
          Apply Now
        </a>
      </main>
    </div>
  );
}