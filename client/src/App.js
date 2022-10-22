/** @format */

import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CourseInfo from "./pages/mdw/CourseInfo";

function App() {
	return (
		<>
			<Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/students/courses/financial_education" element={<CourseInfo />} />
			</Routes>
		</>
	);
}

export default App;
