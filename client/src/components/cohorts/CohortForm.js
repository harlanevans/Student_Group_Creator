import React from "react";
import { Button, ButtonDiv } from "../../styles/Styled";

import "./CForm.css";

class CohortForm extends React.Component {
  state = { title: "", full_time: true, number_of_students: "" };

  componentDidMount() {
    if (this.props.id) {
      const { editCohort, deleteCohort, id, ...rest } = this.props;
      this.setState({ ...rest });
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
      this.props.editCohort(this.props.id, this.state);
      this.props.editing();
    } else {
      this.props.addCohort({ ...this.state });
    }
    this.setState({
      title: "",
      number_of_students: "",
      full_time: true
    });
  };
  render() {
    const { full_time, number_of_students, title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="c">
          <div className="c-form-row">
            <div className="c-form-cont">
            <div className='form-padding-row'>
              
              <label className="c">Title</label>
              <input
                type="text"
                value={title}
                name="title"
                onChange={this.handleChange}
                className="c"
                width="30"
                />
                </div>
              <label className="c">Number of Students</label>
              <input
                type="number"
                value={number_of_students}
                name="number_of_students"
                onChange={this.handleChange}
                className="c"
                max="50"
                min="1"
              />
              <label className="c">Full Time?</label>
              <input
                type="checkbox"
                value={full_time}
                name="full_time"
                checked={full_time}
                onChange={this.handleChange}
              />
              <ButtonDiv>
                <Button onSubmit={this.handleSubmit}>Submit Cohort</Button>
              </ButtonDiv>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CohortForm;
