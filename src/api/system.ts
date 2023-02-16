import { http } from "@/utils/http";

export const getImageCode = (randomString: String) => {
  return http.request<any>("get", "/code", {
    params: { randomStr: randomString }
  });
};
