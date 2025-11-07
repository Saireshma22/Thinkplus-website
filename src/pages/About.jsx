import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, Award, Target, Lightbulb, BookOpen, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 min-h-screen">
      {/* ======== Intro Section ======== */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-blue-700 mb-6"
        >
          About ThinkPlus 🌟
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          ThinkPlus is India’s fastest-growing EdTech platform dedicated to helping
          ambitious students achieve their <b>MBA dreams</b>. Our mission is simple —
          to make high-quality mentorship, structured courses, and personalized
          preparation accessible to every learner. With top mentors, adaptive learning
          paths, and industry-inspired assessments, we’ve guided thousands of learners
          towards success in exams like <b>CAT, XAT, NMAT, IIFT, and SNAP</b>.
        </motion.p>
      </div>

      {/* ======== Stats Section ======== */}
      <div className="mt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-blue-700 mb-10"
        >
          Start your prep the <span className="text-yellow-500">ThinkPlus</span> way 🚀
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl border-t-4 border-blue-600">
            <Users className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">400+</h3>
            <p className="text-gray-600">Our Happy Students</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl border-t-4 border-blue-600">
            <Clock className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">600 Hrs</h3>
            <p className="text-gray-600">Dedicated Lectures</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl border-t-4 border-blue-600">
            <GraduationCap className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">10+ Yrs</h3>
            <p className="text-gray-600">Experienced Faculty</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl border-t-4 border-blue-600">
            <Award className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">47</h3>
            <p className="text-gray-600">IIM Admissions</p>
          </motion.div>
        </div>
      </div>

      {/* ======== Our Values Section ======== */}
      <div className="mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-blue-700 mb-10"
        >
          Our Values 💙
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-600 text-left">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Personalized Attention</h3>
            <p className="text-gray-600">
              At ThinkPlus, we provide personalized attention to each student through
              weekly one-on-one mentoring sessions, helping them overcome weaknesses
              and reach their full potential.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-600 text-left">
            <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Innovative Teaching Method</h3>
            <p className="text-gray-600">
              At ThinkPlus, we revolutionize teaching with technology-driven classes,
              online quizzes, and mock tests to enhance student performance and engagement,
              fostering a dynamic learning environment.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-600 text-left">
            <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Focus on Fundamentals</h3>
            <p className="text-gray-600">
              At ThinkPlus, we provide personalized tools, comprehensive study material,
              and expert guidance to help students deeply understand the fundamental
              concepts and excel in exams and interviews.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-600 text-left">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Outcome-Oriented Approach</h3>
            <p className="text-gray-600">
              At ThinkPlus, we empower students with an outcome-oriented approach. Our
              structured curriculum and weekly one-on-one feedback sessions help students
              track their progress and ensure constant improvement.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ======== CTA Section ======== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-center bg-blue-600 text-white py-10 px-6 rounded-2xl shadow-xl max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Join ThinkPlus Today 🚀</h2>
        <p className="text-lg mb-6">
          Let’s turn your MBA dreams into reality — with India’s best mentors, proven strategies,
          and a thriving community of learners.
        </p>
        <a
          href="/courses"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
        >
          Explore Courses
        </a>
      </motion.div>
    </div>
  );
}
