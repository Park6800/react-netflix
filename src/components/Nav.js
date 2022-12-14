import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {

const [show, setShow] = useState(false);
const [searchValue, setSearchValue] = useState("");
const navigate = useNavigate();

useEffect(() => {
    window.addEventListener("scroll", () => {
        console.log('widow.scrollY',window.scrollY);
if(window.scrollY >50) {
    setShow(true);
}else {
    setShow(false);
}
})
    return () => {
        window.removeEventListener("scroll", () => {});
           };
}, []);

const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
};

  return (
    <nav className={`nav ${show && "nav_black"}`}>
    <img 
    alt='Netflix logo'
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
    className='nav_logo'
    onClick={() => window.location.href=("http://localhost:3000/react-netflix/")}
    />

    <input 
        value={searchValue} 
        onChange={handleChange} 
        className='nav__input' 
        type='text' 
        placeholder="영화를 검색해주세요."/>
    
    <a href='/react-netflix/LoginPage'
    className='nav_Login'
    alt="로그인 페이지 이동"
    >
        로그인
    </a>
    </nav>
  );
}
