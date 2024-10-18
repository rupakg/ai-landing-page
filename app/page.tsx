import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-secondary">Features</a></li>
            <li><a href="#pricing" className="hover:text-secondary">Pricing</a></li>
            <li><a href="#about" className="hover:text-secondary">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Landing Page</h1>
              <p className="text-xl mb-8">Discover amazing features and services.</p>
              <button className="bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Placeholder for Hero Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Feature {item}</h2>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
