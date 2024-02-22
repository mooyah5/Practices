"use client";
import { useState } from "react";
import styles from "./loginButton.module.scss";
import useTestAuthStore from "@/app/lib/testAuth";

export function LoginButton() {
  const { name, age, setName } = useTestAuthStore();
  const [i, setI] = useState(0);
  function handleLogin() {
    setName("new" + i.toString());
    console.log(name, age);
    setI(i + 1);
  }
  return (
    <>
      <button onClick={handleLogin} className={styles.button}>
        Zustand Login
      </button>
    </>
  );
}
