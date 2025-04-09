import React, { useState } from "react";

const PrivacyPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div className="relative">
      <div className="flex items-start">

        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          If you would like to receive text message communication, text START, YES, to this phone number: <a href="tel:+17086789145" className="text-blue-900 font-bold hover:underline">
            +1 (708) 678-9145
          </a>  from CareBridge Therapeutics. You will be optin-in to text messages.
          <br></br>
          Message frequency varies and may include appointment reminders or service offers. Message and data rates may apply. You may opt out at any time by replying. Reply STOP at any time to end or unsubscribe.
          For assistance. reply HELP or contact support at: <a href="tel:+17086789145" className="text-blue-900 font-bold hover:underline">
            +1 (708) 678-9145
          </a>
          <br></br>
          See our
          <button
            onClick={handleOpen}
            className="text-blue-900 font-bold underline ml-1 focus:outline-none"
          >
            Privacy Policy
          </button>
          &nbsp; for details on how we handle your information.
        </label>
      </div>

      <br></br>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          required
          className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          Yes, I agree to receive text messages from CareBridge Therapeutics sent from <a href="tel:+17086789145" className="text-blue-900 font-bold hover:underline">
            +1 (708) 678-9145
          </a>  .
        </label>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 max-w-4xl p-6 rounded-lg shadow-lg relative overflow-y-scroll max-h-[90vh]">


            <div className=" min-h-screen">
              <div className="max-w-5xl mx-aut">
                <button
                  onClick={handleClose}
                  className="absolute top-3 text-3xl right-3 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  ✖
                </button>
                 <div className="p-6 max-w-3xl mx-auto text-gray-800 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          CareBridge Therapeutics Terms and Conditions / Privacy Policy
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          CareBridge Therapeutics respects your privacy. By opting into our SMS
          messaging service, you agree to the following terms regarding how we
          handle your data:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
          <li>
            <span className="font-semibold text-blue-600">Data Collection:</span>
            We will collect your name, email address, mailing address, and mobile
            phone number when you sign up for SMS updates. This information will
            be collected via our website contact form, email, rental agreement,
            or third-party reservation systems.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Data Usage:</span> We
            use your data solely for sending updates, promotions, and reminders
            related to our products or services.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Data Security:</span>
            We protect your data with secure storage measures to prevent
            unauthorized access.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Data Retention:</span>
            We retain your information as long as you are subscribed to our SMS
            service. You may request deletion at any time.
          </li>
          <li>
            <span className="font-semibold text-blue-600">MESSAGE AND DATA RATES MAY APPLY:</span>
            Your mobile carrier may charge fees for sending or receiving text
            messages, especially if you do not have an unlimited texting or data
            plan.
          </li>
          <li>Messages are recurring, and message frequency varies.</li>
          <li>
            <span className="font-semibold text-blue-600">Contact:</span> CareBridge
            Therapeutics at <a href="tel:+17086789145" className="text-blue-500 underline">+1 (708) 678-9145</a> or
            <a href="mailto:admin@carebridgerehab.com" className="text-blue-500 underline"> admin@carebridgerehab.com</a>
            for HELP or to STOP receiving messages.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Opt-Out:</span> You can
            opt out of the SMS list at any time by texting, emailing, or replying
            STOP or UNSUBSCRIBE. After unsubscribing, you will receive a final SMS
            to confirm, and we will remove your number from our list within 24 hours.
          </li>
          <li>
            You can send HELP for additional assistance and will receive a text
            including our phone number, email, and website. We are here to help
            you.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Non-Sharing Clause:</span>
            We do not share your data with third parties for marketing purposes.
            CareBridge Therapeutics will not sell, rent, or share the collected mobile
            numbers.
          </li>
        </ul>
      </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPopup;
