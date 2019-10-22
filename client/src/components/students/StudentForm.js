import React from "react";
import { Button, ButtonDiv } from "../../styles/Styled";
import "./SForms.css";

class StudentForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    full_time: true,
    technical: "",
    soft: "",
    effort: ""
  };

  componentDidMount() {
    if (this.props.id) {
      const { editStudent, deleteStudent, id, ...rest } = this.props;
      this.setState({ ...rest })
    }
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editStudent(this.props.id, this.state);
      this.props.editing();
    } else {
      this.props.addStudent({ ...this.state });
    }
    this.setState({
      first_name: "",
      last_name: "",
      full_time: true,
      technical: "",
      soft: "",
      effort: ""
    });
  };

  render() {
    const {
      first_name,
      last_name,
      full_time,
      technical,
      soft,
      effort
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-cont">
            <div className="input-col-one">
              <label>First Name</label>
              <input
                name="first_name"
                value={first_name}
                placeholder="First Name"
                onChange={this.handleChange}
                required
              />
              <label>Last Name</label>
              <input
                name="last_name"
                value={last_name}
                placeholder="Last Name"
                onChange={this.handleChange}
                required
              />
              <label>Full Time?</label>
              <input
                type="checkbox"
                value={full_time}
                name="full_time"
                checked={full_time}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-col-two">
              <label>Technical Skills Level</label>
              <select
                value={technical}
                name="technical"
                placeholder="Technical Skills"
                onChange={this.handleChange}
              >
                <option></option>
                <option value={1} name="1">
                  1 (Being the Lowest)
                </option>
                <option value={2} name="2">
                  2
                </option>
                <option value={3} name="3">
                  3
                </option>
                <option value={4} name="4">
                  4
                </option>
                <option value={5} name="5">
                  5 (Being the Highest)
                </option>
              </select>
              <label>Soft Skills Level</label>
              <select
                value={soft}
                name="soft"
                placeholder="Soft Skills"
                onChange={this.handleChange}
              >
                <option></option>
                <option value={1} name="1">
                  1 (Being the Lowest)
                </option>
                <option value={2} name="2">
                  2
                </option>
                <option value={3} name="3">
                  3
                </option>
                <option value={4} name="4">
                  4
                </option>
                <option value={5} name="5">
                  5 (Being the Highest)
                </option>
              </select>
              <label>Effort Level</label>
              <select
                value={effort}
                name="effort"
                placeholder="Effort"
                onChange={this.handleChange}
              >
                <option></option>
                <option value={1} name="1">
                  1 (Being the Lowest)
                </option>
                <option value={2} name="2">
                  2
                </option>
                <option value={3} name="3">
                  3
                </option>
                <option value={4} name="4">
                  4
                </option>
                <option value={5} name="5">
                  5 (Being the Highest)
                </option>
              </select>
            </div>
          </div>
          <ButtonDiv>

            <Button onSubmit={this.handleSubmit}>Submit Student</Button>
          </ButtonDiv>
        </form>
      </div>
    );
  }
}

export default StudentForm;
