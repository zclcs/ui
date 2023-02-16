import { buildUUID } from "@pureadmin/utils";
import { ref, onMounted } from "vue";

const { VITE_PUBLIC_URL_PATH } = import.meta.env;

/**
 * 绘制图形验证码
 * @param width - 图形宽度
 * @param height - 图形高度
 */
export const useImageVerify = () => {
  const domRef = ref<any>();
  const random = ref("");
  const url = ref("");

  function setRandom(uuid: string) {
    random.value = uuid;
  }

  function getImgCode() {
    if (!domRef.value) return;
    random.value = buildUUID();
    url.value = VITE_PUBLIC_URL_PATH + "/code?randomStr=" + random.value;
  }

  onMounted(() => {
    getImgCode();
  });

  return {
    domRef,
    random,
    url,
    setRandom,
    getImgCode
  };
};
