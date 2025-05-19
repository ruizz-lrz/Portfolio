import React from 'react';
import ContactForm from './conform';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-10 px-6 md:px-12 lg:px-24">
        <section className="hero bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Hello, Welcome!</h1>
          <p className="text-lg text-gray-700 mb-4">It's I, an aspiring web developer and your IT enthusiast.</p>
          <img src="images/494357955_1192486495949209_523808230370195182_n.jpg" alt="Your Profile Picture" className="profile-img rounded-full w-32 h-32 object-cover mx-auto mb-4" />
          {/* Consider adding Tailwind classes for image styling */}
        </section>
        <section className="about-preview bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
          <p className="text-gray-700"> Wanna know more? <a href="./About" className="text-blue-500 hover:underline">Read More</a></p>
        </section>
        <section className="contact-form bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
          <form id="contactForm">
            <ContactForm />
          </form>
        </section>
      </main>
      <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
        <p>&copy; Copyright All Rights Reserved 2025 by Lorenz&Kenn</p>
      </footer>
    </div>
  );
}

export default Home;
