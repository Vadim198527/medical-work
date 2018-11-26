import React from 'react'
import './LoginForm.scss'
import Field from "../Field/Field";

const form = () =>{
   return (
      <form>
         <Field  label="Логин" bora="Введите логин" top={100}/>
         <Field label="Пароль" bora="Введите пароль" top={200}/>
         <button>Отправить</button>
      </form>
   )
}

export default form