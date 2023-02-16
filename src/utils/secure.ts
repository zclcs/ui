import * as CryptoJS from "crypto-js";

/**
 *加密处理
 */
export const encryption = params => {
  const { data, type, param } = params;
  const result = JSON.parse(JSON.stringify(data));
  if (type === "Base64") {
    param.forEach(ele => {
      result[ele] = btoa(result[ele]);
    });
  } else {
    param.forEach(ele => {
      const data = result[ele];
      const key = CryptoJS.enc.Latin1.parse(params.key);
      const iv = key;
      // 加密
      const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.NoPadding
      });
      result[ele] = encrypted.toString();
    });
  }
  return result;
};
