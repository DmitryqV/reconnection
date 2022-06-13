import React, { FC, useState, ChangeEvent } from "react";
import "./styles/Login.style.css";

export const LoginPage: FC = () => {
  const [state, setState] = useState({
    login: null,
    password: null,
  });

  return (
    <section className="login__section">
      <form className="login__form">
        <p className="login__title">Авторизация</p>
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, login: e.target.value })
          }
          className="login__input"
          placeholder="Логин"
          type="text"
        />
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, password: e.target.value })
          }
          className="login__input"
          placeholder="Пароль"
          type="password"
        />
        <button className="login__submit" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
};
