import React from "react";

export default function Contact() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">Email: support@thinkplus.in</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" />
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-accent">
          Send
        </button>
      </form>
    </div>
  );
}
