import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import BrowsePage from "./components/pages/browsePage";
import AddStylesPage from "./components/pages/addStyles";
import DisplayResultPage from "./components/pages/displayResult";
import DownloadCodePage from "./components/pages/downloadCode";
import SampleReactCodePage from "./components/pages/sampleReactCode";
import ConvertXmlToJsonPage from "./components/pages/convertXmlToJson";

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
            <Route path="/convertXmltoJson" element={<ConvertXmlToJsonPage/>} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
