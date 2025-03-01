"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Add Toaster Component */}
      <Toaster position="top-right" />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Le&#39;s discuss how we can help bring your ideas to life
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all h-32 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 font-medium hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white  shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">fongejustice918@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">+237 (673) 746-133</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      akwa-douala
                      <br />
                      DOUALA, CAMEROON
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 10:00 PM
                      <br />
                      Weekend: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white  shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Location
              </h2>
              <div className="h-64 bg-gray-200 ">
                {/* Add your map component here */}
                <div className="w-full h-full bg-red-300 flex items-center justify-center text-gray-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.54623167859!2d9.659401398118437!3d4.036070837399057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1fe6d%3A0x92daa1444781c48b!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2srw!4v1736250045340!5m2!1sen!2srw"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    alt="google map"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
