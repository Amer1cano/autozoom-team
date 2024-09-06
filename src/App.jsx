import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";
import Brands from "./pages/Brands";
import Cars from "./Pages/Cars";
import Header from "./pages/Header";

function App() {
	
	return (
		<>
			<Navbar/>
			<Header/>
			<Brands/>
			<Cars />
			<Services />
		</>
	);
}

export default App;
