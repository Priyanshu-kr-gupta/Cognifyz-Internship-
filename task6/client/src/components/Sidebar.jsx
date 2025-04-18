import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSort } from "react-icons/md";
import "../Css/sidebar.css";

export default function Sidebar() {
  const [data, setData] = useState([]);
  const uid = localStorage.getItem("userid");
  const [date, setDate] = useState("");

  const backendApi = import.meta.env.VITE_HOST;

  const getNotes = async () => {
    const respon = await fetch(`${backendApi}/api/note/getAllNote?uid=${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await respon.json();
    const sortedData = result.sort((a, b) => {
      const [da, ma, ya] = a.date.split("-").map(Number);
      const [db, mb, yb] = b.date.split("-").map(Number);
      return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
    });
    
    setData(sortedData);
    // setData(result);
  };

  useEffect(() => {
    const d = new Date();
    setDate(`${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`);
    getNotes();
  }, []);

  return (
    <>
      <label htmlFor="toggle" id="tgl">
        <MdOutlineSort className='text-white' />
      </label>
      <input type="checkbox" id="toggle" style={{ display: "none" }} />
      <div className="drawer">
        <div className='drawerMenu'>
          {[...data].reverse().map((val) => (
            <Link
              to={val.date === date ? "/" : `/diary/${val.date}`}
              key={val._id}
              className={`block w-[90%] text-center py-2 m-2 shrink-0 ${
                val.date === date ? "bg-[#d49e4e] text-white" : "bg-[rgb(250,218,180)] text-black"
              }`}
              onClick={() => {
                document.getElementById("toggle").checked = false;
              }}
            >
              {val.date === date ? "today" : val.date}
            </Link>
          ))}
        </div>
        <div className='extraDrawer'>
          <label htmlFor="toggle"></label>
        </div>
      </div>
    </>
  );
}
