import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./pages/create_flashcard/page1";
import Page2 from "./pages/my_flashcards/page2";
import Page3 from "./pages/flashcard_details/page3";
import Center from "./pages/flashcard_details/centerModal";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Page1 />} />
          <Route path="flashes/*" element={<Page2 />} />
          <Route path="flash-details/*" element={<Page3 />} />
          <Route path="modal" element={<Center />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
