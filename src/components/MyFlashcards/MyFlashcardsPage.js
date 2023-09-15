import React from "react";
import "./MyFlashcardsPage.css";
import { Route, Routes } from "react-router-dom";
import { CardData } from "../../features/CardData";
import FlashcardDetailsPage from ".././FlashcardDetails/FlashcardDetailsPage";

// Page 2: To show flashcard groups
const MyFlashcardsPage = () => {
  return (
    <>
      <div className="container container-flash">
        <CardData />
      </div>

      <Routes>
        <Route path="/flash-details" element={<FlashcardDetailsPage />} />
      </Routes>
    </>
  );
};

export default MyFlashcardsPage;
