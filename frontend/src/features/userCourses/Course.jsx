import { Link } from "react-router-dom";
import LineProgress from "../../ui/progressBar/LineProgress";
import Card from "../../ui/Card";

function Course({ course, linkUrl = "" }) {
  const {
    title,
    course_id,
    rating,
    thumbnail_url,
    instructor: { name },
    padding = "",
  } = course;
  const urlImageCourse =
    thumbnail_url ||
    "https://i.ytimg.com/vi/CScxy0294SE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDx1G4hpKwdqiy94l6vZlUD1jmMRQ.jpg";

  return (
    <Link
      to={`${linkUrl}${course_id}`}
      className={`${padding} text-neutral-900 cursor-pointer`}
    >
      <Card urlImageCourse={urlImageCourse} title={title} lecturename={name}>
        <LineProgress rating={rating} />
      </Card>
    </Link>
  );
}

export default Course;
