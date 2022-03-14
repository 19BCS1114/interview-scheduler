import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const CreateSchedule = () => {
  const initialState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    id: "",
    interviewers: [],
    candidates: [],
  };

  const initialAllPersons = {
    interviewers: [
      { name: "Chanchal", email: "chanchalmishra@gmail.com", id: "xyz" },
      { name: "Anubhav", email: "anubhavsharma@gmail.com", id: "abc" },
    ],
    candidates: [
      { name: "Aditya", email: "chanchalmishra@gmail.com", id: "def" },
      { name: "Sahil", email: "anubhavsharma@gmail.com", id: "mno" },
    ],
  };

  const [allPersons, setAllPersons] = useState(initialAllPersons);

  const [state, setState] = useState(initialState);

  const handleOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleInterviewersChange = (event) => {
    let interviewers = state.interviewers;

    if (event.target.checked) {
      interviewers.push(event.target.value);
    } else {
      interviewers.splice(interviewers.indexOf(event.target.value));
    }
    setState({ ...state, interviewers: interviewers });
  };
  const handleCandidatesChange = (event) => {
    let candidates = state.candidates;

    if (event.target.checked) {
      candidates.push(event.target.value);
    } else {
      candidates.splice(candidates.indexOf(event.target.value));
    }
    setState({ ...state, candidates: candidates });
  };
  const handleOnSubmit = () => {
    console.log(state);
  };

  return (
    <div>
      <Navbar />
      <div className="container py-5 p-md-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="row">
              <div className="col h4 mx-5 my-2">
                Create a schedule for interview
              </div>
            </div>
            <div className="row">
              <div className="col mx-5 my-2">
                <label className="form-label">Enter Interview Name</label>
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleOnChange}
                  className="form-control"
                  placeholder="Interview Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mx-5 my-2">
                <label className="form-label">Enter Interview Date</label>
                <input
                  name="date"
                  type="date"
                  value={state.date}
                  onChange={handleOnChange}
                  className="form-control"
                  placeholder="Interview Date"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mx-5 my-2">
                <label className="form-label">Enter Start Time</label>
                <input
                  name="startTime"
                  value={state.startTime}
                  onChange={handleOnChange}
                  type="time"
                  className="form-control"
                />
              </div>
              <div className="col mx-5 my-2">
                <label className="form-label">Enter End Time</label>
                <input
                  name="endTime"
                  value={state.endTime}
                  onChange={handleOnChange}
                  type="time"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mx-5 my-2">
                <div
                  onClick={() => {
                    document
                      .getElementById("interviewer")
                      ?.classList.toggle("d-none");
                  }}
                  className="rounded border p-2"
                  role="button"
                >
                  Select Interviewer
                </div>
                <div id="interviewer" className="p-1 d-none">
                  {allPersons.interviewers.map((interviewer, key) => (
                    <div key={key} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interviewers"
                        value={interviewer.id}
                        onChange={handleInterviewersChange}
                      />
                      <label className="form-check-label">
                        <b>{interviewer.name}</b> {interviewer.email}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col mx-5 my-2">
                <div
                  onClick={() => {
                    document
                      .getElementById("candidates")
                      ?.classList.toggle("d-none");
                  }}
                  className="rounded border p-2"
                  role="button"
                >
                  Select Candidate
                </div>
                <div id="candidates" className="p-1 d-none">
                  {allPersons.candidates.map((candidate, key) => (
                    <div key={key} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="candidates"
                        onChange={handleCandidatesChange}
                        value={candidate.id}
                      />
                      <label className="form-check-label">
                        <b>{candidate.name}</b> {candidate.email}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mx-5 my-2">
                <button
                  type="submit"
                  onClick={handleOnSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
