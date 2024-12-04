// import React from "react";
// import { NavLink } from "react-router-dom";

// function Tabs() {
//   return (
//     <nav className="flex justify-center space-x-8 py-4 bg-gray-50 shadow-sm">
//       <NavLink
//         to="/upcoming"
//         className={({ isActive }) =>
//           `text-lg font-medium transition-colors duration-300 ${
//             isActive ? "text-yellow-600 underline" : "text-gray-600 hover:text-yellow-500"
//           }`
//         }
//       >
//         Upcoming Campaigns
//       </NavLink>
//       <NavLink
//         to="/live"
//         className={({ isActive }) =>
//           `text-lg font-medium transition-colors duration-300 ${
//             isActive ? "text-yellow-600 underline" : "text-gray-600 hover:text-yellow-500"
//           }`
//         }
//       >
//         Live Campaigns
//       </NavLink>
//       <NavLink
//         to="/past"
//         className={({ isActive }) =>
//           `text-lg font-medium transition-colors duration-300 ${
//             isActive ? "text-yellow-600 underline" : "text-gray-600 hover:text-yellow-500"
//           }`
//         }
//       >
//         Past Campaigns
//       </NavLink>
//     </nav>
//   );
// }

// export default Tabs;
import React from "react";
import { NavLink } from "react-router-dom";

function Tabs() {
  return (
    <div className="tabs flex justify-around bg-gray-200 p-4">
      <NavLink
        to="/upcoming"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded bg-blue-500 text-white"
            : "px-4 py-2 rounded bg-gray-300"
        }
      >
        Upcoming
      </NavLink>
      <NavLink
        to="/live"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded bg-blue-500 text-white"
            : "px-4 py-2 rounded bg-gray-300"
        }
      >
        Live
      </NavLink>
      <NavLink
        to="/past"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded bg-blue-500 text-white"
            : "px-4 py-2 rounded bg-gray-300"
        }
      >
        Past
      </NavLink>
    </div>
  );
}

export default Tabs;
