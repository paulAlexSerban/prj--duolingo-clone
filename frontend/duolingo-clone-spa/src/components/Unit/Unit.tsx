import * as React from "react";
import "../../styles/unit.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LessonModule from "./LessonModule";
import { updateUnit, updateLesson } from "../../redux/unitSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
interface UnitProps {
  unit: {
    id: number;
    title: string;
    description: string;
    enabled: boolean;
    finished: boolean;
    lessons: {
      id: Number;
      title: string;
      description: string;
      avatar: string;
      enabled: boolean;
      finished: boolean;
    }[];
  };
}

const Unit = ({ unit }: UnitProps) => {
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();
  useEffect(() => {
    //finish unit when all lessons are finished
    if (!unit.lessons.filter((lesson) => !lesson.finished).length) {
      dispatch(updateUnit({ id: unit.id, state: "finished" }));

      //enable the next unit if it exists
      if (units[unit.id] !== undefined) {
        dispatch(updateUnit({ id: unit.id + 1, state: "enabled" }));
        dispatch(
          updateLesson({
            unitId: unit.id + 1,
            lessonId: 1,
            lessonState: "enabled",
          })
        );
      }
    }
  });

  return (
    <div id="unit__container">
      <div
        className={`unit__header ${!unit.enabled && "disable"} ${
          unit.finished && "finished"
        }`}
      >
        <h2>{unit.title}</h2>
        <h3>{unit.description}</h3>
      </div>
      <div className="lessons__container">
        {unit.lessons.map((lesson: any) => (
          <LessonModule key={lesson.id} unitId={unit.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Unit;