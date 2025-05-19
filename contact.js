import React from 'react';
import ContactForm from './conform';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-10 px-6 md:px-12 lg:px-24">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h1>
          <section className="mb-8">
            <ContactForm />
          </section>
          <section className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="contact-info-column mb-6 md:mb-0">
              <p className="text-gray-700"><strong className="font-medium text-gray-700">Phone:</strong> 09060345123</p>
              <p className="text-gray-700"><strong className="font-medium text-gray-700">Address:</strong> Gingoog City, San Luis</p>
              <p className="text-gray-700"><strong className="font-medium text-gray-700">Email:</strong> almonialorenz@gmail.com</p>
              <div className="social-links mt-4 flex space-x-4">
                <a href="https://www.facebook.com/share/14uQ1UVunh/" target="_blank" rel="noopener noreferrer">
                  <img src="images/facebook.png" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="htthttps://www.facebook.com/share/16ob7uWAqD/ps://l.facebook.com/l.https://www.facebook.com/share/16ob7uWAqD/" target="_blank" rel="noopener noreferrer">
                  <img src="images/linked.png" alt="Linkedin" className="w-8 h-8" />
                </a>
                <a href="https://l.instagram.com/l.php?u=https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Florenzdesu_%3Figsh%3DcDV3YjVqbXBma3No%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSWlnclJEcXNXckNVazNQRAEeYj-uOP8yX0FNe62sj-ERSGPF2kcZVw1dKUhMYprW_1mKnry7Fp_VRVgE9y8_aem_mqSd8b2vL_eBZbGctFVwbA&h=AT2_ZuFMtFag3ZFBA16ezoxgQs_2nBmW5k-si-3tqcfguwmWaCsVN-PMwzvLN548AWxrjxgzaxY1f_cJ6NGfbDwCHU67t6ACICF972u9LmWimXdL0zjHdhe0z44xuW2jAwMygQ" target="_blank" rel="noopener noreferrer">
                  <img src="images/instagram.png" alt="Instagram" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
        <p>&copy; Copyright All Rights Reserved 2025 by Lorenz&Kenn</p>
      </footer>
    </div>
  );
}

export default Contact;
