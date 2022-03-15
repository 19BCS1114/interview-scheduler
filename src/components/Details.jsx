import React from "react";

export const Details = (props) => {
  return (
    <div className="card mx-lg-5">
      <div className="card-body shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                <strong className="text-muted ">
                  {props.date?.split("T")[0]}
                </strong>
                <br />
                <strong>Start time:</strong>{" "}
                {props.startTime?.split("T")[1]?.split(":00.000")[0]}
                <br />
                <strong>End time:</strong>{" "}
                {props.endTime?.split("T")[1]?.split(":00.000")[0]}
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <strong>Interviewers</strong>
              {props.interviewers.map((i, key) => (
                <div className="row " key={key}>
                  <div className="col my-1">
                    <b> {i.name}</b> {i.email}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <strong>Candidates</strong>
              {props.candidates.map((c, key) => (
                <div className="row" key={key}>
                  <div className="col my-1">
                    <b>{c.name}</b> {c.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
