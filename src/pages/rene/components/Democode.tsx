import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";

export const Democode = () => {
  const codeSnippet = `let _____ = prompt("What's your name?");
  console.log("Hello, " + name + "!Welcome to our website."); 
  let name = prompt("What's your name?");
  console.log("Hello, " + name + "!Welcome to our website.");`;

  return (
    <div className=" bg-slate-100 rounded-lg p-10">
      <pre className="col-span-2" style={{ position: "relative" }}>
        <div
          style={{
            fontSize: "20px",
            position: "absolute",
            right: 0,
            left: -20,
            top: 0,
            bottom: 0,
            width: "2em",
            textAlign: "left",
            userSelect: "none",
            pointerEvents: "none",
            color: "rgba(0,0,0,.5)",
            paddingLeft: "-2em",
          }}
        >
          {codeSnippet.split("\n").map((_, i) => (
            <span
              key={i}
              style={{ display: "block", counterIncrement: "line-number" }}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <code
          style={{ fontSize: "20px", textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              codeSnippet,
              Prism.languages.javascript,
              "javascript"
            ),
          }}
        />
      </pre>
    </div>
  );
};

export default Democode;
