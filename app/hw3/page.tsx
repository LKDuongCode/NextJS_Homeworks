import axios from "axios";
import React from "react";
const url =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
// todo : hiển thị thông tin thời tiết ssr
/// func call api
const getData = async () => {
  const res = await axios.get(url);
  return res.data;
};
export default async function page() {
  const weather = await getData();
  return (
    <div>
      <h3>Thời tiết</h3>
      <p>Vĩ độ : {weather.latitude}</p>
      <p>Kinh độ : {weather.longitude}</p>
      <p>Nhiệt độ : {weather.current.temperature_2m} °C</p>
      <p>Khoảng cách : {weather.current.interval} s</p>
      <p>Tốc độ gió : {weather.current.wind_speed_10m} km/h</p>
    </div>
  );
}
