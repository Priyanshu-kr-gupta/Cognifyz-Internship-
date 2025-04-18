import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import "../Css/home.css"

export default function Home() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const uid = localStorage.getItem("userid");
  const dte = new Date();
  const date = `${dte.getDate()}-${dte.getMonth() + 1}-${dte.getFullYear()}`;
  const backendApi = import.meta.env.VITE_HOST;

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      getContent();
    } else {
      navigate("/login");
    }
  }, []);

  const saveContent = async () => {
    await fetch(`${backendApi}/api/note/saveContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
        date: date,
        content: content,
      }),
    });
  };

  let timeout;
  const debounce = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      saveContent();
    }, 1000);
  };

  const getContent = async () => {
    const respon = await fetch(`${backendApi}/api/note/getNote?date=${date}&uid=${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await respon.json();
    if (result) {
      setContent(result.content);
    } else {
      saveContent(); 
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-[90vh] flex flex-col justify-center items-center diarycontainer relative">
        <div className='diarydate flex items-center gap-4'>
          <div className='w-[10px] h-[10px] p-2 bg-[yellowgreen]' style={{ borderRadius: "50%" }}></div>
          <input value={date} disabled />
        </div>
        <textarea
          className='diary'
          onChange={(e) => {
            setContent(e.target.value);
            debounce();
          }}
          value={content}
        />
      </div>
    </>
  );
}
