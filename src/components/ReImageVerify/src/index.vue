<script setup lang="ts">
import { watch } from "vue";
import { useImageVerify } from "./hooks";

defineOptions({
  name: "ReImageVerify"
});

interface Props {
  random?: string;
  url?: string;
}

interface Emits {
  (e: "update:random", random: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  random: "",
  url: ""
});

const emit = defineEmits<Emits>();

const { domRef, random, url, setRandom, getImgCode } = useImageVerify();

watch(
  () => props.random,
  newValue => {
    setRandom(newValue);
  }
);

watch(random, newValue => {
  emit("update:random", newValue);
});

defineExpose({ getImgCode });
</script>

<template>
  <img
    ref="domRef"
    :src="url"
    width="120"
    height="40"
    class="cursor-pointer"
    @click="getImgCode"
  />
</template>
