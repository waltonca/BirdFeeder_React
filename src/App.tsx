import "./App.css";
import Forecast from "./components/Forecast";
import LatestImage from "./components/LatestImage";
import Header from "./components/Header";
import SensorsData from "./components/SensorsData";
import TemperatureToday from "./components/TemperautreToday";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <section className="body">
                <LatestImage />
                <TemperatureToday />
                <SensorsData />
                <Forecast />
            </section>
            <Footer />
        </>
    );
}

export default App;
