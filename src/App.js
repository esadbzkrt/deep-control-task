import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/Login/Login";
import MapPage from "./pages/Map/MapPage";
import Signup from "./pages/Signup/Signup";
import Header from "./components/Header/Header";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" exact element={<Login/>}/>
                    <Route path="/" exact element={<MapPage/>}/>
                    <Route path="/" exact element={<Signup/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
