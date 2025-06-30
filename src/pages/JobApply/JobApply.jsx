// import React from "react";
// import { Link, useParams } from "react-router";
// import UseAuth from "../../hooks/UseAuth";

// const JobApply = () => {
//   const { id: jobId } = useParams();
//   const { user } = UseAuth();

//   console.log("Job ID from params:", jobId, user);

//   const handleApplyFormSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const linkedInLink = form.linkedIn.value;
//     const githubLink = form.github.value;
//     const resumeLink = form.resume.value;

//     console.log("Applying with", {
//       linkedInLink,
//       githubLink,
//       resumeLink,
//     });

//     // Here you would typically send the application data to your server
//     // For example:
//     // fetch('/api/apply', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ jobId, linkedInLink, githubLink, resumeLink, user }),
//     // })
//   };

//   return (
//     <div>
//       <h3 className="text-4xl">
//         Apply for this job:<Link to={`/jobs/${jobId}`}>Details</Link>
//       </h3>
//       <form
//         onSubmit={handleApplyFormSubmit}
//         className="w-full max-w-xs mx-auto"
//       >
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
//           <label className="label">LinkdIn Link</label>
//           <input
//             type="url"
//             name="linkedIn"
//             className="input"
//             placeholder="LinkdIn profile link"
//           />

//           <label className="label">Github Link</label>
//           <input
//             type="url"
//             name="github"
//             className="input"
//             placeholder="Github Link"
//           />

//           <label className="label">Resume link</label>
//           <input
//             type="url"
//             name="resume"
//             className="input"
//             placeholder="Resume link"
//           />

//           <input className="btn" type="submit" value="Apply " />
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default JobApply;

import React from "react";

import UseAuth from "../../hooks/UseAuth";
import { Link, useParams } from "react-router";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  console.log("Job ID from params:", jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedInLink = form.linkedIn.value;
    const githubLink = form.github.value;
    const resumeLink = form.resume.value;

    console.log("Applying with", {
      linkedInLink,
      githubLink,
      resumeLink,
    });

    // Here you would typically send the application data to your server
    // For example:
    // fetch('/api/apply', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ jobId, linkedInLink, githubLink, resumeLink, user }),
    // })
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Apply for this Position
          </h3>
          <Link
            to={`/jobs/${jobId}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            ← View Job Details
          </Link>
        </div>

        <form onSubmit={handleApplyFormSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              name="linkedIn"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://linkedin.com/in/your-profile"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              GitHub Profile URL
            </label>
            <input
              type="url"
              name="github"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://github.com/your-username"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Resume/CV URL
            </label>
            <input
              type="url"
              name="resume"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://drive.google.com/your-resume"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload your resume to Google Drive or similar service and paste
              the shareable link here
            </p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
