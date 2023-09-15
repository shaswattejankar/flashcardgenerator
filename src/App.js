import "bootstrap/dist/css/bootstrap.min.css";
import CreateFlashcardPage from "./components/CreateFlashcard/CreateFlashcardPage";
import MyFlashcardsPage from "./components/MyFlashcards/MyFlashcardsPage";
import FlashcardDetailsPage from "./components/FlashcardDetails/FlashcardDetailsPage";
import Center from "./components/FlashcardDetails/centerModal";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Define all our routes here with Header as our Common component */}
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<CreateFlashcardPage />} />
          <Route path="flashes/*" element={<MyFlashcardsPage />} />
          <Route path="flash-details/*" element={<FlashcardDetailsPage />} />
          <Route path="modal" element={<Center />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
