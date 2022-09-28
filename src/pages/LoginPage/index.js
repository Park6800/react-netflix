import React from 'react'
import './LoginPage.css'


export default function LoginPage() {
  return (
    <div className='LoginPage'>
        <div className='LoginMenu'>
            <div className='Info'>
                <p className='title'>
                로그인
                </p>
                <input
                    type='text' 
                    placeholder="아이디를 입력해주세요."
                    className='ID_Input'
                    >
                </input>
                <br />
                <input
                     type='text' 
                     placeholder="비밀번호를 입력해주세요."
                     className='PW_Input'
                     >
                </input>
                <br />
                <button type="button"
                    className='login_button'
                    onClick={() => window.location.href=("http://localhost:3000/react-netflix/")}
                    >
                    로그인
                </button>
                <div className='register_move'>Netflix 계정이 없다면? <a href='/react-netflix/register'>지금 회원가입하기.</a>
                <br />
                <br />
                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 자세히 알아보기
                <br />
                <br />
                (아닙니다. 클론 코딩 사이트 입니다.)
                </div>
            </div>
        </div>
    </div>
  )
}
