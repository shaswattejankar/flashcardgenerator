import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, popIt, allFlashcards, deleteThis } from "./cardSlice";
import { BsArrowRight } from "react-icons/bs";
import { Link, Route, Routes } from "react-router-dom";
import { TbTrash } from "react-icons/tb";

export const CardData = () => {
  const flashcards = useSelector(allFlashcards);
  const dispatch = useDispatch();

  const renderedCard = flashcards
    .map((flashcard) => {
      const id = flashcard.id;
      const flash = JSON.parse(flashcard.flash);
      return { id, flash };
    })
    .map((flashcard) => (
      <div className="card end shadow-sm" key={flashcard.id}>
        <div className="container card-body">
          <div className="row header">
            <img
              className="col-6 card-img"
              src={flashcard.flash.groupImage}
              alt=""
            />
            <div className="col-6 p-0">
              <h5 className="card-title">{flashcard.flash.groupName}</h5>
              <i style={{ color: "#acacac" }}>
                {flashcard.flash.termList.length} cards
              </i>
            </div>
          </div>
        </div>
        <div className="container card-body ">
          <div
            className="row justify-content-center group-desc"
            style={{ padding: 12 + "px" }}
          >
            <div className="col-sm-12">
              <p className="card-text">{flashcard.flash.groupDesc}</p>
            </div>
          </div>
        </div>
        <div className="container card-body ">
          <div className="row footer d-flex flex-row align-items-center">
            <div className="col col-10">
              <Link
                to={`/flash-details/${flashcard.id}`}
                state={{ id: flashcard }}
              >
                <button className="btn btn-light view-btn">
                  View Cards{" "}
                  {
                    <BsArrowRight
                      style={{ fontSize: "23px", color: "#ef2121" }}
                    />
                  }{" "}
                </button>
              </Link>
            </div>
            <div className="col col-2">
              <button
                type="button"
                className="btn btn-outline-secondary float-end delete-card-btn"
                onClick={() => dispatch(deleteThis(flashcard.id))}
              >
                <TbTrash style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </div>
        <Routes>
          <Route path={`/flash-details/:flashcardId`} element={<page3 />} />
        </Routes>
      </div>
    ));

  return (
    <section className="container container-fluid flash-deck">
      <div className="d-flex flex-row flex-wrap deck-row">{renderedCard}</div>

      <div className="d-flex flex-row justify-content-center align-items-center reset-div">
        <button
          type="button"
          className="btn btn-outline-danger reset"
          onDoubleClick={(e) => dispatch(reset())}
        >
          Delete all
        </button>
        <button
          type="button"
          className="btn btn-outline-danger delete"
          onClick={(e) => dispatch(popIt())}
        >
          Delete last
        </button>
      </div>
    </section>
  );
};