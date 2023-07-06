import "../../styles/lessonmodule.css";
import { NavLink } from "react-router-dom";
interface lessonModuleProps {
  lesson: {
    id: number;
    title: string;
    description: string;
    avatar: string;
    enabled: boolean;
    finished: boolean;
  };
}


const LessonModule = ({ lesson }: lessonModuleProps) => {
  return <div className="lesson_module__container">
    <div>
      <img src={lesson.avatar} alt="image avatar" />
    </div>
    <div>
      <div className="heading">
        <h1>{lesson.title}</h1>
      </div>
      <p>{lesson.description}</p>
      <NavLink to={`lesson/${lesson.id}`} className={lesson.enabled ? "enabled" : "disabled"}>Start</NavLink>
    </div>
  </div>
}

export default LessonModule;