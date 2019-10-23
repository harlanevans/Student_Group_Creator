import React, { useState, useEffect } from "react";
import { SubTitle, Text, EditButton, DeleteButton } from "../../styles/Styled";
import StudentForm from "./StudentForm";
import axios from 'axios'

const StudentShow = ({ addAverage, calculateTeams, id, deleteStudent, editStudent, ...rest }) => {
  const [editing, setEditing] = useState(false);


  const toggleEdit = () => {
    setEditing(!editing);
  };
  
  return (
    <div>
      <div className="student-box">
        <div className="student-name-cont">
          <SubTitle>
            {rest.first_name} {rest.last_name}
          </SubTitle>
          <Text>{rest.full_time ? "Full-Time" : "Part-Time"}</Text>
        </div>
        <div className="student-skills">
          <Text className="skills-text">
            Technical Skills: {rest.technical}
          </Text>
          <Text className="skills-text">Soft Skills: {rest.soft}</Text>
          <Text className="skills-text-right">Effort Level: {rest.effort}</Text>
          <Text className="skills-text-right">Average: {rest.average}</Text>
        </div>
        <div className="s-show-but-cont">
          <EditButton onClick={toggleEdit}>Edit Student</EditButton>
          <DeleteButton onClick={() => deleteStudent(id)}>
            Remove Student
          </DeleteButton>
        </div>
      </div>
      {editing ? (
        <StudentForm
          editStudent={editStudent}
          {...rest}
          id={id}
          editing={toggleEdit}
        />
      ) : (
          <div></div>
        )}
    </div>
  );
};

export default StudentShow;
