// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const ProjectCard = ({ project }) => (
//   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//     <div className="relative h-48">
//       <Image
//         src={project.image}
//         alt={project.title}
//         fill
//         className="object-cover"
//       />
//     </div>
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//       <p className="text-gray-600 mb-4">{project.description}</p>
//       <a
//         href={project.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-indigo-600 hover:text-indigo-800 font-medium"
//       >
//         View Project →
//       </a>
//     </div>
//   </div>
// );

// export default function Realizations() {
//   const [projects, setProjects] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`http://localhost:5000/api/projects?page=${currentPage}`);
//         const data = await response.json();
//         setProjects(data.projects);
//         setTotalPages(data.total_pages);
//       } catch (error) {
//         console.error('Failed to fetch projects:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [currentPage]);

//   return (
//     <div className="min-h-screen pt-20 pb-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
        
//         {loading ? (
//           <div className="flex justify-center">
//             <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {projects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>

//             <div className="mt-8 flex justify-center space-x-2">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-4 py-2 border rounded-md disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               <span className="px-4 py-2">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="px-4 py-2 border rounded-md disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }