import React, { useState } from "react";
import { Details } from "./Details";
import { Navbar } from "./Navbar";
import { SmallCard } from "./SmallCard";

export const Home = () => {
  const initialState = {
    slideIndices: [0, 1, 2, 3],
    interviews: [
      {
        name: "efiej",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "2121",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "eduheue",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
      {
        name: "jneudeud",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
        candidates: [
          { name: "Chanchal", email: "chanchalmishra@gmail.com" },
          { name: "Anubhav", email: "anubhavsharma@gmail.com" },
        ],
      },
    ],
  };
  const [state, setState] = useState(initialState);
  const detailInitialState = {
    name: "Interview Title",
    date: "21/12/2022",
    startTime: "12:12",
    endTime: "10:10",
    id: "",
    interviewers: [
      { name: "Chanchal", email: "chanchalmishra@gmail.com" },
      { name: "Anubhav", email: "anubhavsharma@gmail.com" },
    ],
    candidates: [
      { name: "Chanchal", email: "chanchalmishra@gmail.com" },
      { name: "Anubhav", email: "anubhavsharma@gmail.com" },
    ],
  };
  const [detailState, setDetailState] = useState(detailInitialState);

  const detailHandler = (dataDetail) => {
    setDetailState({ ...dataDetail });
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col mx-lg-5 px-lg-5 my-5">
            <Details {...detailState} />
          </div>
        </div>
        <div className="row d-none d-lg-block">
          <div className="col py-5 my-5">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {state.slideIndices.map((i, key) => (
                  <div
                    className={"carousel-item " + (i === 0 ? "active" : " ")}
                    key={key}
                  >
                    <div className="d-flex justify-content-center">
                      <SmallCard
                        {...state.interviews[i * 3]}
                        detailHandler={detailHandler}
                      />
                      <SmallCard
                        {...state.interviews[i * 3 + 1]}
                        detailHandler={detailHandler}
                      />
                      <SmallCard
                        {...state.interviews[i * 3 + 2]}
                        detailHandler={detailHandler}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                style={{ filter: "invert(100%)" }}
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                style={{ filter: "invert(100%)" }}
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row d-lg-none">
          <div className="col d-flex flex-wrap justify-content-center">
            <div className="my-2">
              <SmallCard {...detailState} />
            </div>
            <div className="my-2">
              <SmallCard {...detailState} />
            </div>
            <div className="my-2">
              <SmallCard {...detailState} />
            </div>
            <div className="my-2">
              <SmallCard {...detailState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
