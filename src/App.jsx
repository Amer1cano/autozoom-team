import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import Cars from "./pages/CarsPage/Cars-Home";
import CarDetail from "./pages/CarsPage/Cars-info";
import CarsRent from "./pages/CarsPage/Cars-Rent";

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
					<Route path="/" element={<Cars />} />
					<Route path="/carinfo/:id" element={<CarDetail />} />
					<Route path="/cars/:id" element={<CarsRent />} />
				</Routes>
			</GlobalContextProvider>
			</section>
			<Services />
		</>
	);
}

export default App;
