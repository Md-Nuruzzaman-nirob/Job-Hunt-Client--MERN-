/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";

const Category = ({ category }) => {
  return (
    <div className="p-8 border hover:bg-indigo-700 hover:text-white font-clashDisplay">
      <img className="bg-white rounded-full p-1" src={category.icon} alt="" />
      <h3 className="text-2xl font-semibold mt-8 mb-2">{category.category}</h3>
      <button className="flex items-center gap-5 flex-nowrap">
        {category.totalJobs} jobs available <FaArrowRight />
      </button>
    </div>
  );
};

export default Category;
