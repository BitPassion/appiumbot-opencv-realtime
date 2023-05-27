import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../Layout";

function Dashboard() {
  const history = useNavigate();
  const location = useLocation();
  const [leftTime, setLeftTime] = useState(() => {
    const storedLeftTime = localStorage.getItem("leftTime");
    if (storedLeftTime) {
      return parseInt(storedLeftTime);
    } else {
      return location.state * 60;
    }
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime((prevLeftTime) => {
        if (prevLeftTime === 0) {
          clearInterval(intervalId); // Stop the timer when leftTime == 0
          history("/login");
          localStorage.clear();
        }
        return prevLeftTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem("leftTime", leftTime.toString());
  }, [leftTime]);

  const formatTime = (timeInSecs) => {
    const days = Math.floor(timeInSecs / 3600 / 24);
    const hours = Math.floor((timeInSecs / 3600) % 24);
    const minutes = Math.floor((timeInSecs % 3600) / 60);
    const seconds = timeInSecs % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      <Layout>
        <div className="text-center text-6xl mt-20 text-white">
          {formatTime(leftTime)}
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;