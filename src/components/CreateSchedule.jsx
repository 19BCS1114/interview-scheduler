import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const CreateSchedule = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    _id: "",
    interviewers: [],
    candidates: [],
  };

  const initialAllPersons = {
    interviewers: [],
    candidates: [],
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

  // API Call

  const bridge = async () => {
    let response = await fetch(
      "https://interview-scheduling-server.herokuapp.com/createinterview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    );

    let res = await response.json();
    if (res.error) {
      alert(res.error);
    } else {
      console.log(res.message);
    }
  };

  const getData = async () => {
    let response = await fetch(
      "https://interview-scheduling-server.herokuapp.com/createinterview",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let res = await response.json();
    if (res.error) {
      console.log(res.error);
    } else {
      console.log(res);
      setAllPersons(res);
    }
  };

  const handleOnSubmit = (event) => {
    if (state.interviewers.length < 1 || state.candidates.length < 1) {
      alert("No of participants is less than 2");
    } else {
      event.preventDefault();
      alert("Interview Created!");
      bridge();
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
            <form>
              <div className="row">
                <div className="col mx-5 my-2">
                  <label className="form-label">Enter Interview Name</label>
                  <input
                    required
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
                    required
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
                    required
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
                    required
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
                    {allPersons?.interviewers?.map((interviewer, key) => (
                      <div key={key} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="interviewers"
                          value={interviewer._id}
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
                    {allPersons?.candidates?.map((candidate, key) => (
                      <div key={key} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="candidates"
                          onChange={handleCandidatesChange}
                          value={candidate._id}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
