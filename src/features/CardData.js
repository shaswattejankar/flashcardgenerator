import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allFlashcards, deleteThis } from "./cardSlice";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link, Route, Routes } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import FlashcardDetailsPage from "../components/FlashcardDetails/FlashcardDetailsPage";

//To render all the flashcard details from Store
export const CardData = () => {
  const [showCards, setShowCards] = useState(6);
  const [see, setSee] = useState("");
  const flashcards = useSelector(allFlashcards);
  const dispatch = useDispatch();

  // To set see all-> button disability
  useEffect(() => {
    if (flashcards.length > 6) {
      return setSee("");
    } else if (flashcards.length <= 6) {
      return setSee("d");
    }
  }, [flashcards]);

  // Map the data from Store and Render all the Group details as a deck
  const renderedCard = flashcards
    .slice(0, showCards)
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
                {/* To view flsahcard terms of a particular flashcards */}
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
              {/* To delete any Flashcard Group */}
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
          <Route
            path={`/flash-details/:flashcardId`}
            element={<FlashcardDetailsPage />}
          />
        </Routes>
      </div>
    ));

  return (
    <section className="container container-fluid flash-deck">
      {/* To show all the Flashcard Groups */}
      <div className="d-flex flex-row flex-wrap deck-row">{renderedCard}</div>
      <div className="container container see-all">
        {/* see all or see less button */}
        {showCards === 6 ? (
          <button
            className="btn btn-light see-all-btn"
            onClick={() => {
              setShowCards(flashcards.length);
            }}
            disabled={see}
          >
            <i>
              see all
              {
                <BsArrowRight
                  style={{ fontSize: "18px", color: "#fa2222cc" }}
                />
              }
            </i>
          </button>
        ) : (
          <button
            className="btn btn-light see-all-btn"
            onClick={() => {
              setShowCards(6);
            }}
            disabled={see}
          >
            <i>
              {<BsArrowLeft style={{ fontSize: "18px", color: "#fa2222cc" }} />}
              see less
            </i>
          </button>
        )}
      </div>
    </section>
  );
};
