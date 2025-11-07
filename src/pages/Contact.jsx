import React, { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Here you could also send form data to a backend or API
    setSuccess(true); // Show success message
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">Email: support@thinkplus.in</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-accent"
        >
          Send
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600 font-semibold">
          Sent successfully!!
        </p>
      )}
    </div>
  );
}
