import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserStateType = {
  username: string;
  nickname: string;
};

const INIT_STATE: UserStateType = { username: "", nickname: "" };
// 使用createSlice方法创建一个slice。每一个slice里面包含了reducer和actions，实现模块化的封装
export const userSlice = createSlice({
  // 命名空间
  name: "user",
  // state数据的初始值
  initialState: INIT_STATE,
  // 定义的action。由于内置了immutable插件，可以直接使用赋值的方式进行数据的改变
  reducers: {
    loginReducer: (state: UserStateType, action: PayloadAction<UserStateType>) => {
      // 第一个参数 state为当前state中的数据
      // 第二个参数 action为 {payload: x x, type: xx} payload 为传过来的新参数值 type 为action触发类型
      return action.payload; // 设置 username nickname 到 redux store
      // 用不到 immer
    },
    logoutReducer: () => INIT_STATE,
  },
});

export const { loginReducer, logoutReducer } = userSlice.actions;

export default userSlice.reducer;
