import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";

import Books from "./pages/Books/Books";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
            </Routes>
        </>
    )
}

export default App;