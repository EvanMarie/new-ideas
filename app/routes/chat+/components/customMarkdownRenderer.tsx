import React from "react";
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
    .replace(/\\\[(.*?)\\\]/gs, (_, p1) => `$$${p1}$$`)
    .replace(/\\\((.*?)\\\)/g, (_, p1) => `\\(${p1}\\)`)
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
        // @ts-ignore
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
      <style>{`
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
  }     `}</style>
    </div>
  );
};

export default CustomMarkdownRenderer;
