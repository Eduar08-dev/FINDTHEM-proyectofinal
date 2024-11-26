// pages/index.js
import Card from "./Cards/page";
import { FaCloud, FaSync, FaBrain } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";

const Modulos = () => {
  return (
    <div className="flex flex-row flex-wrap content-between items-center justify-around gap-0 bg-white p-5">
      <div className="grid gap-9 md:grid-cols-3">
        <Card
          icon={<FaCloud className="h-16 w-16" />}
          title="Cloud Computing"
          description="Conveniently promote transparent materials and stand-alone strategic theme areas."
        />
        <Card
          icon={<FaSync className="h-16 w-16" />}
          title="Backup & Recovery"
          description="Conveniently promote transparent materials and stand-alone strategic theme areas."
        />
        <Card
          icon={<FaBrain className="h-16 w-16" />}
          title="Machine Learning"
          description="Conveniently promote transparent materials and stand-alone strategic theme areas."
        />
      </div>
    </div>
  );
};

export default Modulos;
