import React from "react";
import { Link } from "react-router-dom";

export const SmallCard = (props) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "16rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            {props.date?.split("T")[0]}
          </h6>
          <p className="card-text">
            <strong>Start time:</strong>{" "}
            {props.startTime?.split("T")[1]?.split(":00.000")[0]}
          </p>
          <p className="card-text">
            <strong>End time:</strong>{" "}
            {props.endTime?.split("T")[1]?.split(":00.000")[0]}
          </p>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => {
                props.detailHandler({
                  name: props.name,

                  date: props.date,
                  startTime: props.startTime,
                  endTime: props.endTime,
                  id: props._id,
                  interviewers: props.interviewers,
                  candidates: props.candidates,
                });
              }}
              className="btn btn-sm btn-primary"
            >
              Expand
            </button>
            <Link
              to={`/editschedule/${props._id}`}
              className="btn btn-sm btn-secondary"
              state={{
                name: props.name,
                date: props.date?.split("T")[0],
                startTime: props.startTime?.split("T")[1]?.split(":00.000")[0],
                endTime: props.endTime?.split("T")[1]?.split(":00.000")[0],
                _id: props._id,
              }}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
