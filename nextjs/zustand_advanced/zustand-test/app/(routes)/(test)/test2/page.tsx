"use client";
import styles from "./test2.module.scss";
import useTestAuthStore from "@/app/lib/testAuth";

export default function Test2() {
  const { name, age } = useTestAuthStore();
  return (
    <>
      <div className={styles.header}>SubHeader</div>
      <div>Test2</div>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
}
