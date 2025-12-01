import React from "react";

export default function Login() {
  return (
    <>
      <div></div>
      <div className="container_login">
        <div className="title bebas-neue-regular">Login</div>

        <div className="uname bebas-neue-regular">
          <label htmlFor="uname"><b>Username</b></label>
        </div>

        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          id="uname"
          required
        />

        <div className="uname bebas-neue-regular">
          <label htmlFor="psw"><b>Password</b></label>
        </div>

        <div className="uname-2 bebas-neue-regular">
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
        </div>

        <button type="submit">Login</button>

        <span className="bebas-neue-regular">
          New here?{" "}
          <a
            className="link-2"
            href="https://pminoneu.github.io/sudokumockpage/register_page/"
          >
            Register
          </a>
        </span>
      </div>
    </>
  );
}