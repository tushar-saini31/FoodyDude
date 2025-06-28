import Shimmer from "./Shimmer";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("Your message has been sent! 🚀");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-6 pt-24">
      <h1 className="text-4xl font-bold mb-4 text-yellow-600">Contact Us</h1>
      <p className="text-gray-700 text-center max-w-xl mb-8">
        We would love to hear your feedback, queries, or partnership requests. Fill out the form below, and we’ll get back to you shortly!
      </p>

      {loading ? (
        <Shimmer />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
