import { FaArrowRight } from "react-icons/fa6";
import Button from "../../../../components/Button";
import Container from "../../../../components/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import Job from "./Job";

const FeaturedJobSection = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("/featuredJob.json").then((res) => setJobs(res.data));
  }, []);
  return (
    <Container className="py-16">
      <div className="flex flex-wrap items-center justify-center sm:justify-between">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold font-clashDisplay">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h3>
        <Button className="bg-transparent hover:bg-transparent  border-transparent hover:border-transparent text-indigo-700 shadow-none">
          Show all jobs <FaArrowRight />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {jobs.slice(0, 8).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedJobSection;
