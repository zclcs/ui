import { http } from "@/utils/http";
import { ListResult, PageResult } from "./types";

export const getImageCode = (randomString: String) => {
  return http.request<any>("get", "/code", {
    params: { randomStr: randomString }
  });
};

/** 获取用户管理分页列表 */
export const getUserPage = (data?: object) => {
  return http.request<PageResult>("get", "/system/user", { params: data });
};

/** 获取角色管理分页列表 */
export const getRolePage = (data?: object) => {
  return http.request<PageResult>("get", "/system/role", { params: data });
};

/** 获取部门管理分页列表 */
export const getDeptPage = (data?: object) => {
  return http.request<PageResult>("get", "/system/dept", { params: data });
};

/** 获取部门管理列表 */
export const getDeptList = (data?: object) => {
  return http.request<ListResult>("get", "/system/dept/list", { params: data });
};
