import styles from "./ModuleComponent.module.css";
import QuizComponent from "../QuizComponent/QuizComponent";
import BlogAssignmentComponent from "../BlogAssignmentComponent/BlogAssignmentComponent";
import LessonComponent from "../LessonComponent/LessonComponent";

interface ModuleComponentProps {
  module: {
    id: string;
    name: string;
    items: {
      id: string;
      title: string;
      link: string;
      type: string;
    }[];
  };
}

export default function ModuleComponent(props: ModuleComponentProps) {
  const { module } = props;
  return (
    <div className={styles.module}>
      <h1 className={styles.moduleName}>{module.name}</h1>
      <div className={styles.moduleContent}>
        {module.items.map((item) => {
          if (item.type === "quiz") {
            return <QuizComponent key={item.id} />;
          } else if (item.type === "blog-assignment") {
            return <BlogAssignmentComponent key={item.id} />;
          } else {
            return <LessonComponent key={item.id} />;
          }
        })}
      </div>
    </div>
  );
}
