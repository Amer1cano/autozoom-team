import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import Cars from "./pages/CarsPage/Cars-Home";
import CarDetail from "./pages/CarsPage/Cars-info";
import CarsRent from "./pages/CarsPage/Cars-Rent";

function App() {
	return (
		<section className="select-none">
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<Cars />} />
					<Route path="/carinfo/:id" element={<CarDetail />} />
					<Route path="/cars/:id" element={<CarsRent />} />
				</Routes>
			</GlobalContextProvider>
		</section>
	);
}

export default App;
