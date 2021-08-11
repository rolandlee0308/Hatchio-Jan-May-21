import Course from "./Course";

const CourseList = ({ courseList, setCourseList }) => {
  return (
    <div id='course'>
      {courseList.map((course) => (
        <Course
          key={course.id}
          course={course}
          courseList={courseList}
          setCoursesList={setCourseList}
        />
      ))}
    </div>
  );
};

export default CourseList;
