
// import React, { useState, useEffect } from "react";
// import { IoIosDocument } from "react-icons/io";
// import { HiCurrencyDollar } from "react-icons/hi2";
// import { LuChartNoAxesCombined } from "react-icons/lu";
// import { SlCalender } from "react-icons/sl";
// import DatePicker from "react-datepicker";
// import PricingDialog from "./PricingDialog";
// // Import necessary CSS for the calendar component
// import "react-datepicker/dist/react-datepicker.css";

// function CampaignsTab({ type }) {
//   const [data, setData] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     fetch("campaigns.json")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   function formatDate(dateString) {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   }

//   function getFilteredData() {
//     const currentDate = new Date();
//     const today = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate()
//     );
//     let filteredData = [];

//     switch (type) {
//       case "upcoming":
//         filteredData = data.filter((item) => new Date(item.createdOn) > today);
//         break;
//       case "live":
//         filteredData = data.filter(
//           (item) =>
//             new Date(item.createdOn).toDateString() ===
//             currentDate.toDateString()
//         );
//         break;
//       case "past":
//         filteredData = data.filter((item) => new Date(item.createdOn) < today);
//         break;
//       default:
//         break;
//     }

//     return filteredData.sort(
//       (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
//     );
//   }

//   return (
//     <>
//       <table className="table-auto w-3/4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 text-left border-b">DATE</th>
//             <th className="px-4 py-2 text-left border-b">CAMPAIGN</th>
//             <th className="px-4 py-2 text-left border-b">VIEW</th>
//             <th className="px-4 py-2 text-left border-b">ACTIONS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getFilteredData().map((item, index) => (
//             <tr key={index} className="border-b">
//               <td className="px-4 py-2">{formatDate(item.createdOn)}</td>
//               <td className="px-4 py-2 items-center">
//                 <img
//                   src={item.image_url}
//                   alt={item.name}
//                   className="w-8 h-8 mr-2 inline"
//                 />
//                 {item.name}
//               </td>
//               <td className="px-4 py-2 text-left">
//                 <button
//                   onClick={() => setSelectedItem(item)}
//                   className="flex items-center text-yellow-500"
//                 >
//                   <HiCurrencyDollar className="inline text-xl mr-2" />
//                   View Pricing
//                 </button>
//               </td>
//               <td className="px-4 py-3 flex items-center space-x-4">
//                 <a
//                   href={item.csv}
//                   download
//                   className="flex items-center space-x-2 text-green-500"
//                 >
//                   <IoIosDocument className="text-xl" />
//                   <span>CSV</span>
//                 </a>
//                 <a
//                   href={item.report}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-2 text-orange-500"
//                 >
//                   <LuChartNoAxesCombined className="text-xl" />
//                   <span>Report</span>
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-2 text-blue-500 hover:underline"
//                 >
//                   <SlCalender className="text-xl text-purple-500" />
//                   <span>Schedule Again</span>
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pricing Dialog */}
//       {selectedItem && (
//         <PricingDialog
//           item={selectedItem}
//           onClose={() => setSelectedItem(null)}
//         />
//       )}
//     </>
//   );
// }

// export default CampaignsTab;
import React, { useState, useEffect } from "react";
import { IoIosDocument } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import PricingDialog from "./PricingDialog";
// Import necessary CSS for the calendar component
import "react-datepicker/dist/react-datepicker.css";

function CampaignsTab({ type }) {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("campaigns.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function getFilteredData() {
    const currentDate = new Date();
    const today = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    let filteredData = [];

    switch (type) {
      case "upcoming":
        filteredData = data.filter((item) => new Date(item.createdOn) > today);
        break;
      case "live":
        filteredData = data.filter(
          (item) =>
            new Date(item.createdOn).toDateString() ===
            currentDate.toDateString()
        );
        break;
      case "past":
        filteredData = data.filter((item) => new Date(item.createdOn) < today);
        break;
      default:
        break;
    }

    return filteredData.sort(
      (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
    );
  }

  return (
    <>
      <table className="table-auto w-full sm:w-3/4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b">DATE</th>
            <th className="px-4 py-2 text-left border-b">CAMPAIGN</th>
            <th className="px-4 py-2 text-left border-b">VIEW</th>
            <th className="px-4 py-2 text-left border-b">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredData().map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{formatDate(item.createdOn)}</td>
              <td className="px-4 py-2 flex items-center">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-8 h-8 mr-2 inline"
                />
                {item.name}
              </td>
              <td className="px-4 py-2 text-left">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center text-yellow-500"
                >
                  <HiCurrencyDollar className="inline text-xl mr-2" />
                  View Pricing
                </button>
              </td>
              <td className="px-4 py-3 flex flex-wrap items-center space-x-4">
                <a
                  href={item.csv}
                  download
                  className="flex items-center space-x-2 text-green-500"
                >
                  <IoIosDocument className="text-xl" />
                  <span>CSV</span>
                </a>
                <a
                  href={item.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-orange-500"
                >
                  <LuChartNoAxesCombined className="text-xl" />
                  <span>Report</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-blue-500 hover:underline"
                >
                  <SlCalender className="text-xl text-purple-500" />
                  <span>Schedule Again</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pricing Dialog */}
      {selectedItem && (
        <PricingDialog
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}

export default CampaignsTab;
