import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState<{ first_name: string; phone: string; message: string } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
  const data = {
  first_name: formData.get("name") as string || "No Name",
  phone: formData.get("phone") as string || "",
  message: formData.get("message") as string || "General Inquiry",
  subject: "Website Enquiry",
  last_name: "N/A",
  work_email: "testuser@gmail.com", 
  company_email: "info@yourcompany.com" 
};

    try {
      const response = await fetch("https://carebridger.runasp.net/Contact/submitcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Response Data:", data);
        setPopupData(data);
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 5000);
        form.reset();
      } else {
        console.error("Failed to send data:", await response.text());
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <motion.footer
      className="bg-[#171717] text-white py-10 flex flex-col items-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full px-6 flex flex-wrap justify-around md:flex-nowrap md:text-left text-center gap-12">
        {/* Get in Touch Section */}
        <motion.div variants={itemVariants} className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-base">
            <li className="flex justify-center md:justify-start items-center">
              <a href="mailto:office@carebridgetherapeutics.com" className="flex items-center text-gray-400 hover:text-[#0087be] transition">
                <FaEnvelope className="mr-3 text-3xl" />
                <span className="text-md">office@carebridgetherapeutics.com</span>
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <a href="tel:+1 (708) 6789145" className="flex items-center text-gray-400 hover:text-[#0087be] transition">
                <FaMobileAlt className="mr-3 text-4xl" />
                <span className="text-md">+1 (708) 678-9145</span>
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div variants={itemVariants} className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact Us", path: "/contact" },
              { name: "Privacy Policy", path: "/privacy" },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex justify-center md:justify-start items-center text-gray-400 hover:text-[#0087be] transition">
                  <span className="mr-2 text-[#0087be] text-sm font-bold">&#10148;</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Enquiry Form Section */}
        <motion.div variants={itemVariants} className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Enquiry Form</h3>
          <form className="space-y-4 text-base" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full bg-transparent border-b border-gray-600 py-1 focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              className="w-full bg-transparent border-b border-gray-600 py-1 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full bg-transparent border-b border-gray-600 py-1 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0087be] text-white text-sm font-bold px-8 py-2 rounded-full shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        Copyright © 2025 CareBridge therapeutics. All Rights Reserved
      </div>

      {/* Success Popup */}
      {popupVisible && popupData && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white text-[#0087be] px-6 py-4 rounded shadow-2xl border border-[#0087be] z-50">
          <p>Thank you, {popupData.first_name}!</p>
          <p>Your message has been sent successfully.</p>
          <p>Phone: {popupData.phone}</p>
          <p>Message: {popupData.message}</p>
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;