import React, { useState, useEffect } from "react";
import { SubTitle, Text, EditButton, DeleteButton } from "../../styles/Styled";
import CohortForm from "./CohortForm";
import axios from "axios";

const CohortShow = ({ id, deleteCohort, editCohort, ...rest }) => {
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div>
      <div className="cohort-box">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", padding: "1em"}}>
          <SubTitle>{rest.title}</SubTitle>
        </div>
        <div style={styles.row}>
          <Text>{rest.full_time ? "Full-Time" : "Part-Time"}</Text>
          <Text>Students: {rest.number_of_students}</Text>
        </div>
        <div className="s-show-but-cont">
          <EditButton onClick={toggleEdit}>Edit Cohort</EditButton>
          <DeleteButton onClick={() => deleteCohort(id)}>
            Remove Cohort
          </DeleteButton>
        </div>
      </div>
      {editing ? (
        <CohortForm
          editCohort={editCohort}
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

export default CohortShow;

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1em 0em",
    width: "100%",
  },

};
