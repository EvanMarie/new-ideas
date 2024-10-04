import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";
import CodeModal from "../../blog-components/codeModal";
import { ImageWithZoom } from "../../blog-components/imageWithZoom";

export const FormattingComplexChatBotResponses: BlogPost =
  // MARKDOWN CHATBOT RESPONSES
  {
    id: "57",
    date: "2024-07-30",
    title: "Formatting Complex ChatBot Responses in Remix",
    slug: "formatting-complex-chatbot-responses-in-remix",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["Chatbots", "Markdown", "AI", "Remix"],
    categories: [
      "Programming",
      "Artificial Intelligence",
      "UX / UI & Frontend Design",
      "Web Animation",
      "Apps",
    ],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/mardownMainImage.webp",
    summary:
      "Rendering complex chatbot responses, including mathematical equations, code snippets, and custom-styled text utilizing ReactMarkdown, RemarkMath, and rehypeKatex in a Remix application.",
    paragraphs: [
      <React.Fragment key="formatting-complex-chatbot-responses-in-remix">
        <p>
          In an era where artificial intelligence and natural language
          processing are rapidly advancing, chatbots have evolved from simple
          question-answering tools to sophisticated conversational agents
          capable of discussing complex topics. As these AI-powered assistants
          tackle increasingly diverse and intricate subjects, the need for rich,
          formatted responses has become paramount.
        </p>
        <p>
          Imagine a chatbot discussing advanced physics concepts, explaining
          intricate mathematical proofs, or providing code snippets for a
          programming tutorial. Traditional plain text responses fall short in
          these scenarios. Users need to see properly formatted equations and
          well-structured content to truly grasp the information being conveyed.
        </p>
        <p>
          This is where the challenge of rendering complex responses comes into
          play. Modern chatbots require the ability to dynamically generate and
          display content with:
        </p>
        <ul>
          <li>Mathematical equations and symbols</li>
          <li>Formatted code snippets</li>
          <li>Rich text formatting (headings, lists, bold, italic, etc.)</li>
          <li>Custom styling to match the application's design</li>
        </ul>
        <p>
          In this article, we'll explore a powerful custom Remix component that
          utilizes the capabilities of ReactMarkdown, RemarkMath, and
          rehypeKatex to address these challenges head-on.
        </p>
        <p>
          Our focus will be on the <strong>CustomMarkdownRenderer</strong>{" "}
          component – a flexible and feature-rich solution that I designed to
          transform raw markdown and LaTeX input into beautifully formatted,
          interactive content. This component not only handles standard markdown
          syntax but also processes mathematical notations, automatically
          converts certain expressions to Unicode, and applies custom styling to
          enhance readability and user experience.
        </p>
        <h3>By the end of this deep dive, you'll understand:</h3>
        <ul>
          <li>
            How ReactMarkdown serves as the foundation for rendering complex
            markdown content
          </li>
          <li>
            The role of RemarkMath in parsing mathematical notations within
            markdown
          </li>
          <li>
            How rehypeKatex brings LaTeX rendering capabilities to our component
          </li>
          <li>
            The intricacies of preprocessing content to handle various edge
            cases and improve rendering
          </li>
          <li>
            Techniques for customizing the rendering and styling of different
            markdown elements
          </li>
        </ul>
        <p>
          So, let's get to it and start this journey to unlock the full
          potential of formatted chatbot responses and elevate the user
          experience in your React applications.
        </p>
        <h2>Component Overview</h2>
        <p>
          My <strong>CustomMarkdownRenderer</strong> is a Remix/React component
          designed to take Markdown content as input and render it with advanced
          formatting capabilities. Here are the key features:
        </p>
        <ul>
          <li>Markdown rendering with ReactMarkdown</li>
          <li>
            Mathematical equation support using RemarkMath and rehypeKatex
          </li>
          <li>Custom styling for various Markdown elements</li>
          <li>Unicode conversion for certain mathematical notations</li>
        </ul>
        <h2>Key Dependencies</h2>
        <p>The component relies on several important libraries:</p>
        <ul>
          <li>
            <strong>ReactMarkdown:</strong> The core library for rendering
            Markdown content in React
          </li>
          <li>
            <strong>remark-math:</strong> A plugin for parsing mathematical
            notation in Markdown
          </li>
          <li>
            <strong>rehype-katex:</strong> A plugin for rendering mathematical
            notation using KaTeX
          </li>
          <li>
            <strong>KaTeX:</strong> A fast math typesetting library for the web
          </li>
        </ul>
        <p>
          These features work in concert to ensure comprehensive coverage of
          various content types, with a particular emphasis on mathematical
          expressions. ReactMarkdown forms the foundation, handling standard
          Markdown syntax with ease. For mathematical content, we employ a
          two-pronged approach: RemarkMath and rehypeKatex tackle complex LaTeX
          equations, rendering them beautifully inline or as block elements,
          while our custom Unicode conversion functions handle simpler notations
          like superscripts and Greek letters.
        </p>
        <p>
          This dual strategy ensures that whether a chatbot response includes a
          simple exponent or a complex integral, it's rendered accurately and
          legibly. The custom styling then steps in to ensure that all elements,
          from paragraphs to code blocks, are visually consistent and appealing.
          By layering these methods, we've created a robust system capable of
          handling the diverse range of content that modern AI-powered chatbots
          might generate, from simple formatted text to intricate mathematical
          proofs.
        </p>
        <h2>Preprocessing Content</h2>
        <p>
          One of the most interesting aspects of this component is its content
          preprocessing. The <strong>preprocessContent</strong> function
          performs several important tasks:
        </p>
        <ul>
          <li>
            Preserves LaTeX expressions for proper processing by rehype-katex
          </li>
          <li>
            Converts certain LaTeX-style math notations to inline math format
          </li>
          <li>
            Converts non-LaTeX math notations and exponents to Unicode
            characters
          </li>
        </ul>
        <p>
          Let's look at the <strong>convertMathToUnicode</strong> function:
        </p>
        <pre>
          <code>
            {`const convertMathToUnicode = (text: string): string => {
  return text
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)")
    .replace(/\\sqrt\{([^}]+)\}/g, "√($1)")
    .replace(/\\pm/g, "±")
    .replace(/\\^(\{[^}]+\}|\d+)/g, (_, p1) => {
      // Convert exponents to Unicode superscripts
    })
    .replace(/\\([a-zA-Z]+)/g, (match, p1) => {
      // Convert Greek letter commands to Unicode
    });
};`}
          </code>
        </pre>
        <p>This function handles various mathematical notations:</p>
        <ul>
          <li>Fractions are converted to a more readable inline format</li>
          <li>Square roots are replaced with the √ symbol</li>
          <li>The plus-minus symbol (±) is properly rendered</li>
          <li>Exponents are converted to Unicode superscripts</li>
          <li>Greek letters are replaced with their Unicode equivalents</li>
        </ul>
        <h2>Custom Rendering</h2>
        <p>
          The component uses ReactMarkdown's <strong>components</strong> prop to
          customize the rendering of various Markdown elements. For example:
        </p>
        <pre>
          <code>
            {`components={{
  p: ({ node, children }) => {
    return <p className="custom-paragraph">{children}</p>;
  },
  h1: ({ node, ...props }) => (
    <h1 className="custom-heading1" {...props} />
  ),
  // ... other element customizations
}}`}
          </code>
        </pre>
        <p>
          This allows for fine-grained control over the styling and structure of
          the rendered Markdown.
        </p>
        <h2>Mathematical Equations</h2>
        <p>
          To handle mathematical equations, the component uses RemarkMath and
          rehypeKatex. The <strong>math</strong> prop in the{" "}
          <strong>CustomMarkdownRenderer</strong> component triggers the
          processing of LaTeX expressions:
        </p>
        <pre>
          <code>
            {`const CustomMarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {preprocessContent(content)}
    </ReactMarkdown>
  );
};`}
          </code>
        </pre>
        <p>
          This setup ensures that mathematical expressions are correctly parsed
          and rendered using KaTeX.
        </p>
        <h2>Styling and Theming</h2>
        <p>
          The component's styling is handled through CSS classes and global
          styles. By applying custom classes to different Markdown elements, we
          can control their appearance and layout. For example:
        </p>
        <pre>
          <code>
            {`.markdown-content {
  font-family: 'Arial', sans-serif;
}
.custom-paragraph {
  margin: 0.7vh 0;
}
.custom-heading1 {
  font-size: 3vh;
  padding-top: 2.5vh;
  font-weight: semibold;
  text-shadow: 0.1vh 0.1vh 0.2vh #000;
}
// ... other styles`}
          </code>
        </pre>
        <p>
          These styles use viewport height (vh) units for responsive sizing and
          include subtle effects like text shadows for headings.
        </p>
        <h2>See it in action!</h2>
        <p>
          Now that we've explored the inner workings of the{" "}
          <strong>CustomMarkdownRenderer</strong> component, you might be
          wondering how all these pieces come together in practice. Our
          component's power lies in its ability to seamlessly combine
          ReactMarkdown's flexibility, the mathematical precision of typesetting
          libraries, and our custom preprocessing logic. This synergy creates a
          robust solution capable of handling a wide range of formatting
          challenges, from simple text styling to complex equations and code
          snippets.
        </p>
        <p>
          But as any developer knows, the proof is in the implementation. So,
          let's move from theory to practice and see this component in action!
          Below, you'll find the complete code for the{" "}
          <strong>CustomMarkdownRenderer</strong>, ready to be integrated into
          your React application. This example will demonstrate how our
          component transforms raw markdown input into beautifully formatted,
          interactive content.
        </p>
        <pre>
          <code>{`npm i react-markdown
npm i rehype-katex
npm i remark-math`}</code>
        </pre>
        <CodeModal
          isCenterFull
          title="Custom Markdown Component"
          code={`import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

interface CustomMarkdownRendererProps {
  content: string;
}

const superscripts: { [key: string]: string } = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
  n: "ⁿ",
  i: "ⁱ",
};

const convertMathToUnicode = (text: string): string => {
  return text
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)")
    .replace(/\\sqrt\{([^}]+)\}/g, "√($1)")
    .replace(/\\pm/g, "±")
    .replace(/\^(\{[^}]+\}|\d+)/g, (_, p1) => {
      if (p1.startsWith("{") && p1.endsWith("}")) {
        p1 = p1.slice(1, -1);
      }
      return p1
        .split("")
        .map((char: any) => superscripts[char] || char)
        .join("");
    })
    .replace(/\\([a-zA-Z]+)/g, (match, p1) => {
      const greekLetters: { [key: string]: string } = {
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        theta: "θ",
        pi: "π",
        sigma: "σ",
        omega: "ω",
      };
      return greekLetters[p1] || match;
    })
    .replace(/\\\(/g, "(")
    .replace(/\\\)/g, ")")
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]");
};

const preprocessContent = (content: string): string => {
  return content
    .replace(/(\$\$[^$$]*\$\$)|(\$[^$]*\$)/g, (match) => {
      // Preserve LaTeX expressions for rehype-katex processing
      return match;
    })
    .replace(/\\\[(.*?)\\\]/gs, (_, p1) => \`$$\${p1}\$$\`)
    .replace(/\\\((.*?)\\\)/g, (_, p1) => \`\\(\${p1}\\\)\`)
    .replace(/(\\[^$\\]+)|(\^[0-9]+|{\^[0-9]+})/g, (match) => {
      // Convert exponents and non-LaTeX math to Unicode
      return convertMathToUnicode(match);
    });
};

const CustomMarkdownRenderer: React.FC<CustomMarkdownRendererProps> = ({
  content,
}) => {
  const processedContent = preprocessContent(content);

  return (
    <div className="markdown-content">
      <ReactMarkdown
        children={processedContent}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ node, children }) => {
            return <p className="custom-paragraph">{children}</p>;
          },
          h1: ({ node, ...props }) => (
            <h1 className="custom-heading1" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="custom-heading2" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="custom-heading3" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="custom-heading4" {...props} />
          ),
          ul: ({ node, ...props }) => <ul className="custom-list" {...props} />,
          ol: ({ node, ...props }) => (
            <ol className="custom-ordered-list" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="custom-list-item" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="custom-blockquote" {...props} />
          ),
          // @ts-ignore
          code: ({ node, inline, className, children, ...props }) => {
            if (!inline) {
              return (
                // @ts-ignore
                <pre className="custom-code-block" {...props}>
                  <code className={className}>{children}</code>
                </pre>
              );
            }
            return (
              <code className="custom-inline-code" {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      <style>{\`
 .markdown-content {
    font-family: 'Arial', sans-serif;
  }
  .custom-paragraph {
    margin: 0.7vh 0;
  }
  .custom-heading1 {
    font-size: 3vh;
    padding-top: 2.5vh;
    font-weight: semibold;
    text-shadow: 0.1vh 0.1vh 0.2vh #000;
  }
  .custom-heading2 {
    font-size: 2.6vh;
        font-weight: semibold;
    padding-top: 2.5vh;
        text-shadow: 0.1vh 0.1vh 0.2vh #000;
  }
  .custom-heading3 {
    font-size: 2.3vh;
        font-weight: semibold;
    padding-top: 2vh;
        text-shadow: 0.1vh 0.1vh 0.2vh #000;
  }
  .custom-heading4 {
    font-size: 2vh;
        font-weight: semibold;
    padding-top: 2vh;
        text-shadow: 0.1vh 0.1vh 0.2vh #000;
  }
  .custom-list,
  .custom-ordered-list {
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    padding-left: 1.5vh;
  }
  .custom-list-item {
    padding-left: 1.5vh;
  }
  .custom-blockquote {
    border-left: 0.5vh solid #ccc;
    padding-left: 0.7vh;
    color: #666;
    margin: 0.7vh 0;
  }
  .custom-code-block {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1vh;
    box-shadow: 0.1vh 0.1vh 0.2vh #000;
    text-wrap: wrap;
    font-size: 1.3vh;
    line-height: 1.6;
    padding: 0.7vh;
    border-radius: 1vh;
    width: fit-content;
    max-width: 100%;
    overflow-x: auto;
    margin: 0.7vh 0;
  }
  .custom-inline-code {
    background-color: #f0f0f0;
    padding: 0.2vh 0.4vh;
    border-radius: 0.4vh;
  }
  strong {
    font-weight: semibold;
    color: cyan;
    margin: 0;
    padding: 0;
    display: inline;
  }     \`}</style>
    </div>
  );
};

export default CustomMarkdownRenderer;`}
          buttonText="Custom Markdown Component"
        />
        ,<h3>Image 1: Initial User Query</h3>
        <p>
          This image shows the initial interaction between a user (identified as
          "Teacher") and the chatbot named "Lumi". The teacher's request to plan
          a lesson on the quadratic formula immediately highlights the need for
          sophisticated mathematical rendering.
        </p>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/chat-markdown-1.webp?quality=50"
          alt="Lesson and Curriculum Planning"
        />
        <h3>Image 2: Chatbot's Lesson Plan Response</h3>
        <p>
          In the following image, we see Lumi's detailed response to the
          teacher's request. The response showcases the chatbot's ability to
          generate structured, formatted content:
        </p>
        <ul>
          <li>
            It presents a well-organized "Lesson Plan" with clear headings and
            subheadings.
          </li>
          <li>
            The plan includes an objective, materials needed, and a lesson
            outline.
          </li>
          <li>
            Mathematical equations are rendered properly, demonstrating the
            component's ability to handle LaTeX or similar math notation (e.g.,
            ax² + bx + c = 0).
          </li>
        </ul>
        <p>
          This response illustrates how the custom markdown component can render
          complex, structured text with proper formatting and mathematical
          expressions.
        </p>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/chat-markdown-2.webp?quality=50"
          alt="Lesson and Curriculum Planning"
        />
        <h3>Image 3: Continuation of the Lesson Plan</h3>
        <p>
          The <strong>CustomMarkdownRenderer</strong> component demonstrates its
          versatility and power in rendering complex mathematical and textual
          content in the following image. It seamlessly integrates different
          formatting styles, from basic text to intricate mathematical notation.
          The component renders section headers like "Deriving the Quadratic
          Formula" and "Working Examples" with distinct styling, likely using
          custom CSS classes for emphasis.
        </p>
        <p>
          The quadratic formula itself is a standout feature, rendered as a
          complex mathematical expression with superscripts, fractions, and
          square roots, showcasing the component's ability to interpret and
          display LaTeX-style mathematical notation. The renderer maintains
          consistent formatting for bullet points and numbered lists, ensuring a
          clear hierarchical structure. It also handles inline mathematical
          expressions within regular text, as seen in the example equations (x²
          - 5x + 6 = 0) and (2x² + 4x - 6 = 0), where superscripts are correctly
          displayed.
        </p>
        <p>
          This combination of features illustrates the{" "}
          <strong>CustomMarkdownRenderer</strong>'s capability to transform raw
          markdown and LaTeX input into a visually appealing and mathematically
          accurate representation, essential for educational content in a chat
          interface.
        </p>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/chat-markdown-3.webp?quality=50"
          alt="Lesson and Curriculum Planning"
        />
        <h3>Image 4: React Component for Quadratic Formula Calculator</h3>
        <p>
          Our next example demonstrates the{" "}
          <strong>CustomMarkdownRenderer</strong>'s advanced capabilities in
          presenting both explanatory text and code snippets within a chat
          interface, specifically in an educational context about the quadratic
          formula:
        </p>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/chat-markdown-4.webp?quality=50"
          alt="Lesson and Curriculum Planning"
        />
        <h3>Chat Interface</h3>
        <ul>
          <li>
            The image maintains the consistent chat bubble design, with distinct
            styles for the user (Teacher) and the AI assistant (Lumi).
          </li>
          <li>
            This continuity in design helps users follow the conversation flow
            easily, even when complex content is introduced.
          </li>
        </ul>
        <h3>Text Rendering</h3>
        <ul>
          <li>
            The component renders regular text with appropriate formatting,
            including different font weights for emphasis.
          </li>
          <li>
            Lumi's response is well-structured, with a clear introduction and
            explanation of the upcoming code.
          </li>
        </ul>
        <h3>Code Block Presentation</h3>
        <ul>
          <li>
            The code is displayed in a distinct, dark-themed block, setting it
            apart from the regular text.
          </li>
        </ul>
        <h3>Typography and Readability</h3>
        <ul>
          <li>
            The code uses a monospaced font, typical for coding, which aids in
            readability and code alignment.
          </li>
          <li>
            The contrast between the dark code background and light text ensures
            good legibility.
          </li>
        </ul>
        <p>
          This example showcases how the <strong>CustomMarkdownRenderer</strong>{" "}
          can seamlessly integrate complex, formatted text with
          syntax-highlighted code snippets, making it an invaluable tool for
          educational chatbots or any application requiring the presentation of
          technical content in a conversational interface.
        </p>
        <h2>Wrapping Up</h2>
        <p>
          The ability to present such diverse content types within a chat
          interface opens up new possibilities for educational platforms,
          technical support systems, and any application where complex
          information needs to be communicated clearly and effectively.
        </p>
        <p>
          As AI continues to advance, tools like the{" "}
          <strong>CustomMarkdownRenderer</strong> will become increasingly
          crucial in bridging the gap between machine-generated content and
          human understanding. By enabling chatbots to communicate with the same
          depth and clarity as human experts, we're not just improving user
          interfaces – we're enhancing the very nature of human-AI interaction.
        </p>
        <p>
          As we look to the future, we can anticipate even more advanced
          rendering capabilities, perhaps incorporating interactive elements or
          real-time data visualizations. The journey to perfect human-AI
          communication is ongoing, and components like the{" "}
          <strong>CustomMarkdownRenderer</strong> are pivotal in this evolution.
        </p>
        <p>
          By using such customization as we have explored today, you're not just
          improving your application's functionality – you're contributing to a
          future where complex ideas can be shared effortlessly between humans
          and AI, fostering better understanding and more productive
          interactions.
        </p>
      </React.Fragment>,
    ],
  };
