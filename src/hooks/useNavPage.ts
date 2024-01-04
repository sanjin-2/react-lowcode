import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetUserInfo from "./useGetUserInfo";
import {
  isLoginOrRegister,
  isNoNeedUserInfo,
  MANAGE_INDEX_PATHNAME,
  LOGIN_PATHNAME,
} from "@/router/index";

function useNavPage(waitingUserData: boolean) {
  const { username } = useGetUserInfo();
  const { pathname } = useLocation(); // useLocation 获取当前页面的路径、查询参数和hash值等信息
  const nav = useNavigate();

  useEffect(() => {
    // useEffect 用于在函数中进行副作用操作如（数据获取、订阅、事件监听等），第二个参数是一个数组，作用是告诉useEffect，只有里面的参数改变才执行
    if (waitingUserData) return;

    // 已经登录了
    if (username) {
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_INDEX_PATHNAME);
      }
      return;
    }

    // 未登录
    if (isNoNeedUserInfo(pathname)) {
      return;
    } else {
      nav(LOGIN_PATHNAME);
    }
  }, [waitingUserData, username, pathname]);
}

export default useNavPage;
