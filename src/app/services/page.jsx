// app/services/page.jsx
import { ArrowRight, Code, Layout, Globe, Server, Shield, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-indigo-600" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
  },
  {
    icon: <Layout className="w-12 h-12 text-indigo-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
  },
  {
    icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
    title: 'Responsive Design',
    description: 'Custom web applications built that works seamlessly on all device screens such as phone, tablet, computer.',
  },
  {
    icon: <Server className="w-12 h-12 text-indigo-600" />,
    title: 'Backend Development',
    description: 'Robust and scalable server-side solutions for your applications.',
  },
  {
    icon: <Shield className="w-12 h-12 text-indigo-600" />,
    title: 'Security Solutions',
    description: 'Implementation of security best practices and data protection.',
  },
  {
    icon: <Globe className="w-12 h-12 text-indigo-600" />,
    title: 'API Integration',
    description: 'Seamless integration with third-party services and APIs.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-indigo-600 py-8">My Services</h1>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto"></div> */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of digital solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* <button className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-800">
                Learn More <ArrowRight className="w-4 h-4 ml-2 hover:translate-x-1 transition-all" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}