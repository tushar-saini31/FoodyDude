import { help_support_log } from "../utils/constants";

const Help = () => {
  return (
    <div className="bg-cyan-700 min-h-screen mt-20 flex flex-col items-center px-6 py-20">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Help & Support</h1>
        <p className="text-lg">Let’s take a step ahead and help you better.</p>
      </div>

      <div className="bg-white mt-10 w-full max-w-6xl shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={help_support_log}
            alt="Support Illustration"
            className="w-64 h-64"
          />
        </div>

        {/* Help Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <span className="font-medium">📄 What documents are required to list my restaurant?</span>
              <p className="text-sm mt-1 ml-4">You need FSSAI license, PAN card, GST certificate, and bank account details.</p>
            </li>
            <li>
              <span className="font-medium">💸 How does FoodyDude charge commission?</span>
              <p className="text-sm mt-1 ml-4">We charge a commission on every successful order. Details are shared during onboarding.</p>
            </li>
            <li>
              <span className="font-medium">🚚 How are deliveries handled?</span>
              <p className="text-sm mt-1 ml-4">Deliveries are managed either by the restaurant or via our partner delivery service.</p>
            </li>
            <li>
              <span className="font-medium">📞 How can I contact support?</span>
              <p className="text-sm mt-1 ml-4">You can reach out via our live chat or email at support@foodydude.app</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
