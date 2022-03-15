import React, { useState, useEffect } from "react";
import { Details } from "./Details";
import { Navbar } from "./Navbar";
import { SmallCard } from "./SmallCard";

export const Home = () => {
  const initialState = {
    slideIndices: [],
    interviews: [
      {
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        id: "",
        interviewers: [],
        candidates: [],
      },
    ],
  };
  const [state, setState] = useState(initialState);
  const detailInitialState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    id: "",
    interviewers: [],
    candidates: [],
  };
  const [detailState, setDetailState] = useState(detailInitialState);

  const detailHandler = (dataDetail) => {
    setDetailState({ ...dataDetail });
  };

  const getData = async () => {
    let response = await fetch(
      "https://interview-scheduling-server.herokuapp.com/",
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
      return 0;
    } else {
      let slideIndices = [];
      for (let i = 0; i < res.interviews.length / 3; i++) {
        slideIndices.push(i);
      }
      console.log(res);
      setState({ slideIndices: slideIndices, interviews: res.interviews });
      return res.interviews[0];
    }
  };
  useEffect(() => {
    getData().then((interview) => {
      if (interview) detailHandler(interview);
    });
  }, []);

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
                      {i * 3 + 1 < state.interviews.length ? (
                        <SmallCard
                          {...state.interviews[i * 3 + 1]}
                          detailHandler={detailHandler}
                        />
                      ) : (
                        ""
                      )}
                      {i * 3 + 2 < state.interviews.length ? (
                        <SmallCard
                          {...state.interviews[i * 3 + 2]}
                          detailHandler={detailHandler}
                        />
                      ) : (
                        ""
                      )}
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
