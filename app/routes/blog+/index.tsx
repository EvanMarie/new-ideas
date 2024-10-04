import { useState } from "react";
import { blogArray, BlogCategories, blogImages } from "./blog-posts/blogsArray";
import {
  FlexFull,
  Transition,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import DropDownMenu from "~/buildingBlockComponents/dropDownMenu";
import BlogIndexCard from "./blog-components/blogCard";

export default function BlogIndex() {
  const blogCategories = [
    "All Posts",
    "Creativity",
    "Programming",
    "Science & Philosophy",
    "Artificial Intelligence",
    "UX / UI & Frontend Design",
    "Apps",
    "Data Visualization",
    "Mobile Apps",
  ];
  const [category, setCategory] = useState("All Posts");
  // const displayBlogsList = blogsList.filter((item) => {
  const displayBlogsList = blogArray.filter((item) => {
    if (category === "All Posts") {
      return true;
    } else {
      return item.categories.includes(category as BlogCategories);
    }
  });

  const blogsByDate = displayBlogsList.sort((a, b) =>
    a.date > b.date ? -1 : 1
  );
  return (
    <>
      <VStackFull className="pt-2vh pb-5vh" gap="gap-2vh">
        <Transition
          className="w-full px-2vh sm:w-60vh overflow-visible"
          type="fadeSlideInRight"
        >
          <DropDownMenu
            options={blogCategories.filter((item) => item !== category)}
            selectedOption={category}
            setSelectedOption={setCategory}
          />
        </Transition>
        <Wrap className="w-full justify-evenly">
          {blogsByDate.map((blog, index) => (
            <BlogIndexCard blog={blog} key={index} index={index} />
          ))}
        </Wrap>
      </VStackFull>
    </>
  );
}
