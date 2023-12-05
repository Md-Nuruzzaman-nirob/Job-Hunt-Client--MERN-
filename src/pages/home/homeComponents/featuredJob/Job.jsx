/* eslint-disable react/prop-types */

const Job = ({ job }) => {
  return (
    <div className="p-5 border hover:bg-indigo-700 hover:text-white font-clashDisplay group">
      <div className="flex items-center justify-between">
        <img
          className="bg-white rounded-full p-[2px] w-16"
          src={job.companyLogo}
          alt=""
        />
        <p className="border px-2 py-1 border-indigo-700 text-indigo-700 group-hover:border-white group-hover:text-white font-medium font-Epilogue">
          {job.time}
        </p>
      </div>
      <h3 className="text-xl font-semibold mt-3">{job.job}</h3>
      <p className="text-sm font-Epilogue opacity-90">
        {job.companyName} | {job.location}
      </p>
      <p className="text-sm font-Epilogue opacity-90 my-4">{job.description}</p>
      <p className=" bg-[#56CDAD]/10 text-[#56CDAD] w-fit px-2 py-1 rounded-md">
        {job.category}
      </p>
    </div>
  );
};

export default Job;
