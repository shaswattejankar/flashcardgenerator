import React from "react";
import { Container } from "react-bootstrap";
import "./CreateFlashcardPage.css";
import { FormikForm } from "./FormikForm";

// page 1: To create Flashcards
const CreateFlashcardPage = () => {
  return (
    <>
      <Container className="container2">
        <FormikForm />
      </Container>
    </>
  );
};

export default CreateFlashcardPage;
