import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./HomePage.css";

function HomePage() {
  const [input, setInput] = useState(localStorage.getItem("meetingId") || "");
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/tencent-video-logo-black-and-white.png"
            alt="logo"
            width={50}
            height={50}
          />
          <span>VidoJo Meet</span>
        </motion.div>

        <div className="nav-items">
          <motion.span
            className="time-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {dateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })} •{" "}
            {dateTime.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
          </motion.span>

          <motion.div
            className="profile"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.2 }}
          >
            <span>S</span>
          </motion.div>
        </div>
      </motion.nav>

      <div className="main">
        <div className="left">
          <h1>Video calls and meetings for everyone</h1>
          <p>Connect, collaborate and celebrate from anywhere with VidoJo Meet</p>
          <div className="buttons">
            <motion.button className="new-meeting" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              ➕ New meeting
            </motion.button>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter a name or link" />
            <motion.button onClick={submitHandler} className="join" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Join
            </motion.button>
          </div>
        </div>
        <div className="right">
          <div className="carousel">
            <img
              src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
              alt="Illustration"
            />
            <p>
              <b>Get a link that you can share</b>
              <br />
              Click <b>New meeting</b> to get a link that you can send to people
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
