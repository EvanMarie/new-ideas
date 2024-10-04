import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";
import { ImageWithZoom } from "../../blog-components/imageWithZoom";

export const ECommerceDoneRight: BlogPost =
  // E-commerce Done Right
  {
    id: "26",
    date: "2023-10-09",
    title: "E-commerce Done Right",
    slug: "e-commerce-done-right",
    author: "Evan Marie Carr",
    categories: ["UX / UI & Frontend Design", "Programming"],
    avatar: EvanAvatar,
    tags: ["Remix", "e-commerce", "AppDev"],
    image:
      "http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar6.png",
    summary:
      "Explore the creation of an e-commerce application using Remix, Stripe, Sanity, and Tailwind CSS, highlighting how each technology contributes to an efficient, secure, and visually appealing shopping experience.",
    paragraphs: [
      <React.Fragment key="e-commerce-done-right">
        <p>
          In the bustling world of e-commerce, creating a seamless and efficient
          shopping experience is paramount. My application, developed using
          Remix, Stripe, and Sanity, employs the unique strengths of these
          technologies to deliver a top-notch user experience.
        </p>
        <ImageWithZoom
          src="http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar2.png"
          alt="ecommerce image"
        />
        <ImageWithZoom
          src="https://www.evanmarie.com/content/images/size/w2000/2023/10/darkVioletBazaar5-1.png"
          alt="ecommerce image"
        />

        <p>
          Remix provides the framework for rapid loading and dynamic
          interactions, crucial for retaining customer interest and minimizing
          bounce rates. Stripe integrates smoothly within this setup, handling
          all payment transactions with its robust security features and ease of
          use, ensuring that customers can shop with confidence.
        </p>
        <ImageWithZoom
          src="http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar3.png"
          alt="ecommerce image"
        />
        <ImageWithZoom
          src="http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar4.png"
          alt="ecommerce image"
        />
        <p>
          To further enhance the backend capabilities, I incorporated Sanity as
          the content management system. This choice was driven by Sanity's
          flexible data schema, which allows for highly customized product
          listings and real-time updates without a hitch. The integration of
          Tailwind CSS ensured that the website is not only functional but also
          aesthetically pleasing, providing a responsive and modern design that
          adapts to various devices and screen sizes.
        </p>
        <ImageWithZoom
          src="http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar5.png"
          alt="ecommerce image"
        />
        <ImageWithZoom
          src="http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar6.png"
          alt="ecommerce image"
        />
        <p>
          From the feedback gathered, users have appreciated the intuitive
          layout and the swift, secure checkout process. The application has
          seen a notable improvement in transaction times and a decrease in cart
          abandonment rates, underscoring the effectiveness of the chosen
          technologies. These enhancements have significantly boosted user
          satisfaction and loyalty, proving that the right tools, when used
          effectively, can transform the e-commerce landscape.
        </p>
        <ImageWithZoom
          src="http://www.evanmarie.com/content/images/2023/10/darkVioletBazaar7.png"
          alt="ecommerce image"
        />
      </React.Fragment>,
    ],
  };
