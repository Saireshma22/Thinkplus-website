
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ===== About Us ===== */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            ThinkPlus Education, an initiative by IIM grads started in 2022, aims to help students prepare for alternate career opportunities.
            We’re focused on building a platform for students to learn, grow, and build strong personalities and profiles for their future.
          </p>
        </div>

        {/* ===== Services ===== */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {["CAT", "IPMAT", "CLAT", "IQ+", "Career Counselling"].map((service, index) => (
              <li key={index}>
                <a
                  href="/courses"
                  className="hover:text-yellow-400 transition duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Contact Info ===== */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Address</h3>
          <p className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            ThinkPlus Education, 45-56-03/5/4, near Axis Bank, Narasimhanagar, Akkayyapalem,<br />
            Vishakapatnam, Andhra Pradesh 530024
          </p>
          <p className="flex items-center gap-3 mb-2">
            <FaPhoneAlt className="text-yellow-400" /> 
            <span>+91 9581400055</span>
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" /> 
            <span>support@thinkpluseducation.com</span>
          </p>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ThinkPlus Education. All Rights Reserved.
      </div>
    </footer>
  );
}

