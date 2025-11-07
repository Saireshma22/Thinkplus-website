import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      title: "IPMAT",
      desc: "ThinkPlus Education offers a unique and personalized course curriculum for IPMAT, aiming to shape well-rounded students with academic rigor and a transformative learning experience.",
      img: "https://online.tathagat.co.in/wp-content/uploads/2023/06/IPMAT-Copy-2-1.png.webp",
    },
    {
      title: "CLAT",
      desc: "ThinkPlus’ CLAT program assists students in preparing for the CLAT exam and pursuing a career in Law immediately after completing their higher secondary education.",
      img: "https://www.verdictum.in/h-upload/2023/09/02/1500x900_1538291-clat.webp",
    },
    {
      title: "IQ+",
      desc: "Looking to give your child an advantage in today's competitive world? ThinkPlus IQ+ is a groundbreaking program crafted to develop critical thinking and learning potential.",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Career Counselling",
      desc: "Feeling uncertain about your career path? ThinkPlus mentors provide personalized career counselling to help you discover the right direction for your goals and abilities.",
      img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "CAT",
      desc: "The ThinkPlus CAT program provides a structured, step-by-step preparation approach, ensuring that students grasp every concept and practice through mock tests and feedback.",
      img: "https://uploads.sarvgyan.com/2024/02/cat-exam-2025.webp",
    },
    {
      title: "IPMAT Advanced",
      desc: "An intensive program designed for IPMAT aspirants who seek to achieve excellence with targeted practice, mentor support, and performance tracking.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          Build Your MBA Dream with ThinkPlus 🎓
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto mb-8"
        >
          Join India’s top mentors for CAT, XAT, IPMAT, and other MBA exams. Get
          personalized guidance, live classes, and a structured learning experience.
        </motion.p>
        <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
          <Link to="/courses">
            <button className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
              Explore Courses
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-blue-700"
          >
            Our Services
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Start your IPMAT, CAT, and CLAT preparation with ThinkPlus Education.
            Our specially curated courses are crafted by IIM graduates and expert faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <Link to="/courses">
                  <button className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your ThinkPlus journey?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join thousands of students learning smarter with ThinkPlus — India’s fastest
          growing EdTech platform for MBA, Law, and aptitude preparation.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <Link to="/about">
            <button className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
              Know More About Us
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

