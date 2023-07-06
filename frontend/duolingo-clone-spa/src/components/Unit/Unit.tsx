import "../../styles/unit.css";
import LessonModule from "./LessonModule";

interface UnitProps {
  unit: {
    id: number;
    title: string;
    description: string;
    enabled: boolean;
    finished: boolean;
    lessons: {
      id: number;
      title: string;
      description: string;
      avatar: string;
      enabled: boolean;
      finished: boolean;
    }[];
  };
}

const Unit = ({ unit }: UnitProps) => {
  return (
    <div id="unit__container">
      <div className="unit__header">
        <h2>{unit.title}</h2>
        <h3>{unit.description}</h3>
      </div>
      <div className="lessons__container">
        {unit.lessons.map((lesson) => <LessonModule key={lesson.id} lesson={lesson} />)}
      </div>

    </div>
  )
}

export default Unit;