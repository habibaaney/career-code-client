import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    requirements,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center p-4  ">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h2 className="card-title text-2xl">{company}</h2>
          <p className="flex items-center gap-2 text-gray-500">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary:{salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/job/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
