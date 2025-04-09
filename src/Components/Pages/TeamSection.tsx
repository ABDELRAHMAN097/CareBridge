import React, { useState } from "react";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import man1 from "../../assets/man1.webp";

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<null | number>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Amir Beltagi",
      role: "PT, MS, PhD",
      details: `Dr. Amir Beltagi is a highly accomplished physical therapist with a diverse background in academia and clinical practice. Holding a Doctor of Philosophy in Biomechanics from Cairo University and the University of Illinois at Chicago (2022), as well as a Master of Science in Physical Therapy from Cairo University (2009), Dr. Beltagi brings a wealth of knowledge and expertise to CareBridge therapeutics.Dr. Beltagi is a licensed physical therapist in New York, Illinois, and Egypt, with specialized experience in orthopedics, sports medicine, pediatrics, geriatrics, and neuromuscular rehabilitation. He is also certified in manual therapy, kinesio-taping, and pelvic floor management, allowing him to provide comprehensive and individualized care to patients of all ages and backgrounds.
Passionate about advancing the field of physical therapy and improving patient outcomes, Dr. Beltagi remains dedicated to staying current with the latest advancements in research and evidence-based practices. Whether you’re recovering from an injury, managing a chronic condition, or looking to improve your overall physical function, Dr. Beltagi is dedicated to supporting your journey towards optimal health and wellness. His commitment to excellence and compassionate approach to care make him a valued member of the CareBridge therapeutics team.`,
    },
    // {
    //   id: 2,
    //   name: "Dr Ricky Doe",
    //   role: "Assistant Surgeon",
    //   details: "Dr. Ricky Doe specializes in surgical assistance and patient care, ensuring excellent preoperative and postoperative support.",
    // },
    // {
    //   id: 3,
    //   name: "Dr Ricky Doe",
    //   role: "Assistant Surgeon",
    //   details: "Dr. Ricky Doe is dedicated to improving surgical outcomes through precision and teamwork.",
    // },
    // {
    //   id: 4,
    //   name: "Dr Ricky Doe",
    //   role: "Assistant Surgeon",
    //   details: "Dr. Ricky Doe is passionate about delivering high-quality surgical assistance to patients.",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
        {/* <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p> */}
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-8  text-center justify-center items-center"
        variants={containerVariants}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="flex flex-col items-center text-center space-y-4"
            variants={itemVariants}
          >
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center shadow-md overflow-hidden">
              {member.id === 1 ? (
                <img
                  src={man1}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserMd className="text-6xl" style={{ color: "#0087be" }} />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-base text-gray-600">{member.role}</p>
            <button
              className="mt-2 px-6 py-2 bg-[#0087be] text-white text-sm font-bold rounded-full shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setSelectedMember(member.id)}
            >
              More Details
            </button>
          </motion.div>
        ))}
      </motion.div>

      {selectedMember && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl focus:outline-none"
        onClick={() => setSelectedMember(null)}
      >
        ✕
      </button>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
        {teamMembers.find((member) => member.id === selectedMember)?.name}
      </h3>
      <p className="text-sm sm:text-base md:text-base text-gray-600 text-justify leading-4 sm:leading-6 tracking-normal">
        {teamMembers.find((member) => member.id === selectedMember)?.details}
      </p>
    </motion.div>
  </div>
)}


    </motion.div>
  );
};

export default TeamSection;
