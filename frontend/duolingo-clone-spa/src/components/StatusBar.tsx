import React from "react";
import "../styles/statusbar.css";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const StatusBar = () => {
  const status = useSelector((state: RootState) => state.status);
  return (
    <div className="status_bar__container">
      <h3>Status</h3>
      <ul>
        <li>
          Net Coins: <span>{status.netCoins}</span>
        </li>
        <li>
          Experience: <span>{status.experience} xp</span>
        </li>
        <li>
          Completed lessons: <span>{status.completedLessons}</span>
        </li>
      </ul>
    </div>
  );
};

export default StatusBar;