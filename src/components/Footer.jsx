import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-300 px-8 py-5 ">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              Generate demand with our free CRM to create a steady stream of new
              incoming requests. Automate omnichannel prospecting to find
              customers on the web, social media and messengers.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@support@cst.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-white text-sm mt-8">
          &copy; 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
