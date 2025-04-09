import React from "react";
import { motion } from "framer-motion";
import { FaBriefcaseMedical, FaMoneyCheckAlt, FaGlobe, FaHandshake } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, bgColor }) => {
  return (
    <div className={`p-10 ${bgColor} text-center w-full sm:w-1/2 md:w-1/4`}>
      <div className="relative flex justify-center items-center mb-4">
        <div className="absolute w-20 h-20 border-4 border-dashed rounded-full border-white animate-spin-slow"></div>
        <div className="bg-white rounded-full p-4">{icon}</div>
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center w-full"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      <Card
        title="Expertise"
        description="Founded by healthcare professionals, we understand the unique needs of your agency."
        icon={<FaBriefcaseMedical size={30} />} 
        bgColor="bg-[#48b3d3]"
      />
      <Card
        title="Pricing"
        description="Our charges ensure you receive the best service at competitive industry rates."
        icon={<FaMoneyCheckAlt size={30} />} 
        bgColor="bg-[#63c4d1]"
      />
      <Card
        title="Coverage"
        description="Proudly provide professional therapy home health across multiple locations. Whether you're in a major city or a smaller community, our wide-reaching network ensures that we can meet your hiring needs."
        icon={<FaGlobe size={30} />} 
        bgColor="bg-[#41bdbd]"
      />
      <Card
        title="Reliability"
        description="We ensure consistent, high-quality services that you can depend on for all your staffing and care needs."
        icon={<FaHandshake size={30} />} 
        bgColor="bg-[#37c3a8]"
      />
    </motion.div>
  );
};

export default Features;
