import Democode from "./Democode";
import Boxes from "./Boxes";

const Maindisplay = () => {
  return (
    <div className="p-10 flex justify-center items-center bg-white">
        <Boxes />
        <Democode />
    </div>
  );
};

export default Maindisplay;
