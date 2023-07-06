import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Exercise from "../components/Unit/Exercise";
import { useSelector, useDispatch } from "react-redux";
import { updateLesson } from "../redux/unitSlice";
import {
  updateNetCoins,
  updateCompletedLessons,
  updateExperience,
} from "../redux/statusSlice";
import type { RootState } from "../redux/store";

import "../styles/lesson.css";

const Lesson = () => {
  const navigate = useNavigate();
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();
  const { unitId, lessonId } = useParams();
  const [listIndex, setListIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [netCoins, setNetCoins] = useState(0);
  const [experience, setExperience] = useState(0);

  const filterExerciseById: any = units[Number(unitId) - 1].lessons.find(
    (lesson: any) => lesson.id === Number(lessonId)
  )?.exercises;

  const progressIncrement = 100 / filterExerciseById.length;

  const setSelectedAnswer = (valid: boolean) => {
    if (valid) {
      setNetCoins(netCoins + 5);
      setExperience(experience + 5);
      setListIndex(listIndex + 1);
      setProgress(progress + progressIncrement);
    } else {
      setNetCoins(netCoins - 2);
    }
  };

  useEffect(() => {
    if (listIndex === filterExerciseById.length) {
      dispatch(updateNetCoins(netCoins));
      dispatch(updateExperience(experience));
      dispatch(updateCompletedLessons());
      //update current lesson that got finished
      dispatch(
        updateLesson({
          unitId: Number(unitId),
          lessonId: Number(lessonId),
          lessonState: "finished",
        })
      );
      //enable next lesson if there is one
      dispatch(
        updateLesson({
          unitId: Number(unitId),
          lessonId: Number(lessonId) + 1,
          lessonState: "enabled",
        })
      );
    }
  }, [
    listIndex,
    filterExerciseById,
    dispatch,
    experience,
    netCoins,
    lessonId,
    unitId,
  ]);

  return (
    <div className="lesson__container">
      <ProgressBar progress={progress} />
      {listIndex === filterExerciseById.length ? (
        <div className="lesson_finished__container">
          <h2>Good job!</h2>
          <div className="status_finished__container">
            <div className="single_status">
              <h3>Experience gained:</h3>
              <p>{experience} xp</p>
            </div>
            <div className="single_status">
              <h3>Netcoins earned:</h3>
              <p>{netCoins}</p>
            </div>
          </div>
          <div className="buttons__container">
            <button className="exit__button" onClick={() => navigate(-1)}>
              Exit
            </button>
          </div>
        </div>
      ) : (
        <Exercise
          exercise={filterExerciseById[listIndex]}
          selectAnswerHandler={(valid: boolean) => setSelectedAnswer(valid)}
        />
      )}
    </div>
  );
};

export default Lesson;