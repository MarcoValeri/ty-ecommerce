import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import BookAdd from "./pages/BookAdd/BookAdd";

import "./assets/scss/main.scss";
import BookEdit from "./pages/BookEdit/BookEdit";
import BookDelete from "./pages/BookDelete/BookDelete";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/book-add" element={<BookAdd />} />
                <Route path="/book-edit/:id" element={<BookEdit />} />
                <Route path="/book-delete/:id" element={<BookDelete />} />
            </Routes>
        </>
    )
}

export default App;