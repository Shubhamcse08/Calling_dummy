import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import contacts from "./data";
import Main from "./pages/Main";
import Ui from "./components/Ui"; // new Call page
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main contacts={contacts} />} />
        <Route path="/call" element={<Ui />} />
      </Routes>
    </Router>
  );
};

export default App;
