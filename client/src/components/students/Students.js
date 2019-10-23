import React, { useState } from "react";
import axios from "axios";

import { Title, Text, Button } from "../../styles/Styled";

import StudentForm from "./StudentForm";
import StudentShow from "./StudentShow";

class Students extends React.Component {
  state = { adding: false, students: [], low: [], med: [], high: [] };

  componentDidMount() {
    axios.get("/api/students/").then(res => {
      this.setState({ students: res.data });
    });
  }

  calculateTeams = (averageData) => {
    const { low, med, high } = this.state
    if(averageData <= 2) {
      this.setState({low: [...low, averageData]})
    } else if (averageData >= 3 && averageData <= 4) {
      this.setState({med: [...med, averageData]})
    } else {
      this.setState({high: [...high, averageData]})
    }
      
    console.log(this.state.team1)
  }

  addStudent = student => {
    axios.post("/api/students", student).then(res => {
      const { students } = this.state;
      this.setState({ students: [...students, res.data] });
      // window.location.href = '/students
    });
  };

  editStudent = (id, student) => {
    axios.put(`api/students/${id}`, { student })
      .then(res => {
        const students = this.state.students.map(student => {
          if (student.id === id) return res.data;
          return student;
        })
        this.setState({ students })
      })
  }

  deleteStudent = id => {
    axios.delete(`/api/students/${id}`).then(res => {
      const { students } = this.state;
      this.setState({ students: students.filter(s => s.id !== id) });
    });
  };

  toggleForm = () => {
    const { adding } = this.state;
    this.setState({ adding: !this.state.adding });
  };

  renderStudents() {
    const { students } = this.state;
    return (
      <div className="students-grid">
        {students.map(s => {
          return (
            <div className="s-grid-row">
              <StudentShow
                key={s.id}
                {...s}
                deleteStudent={this.deleteStudent}
                editStudent={this.editStudent}
                calculateTeams={this.calculateTeams}
              />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="s-cont">
        <div className="s-button-cont">
          <Button onClick={this.toggleForm}>Add Student</Button>
        </div>
        <div className="s-row">
          <Title>Students</Title>
        </div>
        {this.state.adding ? (
          <StudentForm addStudent={this.addStudent} />
        ) : (
            <div></div>
          )}
        {this.renderStudents()}
      </div>
    );
  }
}

export default Students;
