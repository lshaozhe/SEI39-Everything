/** @format */

import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<>
			<Homepage />
			<Footer />
		</>
	);
}

export default App;
