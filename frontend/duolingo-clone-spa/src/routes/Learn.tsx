import * as React from "react";
import type { RootState } from "../redux/store";
import Unit from "../components/Unit/Unit";
import { useSelector } from "react-redux";

const Learn = () => {
  const units = useSelector((state: RootState) => state.units);
  return (
    <div id="learn__container">
      {units.map((unit: any) => (
        <Unit key={unit.id} unit={unit} />
      ))}
    </div>
  );
};

export default Learn;