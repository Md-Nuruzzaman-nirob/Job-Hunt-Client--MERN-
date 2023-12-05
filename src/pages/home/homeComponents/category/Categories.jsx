import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../../../components/Container";
import Button from "../../../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/categories.json").then((res) => setCategories(res.data));
  }, []);
  console.log(categories);

  return (
    <Container className="my-16">
      <div className="flex flex-wrap items-center justify-center sm:justify-between">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold font-clashDisplay">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h3>
        <Button className="bg-transparent hover:bg-transparent  border-transparent hover:border-transparent text-indigo-700 shadow-none">
          Show all jobs <FaArrowRight />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
