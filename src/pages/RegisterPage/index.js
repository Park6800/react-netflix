import React from 'react'
import './Register.css'

export default function index() {
  return (
    <div className='side'>
      <div className='Banner'>
        <div className='title'>
          영화와 시리즈를 <br /> 무제한으로.
        </div>
        <div className='message_1'>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </div>
        <div className='message_2'>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
        </div>
        <input
          type='text' 
          placeholder="E-Mail 을 입력하세요."
          maxLength="30"/>
      </div>
    </div>
  )
}