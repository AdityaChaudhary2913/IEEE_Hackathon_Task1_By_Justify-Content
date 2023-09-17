// // import "./styles.css";
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     CO2: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     CO2: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     CO2: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     CO2: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     CO2: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     CO2: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     CO2: 4300,
//     amt: 2100,
//   },
// ];

// const LineChartGraph = () => {
//   return (
//     <LineChart
//       width={350}
//       height={300}
//       data={data}
//       margin={{
//         top: 5,
//         right: 0,
//         left: 0,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />

//       {/* <XAxis dataKey="amt"/> */}
//       {/* <YAxis /> */}
//       <Tooltip />
//       <Line
//         type="monotone"
//         dataKey="CO2"
//         stroke="#8884d8"
//         activeDot={{ r: 8 }}
//       />
//       {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//       <Legend
//         className="Legend"
//         // verticalAlign="top"
//         width={100}
//         layout="vertical"
//         // align="right"
//         iconSize={30}
//       />
//     </LineChart>
//   );
// };
// export default LineChartGraph;
