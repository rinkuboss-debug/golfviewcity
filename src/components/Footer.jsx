import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div
        className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
        id="Footer"
      >
        {/* ...FAQ Section and other content above... */}

        {/* Privacy Policy Section */}
        <div
          id="privacypolicy"
          className="container mx-auto mt-10 mb-8 bg-gray-800 rounded-lg p-6 shadow"
        >
          <h3 className="text-white text-xl font-bold mb-4">Privacy Policy</h3>
          <div className="text-gray-400 space-y-4">
            <p>
              <strong>Golf View City</strong>, managed by <strong>Prem Singh (Premium Real Estate Management)</strong>, values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.
            </p>
            <div>
              <h4 className="text-white font-semibold mb-2">1. Information We Collect</h4>
              <ul className="list-disc ml-6">
                <li>Name, email address, and phone number (when you fill out enquiry forms)</li>
                <li>Location and property preferences</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">2. How We Use Your Information</h4>
              <ul className="list-disc ml-6">
                <li>Responding to your enquiries and sharing project details</li>
                <li>Sending updates, offers, and important information</li>
                <li>Improving our website and customer service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">3. Information Sharing</h4>
              <ul className="list-disc ml-6">
                <li>We <strong>do not sell, trade, or rent</strong> your personal information</li>
                <li>Information may be shared only with trusted service providers or if required by law</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">4. Data Security</h4>
              <p>
                We use reasonable safeguards to protect your data from unauthorized access, misuse, or disclosure. However, no method of electronic storage is completely secure.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">5. Cookies</h4>
              <p>
                Our website may use cookies to enhance your browsing experience and analyze traffic. You can disable cookies through your browser settings.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">6. Third-Party Links</h4>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices; please review their policies separately.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">7. Your Rights</h4>
              <ul className="list-disc ml-6">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Opt-out of receiving promotional communications</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">8. Policy Updates</h4>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted here with a new “Last Updated” date.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">9. Contact Us</h4>
              <p>
                For any questions regarding this Privacy Policy, please contact:<br />
                <strong>Prem Singh – Premium Real Estate Management</strong><br />
                Phone: <strong>85275 33067</strong><br />
                Email: <a href="mailto:premiumrealestatemanagement@gmail.com" className="text-blue-400 underline">premiumrealestatemanagement@gmail.com</a><br />
                {/* Website: [Add Website Link]<br />
                <span className="italic">Last Updated: September 2025</span> */}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
          Copyright 2025 © Rinku codexus (7268077319). All Right Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
