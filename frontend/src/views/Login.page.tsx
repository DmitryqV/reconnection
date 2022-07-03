import React, { FC, useState, ChangeEvent } from "react";
import "./styles/Login.style.css";

export const LoginPage: FC = () => {
  const regexp = process.env.NODE_ENV === "production" ? /^([a-z0-9]{10,})$/ : /^([a-z0-9]{1,})$/;

  const [state, setState] = useState({
    login: null,
    password: null,
  });

  const validateLogin = (): boolean => {
    return regexp.test(state.login);
  };

  const validatePassword = (): boolean => {
    return regexp.test(state.password)
  };

  const validation = () => {
    [validateLogin(), validatePassword()].every((el: boolean) => el === true) && (window.location.href = "/m");
  };

  return (
    <section className="login__section">
      <section className="login__form">
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
        <button className="login__submit" type="submit" onClick={validation}>
          Войти
        </button>
      </section>
    </section>
  );
};
