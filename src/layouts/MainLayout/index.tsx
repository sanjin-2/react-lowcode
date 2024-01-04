import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Spin } from "antd";
import { useLoadUserData, useNavPage } from "@/hooks";
import styles from "./index.module.scss";
import Logo from "@/components/Logo";
import UserInfo from "@/components/UserInfo";

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
  const { waitingUserData } = useLoadUserData();
  useNavPage(waitingUserData);
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content>
          {waitingUserData ? (
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <Spin />
            </div>
          ) : (
            <Outlet />
          )}
        </Content>
      </Layout>
      <Footer className={styles.footer}>低代码问卷 &copy;2023. Created by curry</Footer>
    </Layout>
  );
};

export default MainLayout;
