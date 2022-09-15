import React from 'react'

function StudentRow({ student }) {
  return (
    <tr>
      <td>{student.fullName}</td>
      <td>{student.address}</td>
      <td>{student.phoneNumber}</td>
      <td>{student.email}</td>
    </tr>
  );
}

export default StudentRow