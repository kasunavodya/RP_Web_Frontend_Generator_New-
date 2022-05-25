import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Dashboard - route
import Dashboard from "./components/dashboard";

//1st interface - route
import ConvertXmlToJsonPage from "./components/pages/convertXmlToJson"; //working path
import BrowsePage from "./components/pages/browsePage"; //1st try

//2nd interface - route
import PreDefineStylesPage from "./components/pages/selectPreDefineStyles"; //working path
import AddStylesPage from "./components/pages/addStyles";//1st try

//3rd interface - route
import DisplayResultPage from "./components/pages/displayResult";

//4th interface - route
import DownloadCodePage from "./components/pages/downloadCode";

//Sample React code - route
import SampleReactCodePage from "./components/pages/sampleReactCode";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/addStyles" element={<AddStylesPage />} />
            <Route path="/displayResult" element={<DisplayResultPage />} />
            <Route path="/downloadCode" element={<DownloadCodePage />} />
            <Route path="/sampleReactCode" element={<SampleReactCodePage />} />
            <Route path="/convertXmltoJson" element={<ConvertXmlToJsonPage />} />
            <Route path="/preDefineStyles" element={<PreDefineStylesPage />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
