import { ContentTypeEnum } from "@/enums/httpEnum";
import { http } from "@/utils/http";

export type UserResult = {
  /** 用户信息 */
  user_info: UserInfo;
  /** `token` */
  access_token: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refresh_token: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires_in: number;
};

export type UserInfo = {
  username: string;
  roles: Array<string>;
  authorities: Array<string>;
};

export type RefreshTokenResult = {
  /** `token` */
  access_token: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refresh_token: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires_in: number;
};

/** 登录 */
export const getLogin = (params?: object, data?: object) => {
  return http.request<UserResult>("post", "/auth/oauth2/token", {
    params,
    headers: {
      authorization: "Basic emNsY3M6MTIzNDU2",
      "Content-Type": ContentTypeEnum.FORM_URLENCODED
    },
    data
  });
};

/** 刷新token */
export const refreshTokenApi = (params?: object, data?: object) => {
  return http.request<UserResult>("post", "/auth/oauth2/token", {
    params,
    headers: {
      authorization: "Basic emNsY3M6MTIzNDU2",
      "Content-Type": ContentTypeEnum.FORM_URLENCODED
    },
    data
  });
};
