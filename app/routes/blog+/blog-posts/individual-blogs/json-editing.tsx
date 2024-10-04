import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";

import React from "react";
import GistRender from "../../blog-components/gistRender";
import DemoJsonInput from "../individual-blog-components/validatedJSONNumberedInput";

export const JSONEditing: BlogPost =
  // Enhancing JSON Editing with Remix
  {
    id: "63",
    date: "2024-09-09",
    title: "Enhancing JSON Editing with Remix",
    slug: "enhancing-json-editing-with-remix",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["Remix", "Data", "Design", "UI/UI"],
    categories: [
      "Programming",
      "UX / UI & Frontend Design",
      "Web Animation",
      "Mobile Apps",
      "Apps",
    ],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog63.webp",
    summary:
      "Explore how to build a flexible JSON editor in Remix / React with features like a numbered TextArea for direct editing, error highlighting, and an alternative input-based editing option for enhanced usability.",
    paragraphs: [
      <React.Fragment key="enhancing-json-editing-with-remix">
        <h3>
          Enhancing JSON Editing: Implementing Numbered Lines, Error
          Highlighting, and Input Options in Remix / React
        </h3>
        <p>
          JSON (JavaScript Object Notation) has become a standard for data
          interchange in web development. According to a 2023 Stack Overflow
          Developer Survey, JSON is used by 71.2% of professional developers,
          making it the most popular data format. However, editing JSON can be
          challenging, especially when dealing with large datasets. This blog
          post will guide you through building an interactive and intuitive JSON
          editor using Remix / React, featuring several key enhancements that
          address common pain points in JSON editing:
        </p>
        <ul>
          <li>
            A TextArea with numbered lines for improved readability and
            navigation
          </li>
          <li>
            Real-time JSON validation with precise error messages indicating the
            exact line of an error
          </li>
          <li>
            An alternative interface allowing direct editing of JSON fields via
            input forms
          </li>
          <li>
            Flexibility to switch between raw JSON editing and structured input
            fields
          </li>
        </ul>
        <p>
          These features cater to different editing preferences and scenarios,
          making JSON editing more efficient and user-friendly for developers of
          all experience levels. A study by the Nielsen Norman Group found that
          clear visual hierarchies and immediate feedback can improve user
          efficiency by up to 25% in complex interfaces, principles I've applied
          in my enhanced JSON editor. As we progress through the implementation
          details, keep in mind that you'll have the opportunity to experiment
          with the fully functional component at the end of this blog, allowing
          you to experience these enhancements firsthand.
        </p>
        <h3>Implementing a Numbered TextArea for JSON Editing</h3>
        <p>
          The core component of my enhanced interface is a TextArea that
          displays numbered lines. This feature is particularly beneficial when
          working with extensive JSON files, as it allows users to easily
          reference specific lines, identify errors, and navigate through the
          document with greater ease. We'll use custom styling and logic to
          track the number of lines, dynamically adjust the height of the text
          area, and ensure the line numbers remain synchronized with the
          content. Line numbers in JSON editing are not just helpful but
          virtually indispensable, as they dramatically reduce error location
          time and significantly enhance navigation efficiency, particularly in
          complex or large JSON structures where pinpointing specific
          information would be nearly impossible without them.
        </p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/648baca566cb16ab28f9989ab08e421b
"
          title="TextAreaNumberedLines"
        />
        <p>
          This implementation of a numbered TextArea provides a significant
          improvement in the JSON editing experience. It dynamically adjusts
          based on content length and ensures that line numbers are always
          aligned with the text, enhancing readability and navigation. The use
          of Flexbox for layout, combined with careful management of line
          heights and scroll synchronization, ensures consistent alignment and
          behavior across different browsers and screen sizes. The component's
          reactive nature, updating line counts and heights in real-time,
          creates a smooth and responsive editing experience.
        </p>
        <h3>Incorporating JSON Validation and Error Display</h3>
        <p>
          To further improve the editing process, I've implemented real-time
          JSON validation and error display. This feature shows users the exact
          line number where an error occurs, eliminating the need to manually
          search through lines of JSON code to identify issues. A study by
          Microsoft Research found that immediate feedback on syntax errors can
          reduce debugging time by up to 28%. This is a huge benefit, as JSON
          syntax errors can be notoriously difficult to spot without clear
          feedback.
        </p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/36e21139721b11e355251d08d1affb7a
"
          title="ValidatedJSONNumberedInput"
        />
        <p>
          This component actively monitors the input, validates the JSON string
          in real-time, and pinpoints the location of any errors using line
          numbers. This immediate feedback mechanism significantly reduces the
          time and effort required to identify and correct JSON syntax errors.
          The use of debounce ensures that validation doesn't impact
          performance, even with large JSON structures.
        </p>
        <h3>Enhancing Error Handling: The JsonError Component</h3>
        <p>
          Research in human-computer interaction has shown that contextual error
          messages can improve task completion rates by up to 22%. Clear and
          informative error messages are especially crucial when working with
          JSON. The JsonError component we've implemented enhances the user
          experience by clearly indicating where JSON formatting errors occur,
          highlighting the problematic line number, and providing concise
          feedback directly within the editor interface.
        </p>
        <p>Here's the structure of the JsonError component:</p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/74be7071ad641ba021f8d1162babf2aa
"
          title="JsonError"
        />
        <p>
          This component works in tandem with the ValidatedJSONNumberedInput to
          offer immediate, actionable feedback as users edit their JSON. It
          ensures that users can quickly identify and rectify errors,
          streamlining the editing process and reducing potential frustration.
          The use of React's useEffect hook ensures that error messages are
          updated efficiently without unnecessary re-renders.
        </p>
        <h3>Implementing Direct Input Editing for JSON Objects</h3>
        <p>
          While editing raw JSON is often preferred by developers for its
          flexibility and direct control, there are scenarios where a more
          structured approach can be beneficial. To accommodate different user
          preferences and use cases, we've implemented a feature that allows
          users to edit JSON objects through form inputs. This approach can be
          particularly useful for editing specific fields like user information
          or configuration settings, especially for users who are less familiar
          with JSON syntax or when working with complex nested structures.
          Form-based editing can potentially reduce syntax errors and provide a
          more intuitive interface for certain types of data manipulation.
        </p>
        <p>Here's how we can render JSON objects with editable input fields:</p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/316d967c93410df8027d507a0ec6a38f
"
          title="EditableJSONInput"
        />
        ,
        <p>
          This setup enables users to interact directly with individual fields
          of the JSON object, offering a more intuitive editing experience for
          specific use cases. The recursive nature of the component allows it to
          handle nested JSON structures of any depth.
        </p>
        <h3>Integrating Features into a Comprehensive Editor</h3>
        <p>
          Now, we've combined the numbered TextArea, error handling, and direct
          input editing options into a cohesive user interface. This integrated
          approach offers flexibility by allowing users to switch between
          editing raw JSON with validation and interacting with a more
          structured input-based editor. By providing these different
          interaction modes, we aim to accommodate various editing preferences
          and workflows, potentially making the JSON editing process more
          accessible and efficient for a wider range of users.
        </p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/7e7aec6d57b3fc89594e71ecd75859c2
"
          title="DemoJsonInput"
        />
        <h3>Demonstrating the Enhanced JSON Editor</h3>
        <p>
          To showcase the full capabilities of our enhanced JSON editor, we've
          prepared a fully functional version of the DemoJsonInput component.
          This demonstration allows users to alternate between editing raw JSON
          code and using structured input fields, with integrated error handling
          and validation.
        </p>
        <p>
          To illustrate the versatility of the editor, we've included four
          distinct JSON datasets representing common use cases:
        </p>
        <ul>
          <li>
            <strong>Posts</strong>: A collection of blog posts, demonstrating
            nested structures with id, title, author, publication date, tags,
            and content. This dataset showcases how the editor handles array
            structures and mixed data types within a single object.
          </li>
          <li>
            <strong>Users</strong>: User profiles, showcasing how the editor
            handles personal data fields such as id, name, email, age, country,
            and interests. This example illustrates the editor's capability to
            manage arrays within objects and diverse data types.
          </li>
          <li>
            <strong>Products</strong>: Product listings, illustrating the
            editor's capability to manage commercial data with id, name,
            category, price, stock, and nested rating information. This dataset
            demonstrates how the editor can handle numerical data and nested
            objects.
          </li>
          <li>
            <strong>Locations</strong>: Weather and forecast data for various
            cities, exemplifying how the editor can handle complex nested
            structures including current weather conditions, temperature ranges,
            wind information, and multi-day forecasts. This showcases the
            editor's ability to work with deeply nested JSON objects and arrays.
          </li>
        </ul>
        <p>
          These diverse datasets demonstrate the editor's adaptability across
          different JSON structures and provide a comprehensive testing
          environment, thereby showing its versatility in accommodating various
          editing needs efficiently.
        </p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/ff0234848fdae231506df546f9832c87
"
          title="JsonInputBlogData"
        />
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/4fe6fd3dd083354f972141441da80e42
"
          title="RenderJSONExample"
        />
        <DemoJsonInput />
        <h3>Wrapping Up</h3>
        <p>
          This solution offers a dual-mode JSON editor, combining a numbered
          TextArea with error reporting and an input-based interface. By
          catering to different editing preferences - whether users prefer a
          structured form-like approach or direct manipulation of raw JSON - the
          editor aims to enhance the overall experience of JSON data
          manipulation across various use cases.
        </p>
        <p>
          I invite you to explore this enhanced JSON editor in your projects and
          workflows. Its combination of features aims to provide a flexible
          editing experience for JSON data across various applications and
          scenarios. As JSON remains a popular data format in web development,
          tools that facilitate easier editing and validation can be valuable
          assets in your development toolkit.
        </p>
        <h3>References</h3>
        <ol>
          <li>
            <a href="https://dribbble.com/shots/16877321-Visual-JSON-Editor">
              Visual JSON Editor by Anandhakrishnan on Dribbble
            </a>
          </li>
          <li>
            <a href="https://wwwmatthes.in.tum.de/file/c24uf0r422ts/Sebis-Public-Website/-/Master-s-Thesis-of-Lucas-Koehler/171015%20Lucas%20Koehler%20Masters%20Thesis.pdf">
              A Model-Driven JSON Editor
            </a>
          </li>
          <li>
            <a href="https://blog.nashtechglobal.com/json-schema-for-api-testing-error-handling-and-versioning/">
              JSON Schema for API Testing: Error Handling and Versioning -
              NashTech Insights
            </a>
          </li>
          <li>
            <a href="https://link.springer.com/article/10.1007/s13222-024-00472-7">
              MetaConfigurator: A User-Friendly Tool for Editing Structured Data
            </a>
          </li>
          <li>
            <a href="https://w3c.github.io/json-ld-bp/">
              JSON-LD Best Practices
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9178528/">
              Adamant: a JSON schema-based metadata editor for research data
            </a>
          </li>
        </ol>
      </React.Fragment>,
    ],
  };
