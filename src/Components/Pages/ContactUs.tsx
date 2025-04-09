import { useState } from "react";
import PrivacyPopup from "./PrivacyPopup";
import { motion } from "framer-motion";

interface ContactData {
  first_name: string;
  last_name: string;
  company_name: string;
  work_email: string;
  phone: string;
  is_contact: number;
}

const ContactUs = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState<ContactData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      first_name: formData.get("firstName") as string || "",
      last_name: formData.get("lastName") as string || "",
      company_name: formData.get("companyName") as string || "",
      work_email: formData.get("workEmail") as string || "",
      phone: formData.get("mobileNumber") as string || "",
      message: "contact email", 
      subject: "General Inquiry",
      is_contact: 1,
    };

    try {
      const response = await fetch("https://carebridger.runasp.net/Contact/submitcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setPopupData(data);
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 5000);

        if (form) {
          form.reset();
        }
      } else {
        console.error("Failed to send data:", await response.text());
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-animated min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-5xl w-full rounded-lg overflow-hidden">
        <div className="text-center text-white m-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            Serving home health agencies across the greater Chicago area.
          </p>
        </div>
        <div className="p-8 bg-white shadow-lg m-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name*</label>
                <input type="text" name="firstName" placeholder="Jone" required className="bg-gray-100 w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name*</label>
                <input type="text" name="lastName" placeholder="Doe" required className="bg-gray-100 w-full px-3 py-2 border rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" name="companyName" placeholder="Company Inc" className="bg-gray-100 w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Work Email*</label>
                <input type="email" name="workEmail" placeholder="work@example.com" required className="bg-gray-100 w-full px-3 py-2 border rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number*</label>
              <input type="tel" name="mobileNumber" placeholder="+1 (234) 567-8910" required className="bg-gray-100 w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="flex items-start space-x-4">
              <PrivacyPopup />
            </div>
            <button type="submit" className="px-6 py-2 font-bold rounded-md transition bg-[#0087be] text-white hover:bg-blue-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {popupVisible && popupData && (
        <div className="fixed text-center top-1/4 left-1/2 transform -translate-x-1/2 bg-white text-[#0087be] px-6 py-4 rounded shadow-2xl border border-[#0087be] z-50">
          <p>Thank you, {popupData.first_name} {popupData.last_name}!</p>
          <p>Your message has been sent successfully.</p>
          <p>Work Email: {popupData.work_email}</p>
          <p>Phone: {popupData.phone}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ContactUs;