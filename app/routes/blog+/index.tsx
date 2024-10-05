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
import { OptionSelector } from "~/buildingBlockComponents/optionSelector";

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
      <VStackFull className="pt-3vh pb-5vh">
        <FlexFull className="py-1vh">
          <OptionSelector
            options={blogCategories}
            value={category}
            setValue={setCategory}
            textShadowUnselected="textFogPurpleXxs"
          />
        </FlexFull>

        <FlexFull className="lg:p-2vh">
          <Wrap className="w-full justify-evenly">
            {blogsByDate.map((blog, index) => (
              <BlogIndexCard blog={blog} key={index} index={index} />
            ))}
          </Wrap>
        </FlexFull>
      </VStackFull>
    </>
  );
}
