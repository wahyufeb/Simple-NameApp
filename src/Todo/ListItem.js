import React from "react";

const ListItem = props => {
  return (
    <li className="list-group-item" style={{ marginBottom: "10px" }}>
      {props.name}
      <button
        className="btn btn-small btn-danger"
        style={{ float: "right" }}
        onClick={props.deleteName}
      >
        x
      </button>
      <button
        className="btn mr-2 btn-small btn-dark"
        style={{ float: "left" }}
        onClick={props.editName}
      >
        <span style={{ fontSize: "13px" }}>Update</span>
      </button>
    </li>
  );
};

export default ListItem;
