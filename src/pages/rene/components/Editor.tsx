export interface SelectedDiv {
  className?: string;
  textContent?: string;
}

interface EditorProps {
  selectedDiv?: SelectedDiv;
  onUpdate: (selectedDiv: SelectedDiv) => void;
}

export const Editor = ({ selectedDiv = {}, onUpdate }: EditorProps) => {
  const newClassName = selectedDiv?.className || "";
  const newTextContent = selectedDiv?.textContent || "";

  const handleApply = () => {
    onUpdate({
      className: newClassName,
      textContent: newTextContent,
    });
  };

  return (
    <div className="border border-slate-600 rounded-lg w-64 h-80 bg-white p-5 relative">
      {selectedDiv ? (
        <div>
          <p>Class Name: {selectedDiv.className}</p>
          <p>Text Content: {selectedDiv.textContent}</p>
        </div>
      ) : (
        "Type your code here"
      )}

      <div className="absolute bottom-5 left-0 w-full flex justify-center">
        <input
          type="text"
          className="border rounded w-32 px-2 py-1 mr-2"
          placeholder="Class name"
          value={newClassName}
          onChange={(e) => {
            onUpdate({
              className: e.target.value,
              textContent: newTextContent,
            });
          }}
        />
        <input
          type="text"
          className="border rounded w-32 px-2 py-1"
          placeholder="Text content"
          value={newTextContent}
          onChange={(e) => {
            onUpdate({
              className: newClassName,
              textContent: e.target.value,
            });
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Editor;
