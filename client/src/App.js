/** @format */

import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CourseInfo from "./pages/mdw/CourseInfo";
import GetInvolved from "./pages/volunteer/GetInvolved";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function App() {
	return (
        <>
            <Navbar />
			<Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/students/courses/financial_education" element={<CourseInfo />} />
                <Route path="/volunteers" element={<GetInvolved />} />
            </Routes>
            <Footer />
		</>
	);
}

export default App;
