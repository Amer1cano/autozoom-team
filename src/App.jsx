import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import CarDetail from "./pages/CarsPage/Cars-info";
import Cars from "./pages/CarsPage/Cars-Categories";
import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";
import Brands from "./pages/Brands";
import Header from "./pages/Header";

function App() {
	
	return (
		
		<>
			<Navbar/>
			<Header/>
			<Brands/>
			<section className="select-none">
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<Cars/>} />
					<Route path="/carinfo/:id" element={<CarDetail />} />
				</Routes>
			</GlobalContextProvider>
			</section>
			<Services />
		</>
	);
}

export default App;
