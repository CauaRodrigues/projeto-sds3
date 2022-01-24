import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";

const App = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<h1 className="text-primary">Hello There</h1>

				<DataTable />
			</div>
			<Footer />
		</>
	);
};

export default App;
