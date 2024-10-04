import { BlogPost } from "../blogsArray";

import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import React from "react";
import PDFMenuExample from "../individual-blog-components/pdfBlogComponents/pdfMenuExample";
import BlogPDFRenderingMenuExample from "../individual-blog-components/pdfBlogComponents/pdfBlogMenu";
import CodeModal from "../../blog-components/codeModal";

export const ReactPDFRendering: BlogPost =
  // REACT PDF
  {
    id: "56",
    date: "2024-07-29",
    title: "Dynamic PDF Rendering in Remix and React",
    slug: "react-remix-to-pdf-using-react-pdf",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["PDF", "React-PDF", "Document Generation"],
    categories: ["Programming", "UX / UI & Frontend Design", "Apps"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/whispering-beans-pdf-shot.webp",
    summary:
      "Learn how to seamlessly render PDF documents in Remix and React applications using react-pdf in this comprehensive guide covering everything from basic setup to advanced techniques and featuring a practical and detailed example.",
    paragraphs: [
      <React.Fragment key="react-remix-to-pdf-using-react-pdf">
        <p>
          In today's digital landscape, the ability to seamlessly integrate and
          display various document formats within web applications has become
          increasingly crucial. Among these formats, PDF (Portable Document
          Format) stands out as a universal standard for document sharing and
          presentation. For web developers working with modern frameworks like
          Remix and React, the challenge of rendering PDFs efficiently and
          effectively is one that cannot be ignored.
        </p>

        <p>
          Enter react-pdf, a powerful library that bridges the gap between PDF
          documents and React applications. This tool opens up a world of
          possibilities for developers looking to enhance their web applications
          with robust PDF rendering capabilities. React-pdf is an invaluable
          tool for projects that range anywhere from building a document
          management system to creating an e-commerce platform with downloadable
          invoices, or even an educational site with course materials.
          Understanding the numerous benefits of working with react-pdf can
          significantly elevate your application's functionality and user
          experience.
        </p>

        <p>
          In this article, we'll dive deep into the world of PDF rendering in
          Remix and React applications using react-pdf. We'll explore why PDF
          rendering matters, especially when working with data-driven
          applications that pull information from databases. From setting up
          react-pdf in your project to implementing advanced features and
          optimizing performance, this guide will equip you with the knowledge
          and tools you need to master PDF rendering in your web applications.
        </p>

        <h4>
          By the end of this journey, you'll have a comprehensive understanding
          of:
        </h4>
        <ul>
          <li>The importance of PDF rendering in modern web applications</li>
          <li>How to set up and use react-pdf in a Remix/React environment</li>
          <li>Techniques for rendering PDFs from database data</li>
          <li>Advanced features and best practices for optimal performance</li>
          <li>
            Real-world use cases and examples to inspire your own projects
          </li>
        </ul>

        <hr />

        <h3>Why PDF Rendering Matters</h3>
        <p>
          In the ever-evolving landscape of web development, the ability to
          render PDFs directly within web applications has become more than just
          a nice-to-have feature—it's increasingly essential. Let's explore why
          mastering PDF rendering, particularly in the context of Remix and
          React applications, is a crucial skill for modern developers.
        </p>

        <h4>1. Enhanced User Experience</h4>
        <p>
          PDF rendering capabilities allow users to view documents without
          leaving your application. This seamless experience keeps users engaged
          and reduces the friction often associated with downloading and opening
          files externally. For businesses, this means increased user retention
          and satisfaction.
        </p>

        <h4>2. Data Visualization from Databases</h4>
        <p>
          Many applications pull data from databases to generate reports,
          invoices, or other documents. The ability to render this data as PDFs
          on-the-fly offers several advantages:
        </p>
        <ul>
          <li>
            <strong>Real-time updates:</strong> Documents reflect the most
            current data available.
          </li>
          <li>
            <strong>Customization:</strong> PDFs can be tailored to individual
            users or specific contexts.
          </li>
          <li>
            <strong>Reduced storage needs:</strong> Instead of storing
            pre-generated PDFs, you can create them on demand.
          </li>
        </ul>

        <h4>3. Compliance and Record-Keeping</h4>
        <p>
          In industries with strict regulatory requirements, such as finance,
          healthcare, or legal services, PDF rendering is crucial for
          maintaining accurate, tamper-proof records. Being able to generate and
          display these documents within your application ensures compliance
          while providing easy access to important information.
        </p>

        <h4>4. Cross-Platform Consistency</h4>
        <p>
          PDFs maintain their formatting across different devices and operating
          systems. By rendering PDFs in your web application, you ensure that
          your content looks exactly as intended, regardless of how or where
          it's accessed.
        </p>

        <h4>5. Print-Ready Documents</h4>
        <p>
          PDFs are the go-to format for print-ready documents. Integrating PDF
          rendering in your application allows users to generate high-quality,
          print-ready documents directly from their browser, enhancing the
          functionality of your application.
        </p>

        <h4>6. Legacy System Integration</h4>
        <p>
          Many organizations still rely on legacy systems that output data in
          PDF format. The ability to render these PDFs within modern web
          applications bridges the gap between old and new technologies,
          facilitating smoother transitions and integrations.
        </p>

        <h4>7. Improved Security</h4>
        <p>
          By rendering PDFs within your application, you have greater control
          over document access and distribution. This is particularly important
          for sensitive documents, as you can implement additional security
          measures such as watermarking, encryption, or access controls.
        </p>

        <h4>8. Offline Accessibility</h4>
        <p>
          With technologies like Progressive Web Apps (PWAs), rendering PDFs
          in-browser opens up possibilities for offline access to important
          documents, enhancing the versatility of your application.
        </p>

        <p>
          The ability to render PDFs in web applications, especially those built
          with modern frameworks like Remix and React, is a powerful skill that
          addresses numerous real-world needs. From improving user experience
          and data visualization to ensuring compliance and security, PDF
          rendering capabilities can significantly enhance the functionality and
          value of your web applications. As we delve deeper into react-pdf in
          the following sections, keep these benefits in mind—they underscore
          the importance of mastering this technology in your development
          toolkit.
        </p>

        <hr />

        <h3>What is react-pdf?</h3>
        <p>
          react-pdf is a powerful, open-source library that allows developers to
          render PDF files in React applications. It's built on top of PDF.js, a
          powerful PDF renderer developed by Mozilla, which ensures robust and
          consistent PDF rendering across different browsers and devices.
        </p>
        <p>
          The library provides a set of React components that make it easy to
          display PDF documents, handle user interactions, and customize the
          viewing experience. React-pdf offers the flexibility and functionality
          to meet your needs for projects that range from showing a single-page
          PDF to navigating through a multi-page document.
        </p>

        <h4>Key Features and Benefits</h4>
        <ul>
          <li>
            <strong>Easy Integration:</strong> react-pdf is designed to work
            seamlessly with React applications, including those built with
            Remix. Its component-based architecture aligns perfectly with
            React's philosophy, making it intuitive for React developers to use.
          </li>
          <li>
            <strong>Customizable UI:</strong> The library provides basic UI
            components out of the box, but also allows for extensive
            customization. You can style the PDF viewer to match your
            application's design and add custom controls as needed.
          </li>
          <li>
            <strong>Page Navigation:</strong> react-pdf makes it simple to
            implement page navigation in multi-page documents, including jumping
            to specific pages, zooming, and rotating views.
          </li>
          <li>
            <strong>Text Layer:</strong> The library can render a text layer
            over the PDF, enabling text selection, copy-paste functionality, and
            search capabilities within the document.
          </li>
          <li>
            <strong>Annotation Support:</strong> react-pdf supports rendering of
            standard PDF annotations, enhancing the interactivity of your
            documents.
          </li>
          <li>
            <strong>Thumbnail Generation:</strong> You can easily generate
            thumbnails for PDF pages, which is useful for creating document
            previews or navigation aids.
          </li>
          <li>
            <strong>Efficient Rendering:</strong> The library implements
            efficient rendering techniques, loading pages on-demand to optimize
            performance, especially for large documents.
          </li>
          <li>
            <strong>Cross-Browser Compatibility:</strong> Built on PDF.js,
            react-pdf ensures consistent rendering across different browsers and
            platforms.
          </li>
          <li>
            <strong>Form Support:</strong> It provides support for interactive
            PDF forms, allowing users to fill out and interact with form fields
            directly in the browser.
          </li>
          <li>
            <strong>Password Protection:</strong> react-pdf can handle
            password-protected PDFs, prompting users for passwords when
            necessary.
          </li>
        </ul>

        <hr />

        <h3>Why Choose react-pdf?</h3>
        <p>
          While there are other PDF rendering solutions available, react-pdf
          stands out for several reasons:
        </p>
        <ul>
          <li>
            <strong>React-Centric:</strong> It's built specifically for React,
            ensuring seamless integration with your existing React and Remix
            projects.
          </li>
          <li>
            <strong>Active Development:</strong> The library is actively
            maintained and regularly updated, ensuring compatibility with the
            latest React versions and fixing any emerging issues.
          </li>
          <li>
            <strong>Community Support:</strong> With a large and active
            community, you can find plenty of resources, examples, and help when
            working with react-pdf.
          </li>
          <li>
            <strong>Performance:</strong> It's designed with performance in
            mind, making it suitable for applications that need to handle large
            or numerous PDF files.
          </li>
        </ul>

        <hr />

        <h3>Practical Example: Building a Dynamic Cafe Menu with react-pdf</h3>
        <p>
          Now that we've covered the basics of react-pdf and its importance in
          modern web development, let's dive into a real-world example that will
          showcase the power and flexibility of this library. In this section,
          we'll walk through the process of creating a dynamic cafe menu using
          react-pdf in a Remix/React application.
        </p>
        <p>
          Imagine you're developing a website for a trendy cafe that frequently
          updates its menu based on seasonal ingredients and chef's specials.
          Instead of manually updating a PDF menu and uploading it to the
          website, we'll create a system that generates a beautifully formatted
          PDF menu on the fly, using data from a database.
        </p>

        <h4>
          This example will demonstrate several key aspects of working with
          react-pdf:
        </h4>
        <ul>
          <li>Setting up react-pdf in a Remix/React project</li>
          <li>Rendering our menu data for a web application</li>
          <li>
            Designing a visually appealing menu layout using react-pdf
            components
          </li>
          <li>Dynamically populating the menu with fetched data</li>
          <li>Optimizing the PDF for both web viewing and printing</li>
        </ul>

        <BlogPDFRenderingMenuExample />
        <br />
        <PDFMenuExample />

        <hr />

        <h3>Simplifying PDF Styling with Custom Components</h3>
        <p>
          While react-pdf provides a powerful foundation for creating PDFs in
          React applications, working with complex layouts can sometimes be
          challenging. To address this, I've developed a set of custom
          components that simplify the process of creating well-structured and
          easily styled PDF documents. Let's explore how these components work
          and how they can be used to create our cafe menu.
        </p>

        <h4>Custom PDF Building Blocks</h4>
        <p>
          The core of our simplified PDF creation process lies in a set of
          custom components that mirror common layout structures in web
          development. These include:
        </p>

        <ul>
          <li>
            PDFVStack & PDFVStackFull: Vertical stacks for organizing content
          </li>
          <CodeModal
            title="Vertical Flex Stacks"
            code={`export function PDFVStack({
    children,
    gap,
    width,
    style,
  }: {
    children: React.ReactNode;
    gap?: string;
    width?: string;
    style?: React.CSSProperties;
  }) {
    return (
      <div
  style={{
    width: width,
    display: "flex",
    flexDirection: "column",
    gap: gap,
    ...style,
  }}
      >
  {children}
      </div>
    );
  }
  
  export function PDFVStackFull({
    children,
    gap,
    style,
  }: {
    children: React.ReactNode;
    gap?: string;
    style?: React.CSSProperties;
  }) {
    return (
      <div
  style={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: gap,
    ...style,
  }}
      >
  {children}
      </div>
    );
  }`}
          />
        </ul>

        <ul>
          <li>
            PDFHStack & PDFHStackFull: Horizontal stacks for side-by-side
            layouts
          </li>
          <CodeModal
            title="Horizontal Flex Stacks"
            code={`export function PDFHStack({
  children,
  style,
  width,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: width,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFHStackFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
}`}
          />
        </ul>

        <ul>
          <li>PDFFlex & PDFFlexFull: Flex containers for responsive layouts</li>
          <CodeModal
            title="Flex Containers"
            code={`export function PDFFlexFull({
  children,
  style,
}: {
  children: React.ReactNode;
  gap?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFFlex({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}`}
          />
        </ul>

        <ul>
          <li>PDFCenter: A component for centering content</li>
          <CodeModal
            title="Centering Content"
            code={`export function PDFCenter({
  width,
  height,
  children,
  style,
}: {
  width?: string;
  height?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}`}
          />
        </ul>

        <ul>
          <li>PDFDivider: A simple divider line for visual separation</li>
          <CodeModal
            title="Divider Line"
            code={`export function PDFDivider({
  width = "100%",
  height = "1px",
  color = "black",
  marginBottom = "7px",
  marginTop = "7px",
  style,
}: {
  width?: string;
  height?: string;
  color?: string;
  marginBottom?: string;
  marginTop?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: width,
        height: height,
        backgroundColor: color,
        marginBottom: marginBottom,
        marginTop: marginTop,
        ...style,
      }}
    />
  );
}`}
          />
        </ul>

        <h3>The PDFContainer Component</h3>
        <ul>
          <li>
            <strong>Font Registration:</strong> We register custom fonts to
            ensure consistent typography across the PDF.
          </li>
          <pre>
            <code>{`Font.register({ family: "Roboto", src: "/fonts/Roboto-Regular.ttf" });`}</code>
          </pre>

          <li>
            <strong>Page Styling:</strong> We define a default style for our PDF
            pages.
          </li>
          <pre>
            <code>{`const styles = StyleSheet.create({ page: { flexDirection: "column", backgroundColor: "#fae4b4", fontFamily: "Roboto", padding: "0.7in" } });`}</code>
          </pre>

          <li>
            <strong>PDF Generation and Download:</strong> The component includes
            a function to generate and download the PDF.
          </li>
          <pre>
            <code>{`const downloadPDF = async () => { const doc = 
  ( <Document 
    author="Dark Violet AI" 
    creator="Dark Violet AI">
      <Page size="LETTER" style={styles.page}>
        <PDFInnerContainer>{children}</PDFInnerContainer>
      </Page></Document> ); 
    const asBlob = await pdf(doc).toBlob(); 
    fileSaver.saveAs(asBlob, fileName); };`}</code>
          </pre>

          <li>
            <strong>Download Button:</strong> The component renders a button
            that triggers the PDF download when clicked.
          </li>
        </ul>

        <hr />

        <h3>Final Thoughts</h3>
        <p>
          As we've explored throughout this article, integrating PDF rendering
          capabilities into your Remix and React applications using react-pdf
          opens up a world of possibilities for enhanced user experiences and
          streamlined document management.
        </p>
        <p>
          Our journey through the practical implementation of a dynamic cafe
          menu demonstrated how react-pdf can be used to create interactive,
          data-driven PDF documents.
        </p>
        <p>
          As web applications continue to evolve, the ability to seamlessly
          integrate PDF functionality will only grow in importance. Whether
          you're dealing with invoices, reports, educational materials, or any
          other document-centric content, mastering react-pdf equips you with a
          valuable skill set that enhances the capabilities of your Remix and
          React applications.
        </p>
        <p>Happy coding, and may your PDFs always render flawlessly!</p>
      </React.Fragment>,
    ],
  };
