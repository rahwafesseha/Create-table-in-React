import { useState } from "react";
import "./App.css";
import data from "./studentRecord.json";
import { nanoid } from "nanoid";
import StudentRow from "./components/StudentRow";

function App() {
  const [students, setStudents] = useState(data);
  const [addStudent, setAddStudent] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (event, names) => {
    event.preventDefault();
    setAddStudent({ ...addStudent, [names]: event.target.value });
  };

  const addSubmitHandler = (event) => {
    event.preventDefault();
    const newStudent = {
      id: nanoid(),
      fullName: addStudent.fullName,
      address: addStudent.address,
      phoneNumber: addStudent.phoneNumber,
      email: addStudent.email,
    };
    const newStudents = [...students, newStudent];
    setStudents(newStudents);
  };
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
           <StudentRow student={student}/>
          ))}
        </tbody>
      </table>
      <h2>Add a student</h2>
      <form onSubmit={addSubmitHandler}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter fullName..."
          onChange={(event) => handleInputChange(event, "fullName")}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address..."
          onChange={(event) => handleInputChange(event, "address")}
        />
        <input
          type="text"
          name="PhoneNumber"
          required="required"
          placeholder="Enter phone number.."
          onChange={(event) => handleInputChange(event, "phoneNumber")}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter email..."
          onChange={(event) => handleInputChange(event, "email")}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
