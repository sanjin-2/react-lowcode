import React, { FC } from "react";
import styles from "./index.module.scss";
import EditCanvas from "./EditCanvas";
import { useLoadQuestionData } from "@/hooks";
import LeftPanel from "./LeftPanel";
const Edit: FC = () => {
  const { loading } = useLoadQuestionData();
  return (
    <div className={styles.container}>
      <div>header</div>
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main}>
            <div className={styles["canvas-wrapper"]}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
