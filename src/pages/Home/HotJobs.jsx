// import React, { useEffect, useState } from "react";
// import JobsCard from "../Shared/JobsCard";

// const HotJobs = ({ jobsPromise }) => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     jobsPromise
//       .then((data) => {
//         setJobs(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching jobs:", error);
//       });
//   });
//   return (
//     <div>
//       <h2 className="text-4xl font-bold text-center">Hot jobs of the day</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {jobs.map((job) => (
//           <JobsCard key={job._id} job={job}></JobsCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HotJobs;



import React, { useEffect, useState } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, [jobsPromise]); // Added dependency array to prevent infinite loops

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Hot Jobs of the Day
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the most exciting opportunities available right now
        </p>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <JobsCard key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12">Loading hot jobs...</p>
        )}
      </div>
    </div>
  );
};

export default HotJobs;
