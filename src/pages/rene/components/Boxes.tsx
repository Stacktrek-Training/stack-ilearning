import React, { useState } from "react";
import Draggable from "react-draggable";
import Editor, { SelectedDiv } from "./Editor";

export const Boxes = () => {
  const [selectedDiv, setSelectedDiv] = useState<SelectedDiv>({});

  const handleUpdate = (selectedDiv: SelectedDiv) => {
    setSelectedDiv(selectedDiv);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedDiv({
      className: (e.target as HTMLDivElement).className,
      textContent: (e.target as HTMLDivElement).textContent || "",
    });
  };

  return (
    <div className="flex p-10">
      <Editor selectedDiv={selectedDiv} onUpdate={handleUpdate} />
      <div
        className="border border-slate-600 rounded-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white"
        style={{ marginLeft: "20px" }}
      >
        <div className="flex flex-wrap">
          <div className="flex flex-col">
            <Draggable>
              <div
                className="rounded-md w-auto text-center p-1 bg-green-400 m-2"
                onClick={handleClick}
              >
                name
              </div>
            </Draggable>
            <Draggable>
              <div
                className="rounded-md w-auto text-center p-1 bg-blue-400 m-2"
                onClick={handleClick}
              >
                console
              </div>
            </Draggable>
            {/* ...other draggable divs... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
