import Cart_footer from "./Cart_footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fffbea] flex flex-col items-center px-6 pt-40 text-center">
      <h1 className="text-4xl font-bold mb-4 text-yellow-600">About FoodyDude</h1>

      <p className="max-w-3xl text-lg mb-10 text-gray-700">
        Welcome to <span className="font-semibold text-red-500">FoodyDude</span> —
        your ultimate food discovery companion! We help you explore top-rated restaurants, delicious cuisines,
        and trending food spots around you. Whether you're craving pizza, burgers, momos, or rolls — we've got you covered!
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100">
          <h2 className="text-xl font-semibold mb-2 text-green-600">🔥 Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Live menu from Swiggy API</li>
            <li>Search & filter by category</li>
            <li>Restaurant ratings & cards</li>
            <li>Cart and checkout functionality</li>
            <li>Fully responsive design</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-1">
            <li>Browse categories like Pizza, Momos, Burgers</li>
            <li>View top-rated restaurants nearby</li>
            <li>Add your favorite dishes to the cart</li>
            <li>Ready to checkout in a click!</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">🧠 Built With</h2>
          <p className="text-gray-600 mb-2">This app is built using modern technologies:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>React.js + React Router</li>
            <li>Tailwind CSS for responsive design</li>
            <li>Live food data via Swiggy Public API</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">👨‍💻 Developed By</h2>
          <p className="text-gray-600">
            Made with ❤️ by <span className="font-semibold text-black">Tushar Saini</span><br />
            Connect on <a href="https://github.com/tushar-saini31" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>

      <div className="mt-16 w-full">
    
      </div>
    </div>
  );
};

export default About;
