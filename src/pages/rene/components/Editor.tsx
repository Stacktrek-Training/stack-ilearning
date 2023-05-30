export interface SelectedDiv {
  className?: string;
  textContent?: string;
}

interface EditorProps {
  selectedDiv?: SelectedDiv;
  onUpdate: (selectedDiv: SelectedDiv) => void;
}

export const Editor = ({ selectedDiv = {}, onUpdate }: EditorProps) => {
  const handleApply = () => {
    onUpdate({
      className: selectedDiv?.className || "",
      textContent: selectedDiv?.textContent || "",
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
