import lessonImage from "../assets/two-people-talking.jpg";
import lessonImage2 from "../assets/tapas-and-beer.jpg";
import lessonImage3 from "../assets/travel.jpg";
import Unit from "../components/Unit/Unit";
const units = [
  {
    id: 1,
    title: "Unit 1",
    description: "Form basic sentences, greet people",
    enabled: true,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Introduce yourself!",
        avatar: lessonImage,
        enabled: true,
        finished: false,
      },
      {
        id: 2,
        title: "Lesson 2",
        description: "Order food and drinks",
        avatar: lessonImage2,
        enabled: false,
        finished: false,
      },
    ],
  },
  {
    id: 2,
    title: "Unit 2",
    description: "Get around the city",
    enabled: false,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Introduce yourself!",
        avatar: lessonImage,
        enabled: false,
        finished: false,
      },
    ],
  },
  {
    id: 3,
    title: "Unit 3",
    description: "Talk about your family",
    enabled: false,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Introduce yourself!",
        avatar: lessonImage3,
        enabled: false,
        finished: false,
      },
    ],
  },
];

const Learn = () => {
  return (
    <div className="learn__container">
      {units.map((unit) => <Unit key={unit.id} unit={unit} />)}
    </div>
  )
}

export default Learn;