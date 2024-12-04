// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Tabs from "./components/Tabs";
// import CampaignsTab from "./components/CampaignsTab";
// import "./App.css";
// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Header Section */}
//         <Header />

//         {/* Tabs Section */}
//         <Tabs />

//         {/* Content Section */}
//         <div className="tab-content">
//           <Routes>
//             <Route path="/upcoming" element={<CampaignsTab type="upcoming" />} />
//             <Route path="/live" element={<CampaignsTab type="live" />} />
//             <Route path="/past" element={<CampaignsTab type="past" />} />
//           </Routes>
//         </div>
//       </div> 
//     </Router>


//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import CampaignsTab from "./components/CampaignsTab";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <Header />

        {/* Tabs Section */}
        <Tabs />

        {/* Content Section */}
        <div className="tab-content">
          <Routes>
            {/* Redirect to /upcoming as the default */}
            <Route path="/" element={<Navigate to="/upcoming" />} />

            {/* Tab Routes */}
            <Route path="/upcoming" element={<CampaignsTab type="upcoming" />} />
            <Route path="/live" element={<CampaignsTab type="live" />} />
            <Route path="/past" element={<CampaignsTab type="past" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
