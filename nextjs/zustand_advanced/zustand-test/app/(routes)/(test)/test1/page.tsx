"use client";

import styles from "./test1.module.scss";

export default function Test1() {
  return (
    <>
      <div className={styles.header}>SubHeader</div>
      <div>Test1</div>
      <div className={styles.inputs}>
        <input className={styles.input1} type="text"></input>
        <input className={styles.input2} type="number"></input>
      </div>
    </>
  );
}
