/* eslint-disable react/prop-types */
import StudentName from "./StudentName";

export default function Students(props) {
  console.log(props);
  return (
    <div>
      <p>hello</p>
      <img src="https://assets.pokemongohub.net/pokemons/25.png" alt="" />
      {props.students.map((student) => (
        <StudentName key={student} student={student} />
      ))}
    </div>
  );
}
