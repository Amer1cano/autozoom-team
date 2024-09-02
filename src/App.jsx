import { Route, Routes } from "react-router-dom";
import Cars from "./pages/CarsPage/Cars-Categories";
import { GlobalContextProvider } from "./context/global-context";
import CarDetail from "./pages/CarsPage/Cars-Info";

function App() {
	return (
		<section className="select-none">
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<Cars />} />
					<Route path="/carinfo/:id" element={<CarDetail />} />
				</Routes>
			</GlobalContextProvider>
		</section>
	);
}

export default App;
