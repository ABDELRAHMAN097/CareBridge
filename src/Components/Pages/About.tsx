import React from 'react';
import { FaUser, FaBriefcase, FaHandsHelping, FaClinicMedical } from 'react-icons/fa';
import aboutImage from '../../assets/About.webp';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className=" flex flex-col items-center text-center rounded-lg bg-white min-h-[280px] w-full">
      <div className="relative flex items-center justify-center mb-6 w-20 h-20">
        
        <div className="absolute w-full h-full border-4 border-dashed border-blue-500 rounded-full animate-spin-slow"></div>
        
        <div className="relative flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed line-clamp-3">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <motion.div
      className="bg-white pt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 ">
        
        <div className="text-center mb-10 ">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Looking for reliable therapy staffing solutions? Learn how we bridge the gap between home health agencies and skilled professionals to ensure top-notch care for your patients.
          </p>
        </div>

        
        <div className=" flex flex-col md:flex-row md:items-stretch md:justify-between gap-2">
          <div className=" flex flex-col text-center w-full md:w-1/3 ">
            <Feature
              icon={<FaUser size={24} />}
              title="Therapist Staffing Solutions"
              description="Identifying, screening, and placing qualified therapists in suitable positions for HHAs."
            />
            <Feature
              icon={<FaHandsHelping size={24} />}
              title="Comprehensive Therapy Services"
              description="Providing physical, occupational, and speech therapy services to meet diverse patient needs."
            />
          </div>

          <div className="hidden md:flex md:block md:w-1/3 items-center justify-center w-full">
            <img
              src={aboutImage}
              alt="About Us"
              className="max-w-full h-auto md:max-w-md rounded-lg"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <Feature
              icon={<FaClinicMedical size={24} />}
              title="Patient-Centered Approach"
              description="Ensuring prompt communication, timely documentation, and effective follow-up for optimal patient care."
            />
            <Feature
              icon={<FaBriefcase size={24} />}
              title="Expertise in Home Health Care"
              description="Delivering specialized care and support for patients in the comfort of their homes, ensuring quality and convenience."
            />
          </div>
        </div>

        <div className="block md:hidden flex justify-center mt-6">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-2/3 max-w-xs rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
