import React from "react";
import axios from "axios";
import CohortShow from './CohortShow';
import CohortForm from './CohortForm';
import { Link } from 'react-router-dom'

import { Title, Text, Button } from "../../styles/Styled";

class Cohorts extends React.Component {
  state = { adding: false, cohorts: [] };

  componentDidMount() {
    axios.get("/api/cohorts").then(res => {
      this.setState({ cohorts: res.data });
    });
  }

  toggleForm = () => {
    this.setState({ adding: !this.state.adding });
  };

  addCohort = cohort => {
    axios.post("/api/cohorts", cohort).then(res => {
      const { cohorts } = this.state;
      this.setState({ cohorts: [...cohorts, res.data] });
    });
  };

  editCohort = (id, cohort) => {
    axios.put(`api/cohorts/${id}`, { cohort }).then(res => {
      const cohorts = this.state.cohorts.map(cohort => {
        if (cohort.id === id) return res.data;
        return cohort;
      });
      this.setState({ cohorts });
    });
  };

  deleteCohort = id => {
    if (window.confirm("This will permanently delete this cohort and all the cohorts in this cohort. Are you sure you want to continue?")) {
      axios.delete(`/api/cohorts/${id}`).then(res => {
        const { cohorts } = this.state;
        this.setState({ cohorts: cohorts.filter(s => s.id !== id) });
      });
    }
  };

  renderCohorts() {
    const { cohorts } = this.state;
    return (
      <div className="cohorts-grid">
        {cohorts.map(c => {
          return (
            <div className="s-grid-row">
              <Link to={{ pathname: `/cohorts/${c.id}` }} {...c}>
              <CohortShow
                key={c.id}
                {...c}
                deleteCohort={this.deleteCohort}
                editCohort={this.editCohort}
                // calculateTeams={this.calculateTeams}
                />
                </Link>
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
          <Button onClick={this.toggleForm}>Add Cohort</Button>
        </div>
        <div className="s-row">
          <Title>Cohorts Page</Title>
        </div>
        {this.state.adding ? (
          <CohortForm addCohort={this.addCohort} />
        ) : (
            <div></div>
          )}
        {this.renderCohorts()}
      </div>
    );
  }
}

export default Cohorts;
