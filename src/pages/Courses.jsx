import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Courses() {
  const [enrolled, setEnrolled] = useState(null);

  const handleEnroll = (courseName) => {
    setEnrolled(courseName);
    setTimeout(() => setEnrolled(null), 3000);
  };

  const courses = [
    {
      title: "CAT 2026 Batch",
      classes: "6+ hours weekly",
      quizzes: "150+",
      tests: "40+",
      mocks: "40+",
      cost: "₹40,000",
    },
    {
      title: "IPMAT Batch",
      classes: "8.5+ hours weekly",
      quizzes: "200+",
      tests: "200+",
      mocks: "40+",
      cost: "₹60,000",
    },
    {
      title: "CLAT 2026 Batch",
      classes: "6+ hours weekly",
      quizzes: "300+",
      tests: "80+",
      mocks: "40+",
      cost: "₹55,000",
    },
    {
      title: "XAT 2026 Batch",
      classes: "5+ hours weekly",
      quizzes: "120+",
      tests: "60+",
      mocks: "30+",
      cost: "₹35,000",
    },
    {
      title: "GD-PI-WAT Bootcamp",
      classes: "4+ hours weekly",
      quizzes: "50+",
      tests: "10+",
      mocks: "10+",
      cost: "₹20,000",
    },
    {
      title: "IIFT 2025 Preparation Course",
      classes: "6+ hours weekly",
      quizzes: "100+",
      tests: "40+",
      mocks: "25+",
      cost: "₹30,000",
    },
    {
      title: "NMAT Full-Length Batch",
      classes: "7+ hours weekly",
      quizzes: "180+",
      tests: "90+",
      mocks: "30+",
      cost: "₹38,000",
    },
    {
      title: "SNAP Express Batch",
      classes: "4+ hours weekly",
      quizzes: "120+",
      tests: "60+",
      mocks: "25+",
      cost: "₹28,000",
    },
    {
      title: "MBA Quant Foundation Course",
      classes: "5+ hours weekly",
      quizzes: "200+",
      tests: "100+",
      mocks: "20+",
      cost: "₹25,000",
    },
    {
      title: "Verbal Ability Masterclass",
      classes: "4+ hours weekly",
      quizzes: "300+",
      tests: "50+",
      mocks: "20+",
      cost: "₹22,000",
    },
    {
      title: "Logical Reasoning Pro Series",
      classes: "5+ hours weekly",
      quizzes: "250+",
      tests: "100+",
      mocks: "20+",
      cost: "₹24,000",
    },
    {
      title: "B-School Readiness Program",
      classes: "6+ hours weekly",
      quizzes: "180+",
      tests: "50+",
      mocks: "15+",
      cost: "₹32,000",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Explore Our MBA Prep Courses 🎓
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-left border border-blue-100 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {course.title}
            </h2>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li><strong>Classes:</strong> {course.classes}</li>
              <li><strong>Quizzes:</strong> {course.quizzes}</li>
              <li><strong>Tests:</strong> {course.tests}</li>
              <li><strong>Mocks:</strong> {course.mocks}</li>
              <li><strong>Cost:</strong> {course.cost}</li>
            </ul>
            <button
              onClick={() => handleEnroll(course.title)}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold transition"
            >
              Enroll Now
            </button>
          </motion.div>
        ))}
      </div>

      {enrolled && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          ✅ You have successfully enrolled in <b>{enrolled}</b>!
        </motion.div>
      )}
    </div>
  );
}
