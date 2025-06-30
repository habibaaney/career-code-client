// import React, { use } from "react";
// import { Link, useLoaderData } from "react-router";

// const JonDetails = () => {
//   const {
//     _id,
//     title,
//     location,
//     jobType,
//     category,
//     responsibilities,
//     salaryRange,
//     description,
//     requirements,
//     company,
//     company_logo,
//   } = useLoaderData();

//   return (
//     <div className="card bg-base-100 shadow-sm items-center ">
//       <div className="flex items-center p-4">
//         <figure>
//           <img src={company_logo} alt={company} />
//         </figure>
//         <div>
//           <h2 className="card-title text-2xl">{company}</h2>
//           <p className="text-gray-500">{location}</p>
//         </div>
//       </div>

//       <div className="card-body">
//         <h2 className="card-title text-xl">Join As: {title}</h2>
//         <p className="text-xl text-gray-600">
//           Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
//         </p>
//         <p>{description}</p>
//         <h3 className="text-xl font-semibold">Requirements:</h3>
//         <ul className="list-disc pl-5">
//           {requirements.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//         <h3 className="text-xl font-semibold">Responsibilities:</h3>
//         <ul className="list-disc pl-5">
//           {responsibilities.map((task, index) => (
//             <li key={index}>{task}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="card-actions">
//         <Link to={`/jobApply/${_id}`}>
//           <button className="btn btn-primary">Apply Now</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default JonDetails;

import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    responsibilities,
    salaryRange,
    description,
    requirements,
    company,
    company_logo,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row items-center p-6 border-b border-gray-100">
          <figure className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mb-4 sm:mb-0 mr-0 sm:mr-6">
            <img
              src={company_logo}
              alt={company}
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{company}</h2>
            <p className="text-gray-600 mt-1">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium">
                {location}
              </span>
            </p>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                {jobType}
              </span>
              <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                {category}
              </span>
            </div>
            <p className="text-xl font-medium text-gray-700 mt-2">
              Salary: {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700">{description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Requirements:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {requirements.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Responsibilities:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="p-6 border-t border-gray-100 text-center">
          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary px-8 py-3 text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
