import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import BookAdd from "./pages/BookAdd/BookAdd";

import "./assets/scss/main.scss";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/book-add" element={<BookAdd />} />
            </Routes>
        </>
    )
}

export default App;