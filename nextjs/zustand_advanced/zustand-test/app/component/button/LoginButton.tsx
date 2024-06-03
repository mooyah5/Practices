"use client";
import { useState } from "react";
import styles from "./loginButton.module.scss";
import useTestAuthStore from "@/app/lib/testAuth";

export function LoginButton() {
  const { name, age, setName, setAge } = useTestAuthStore();
  const [i, setI] = useState(0);
  function handleNameChange() {
    setName("new" + i.toString());
    setI(i + 1);
  }
  function handleIncreaseAge() {
    setAge();
  }
  return (
    <>
      <button onClick={handleNameChange} className={styles.button}>
        <h1 className={styles.h1}>Zustand Login</h1>
      </button>
      <button onClick={handleIncreaseAge} className={styles.button}>
        <h1 className={styles.h1}>+</h1>
      </button>
    </>
  );
}
