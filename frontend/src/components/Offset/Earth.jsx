import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "./earth.jpg";

const Earth = () => {
  const chartRef = useRef();
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      backgroundColor: "",
      globe: {
        baseTexture: earth,
        shading: "lambert",
        atmosphere: {
          show: true,
        },
        light: {
          ambient: {
            intensity: 0.1,
          },
          displacmentQuality: "ultra",
          main: {
            intensity: 1,
          },
        },
      },
      series: [],
    };
    option && myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, []);
  return <div ref={chartRef} style={{ width: "50vw", height: "80vh" }}></div>;
};
export default Earth;
