<template>
  <el-header>
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-icon :style="{ marginTop: '10px' }" :size="40">
        <files />
      </el-icon>
      <el-menu-item
        id="my-documents-button"
        @click="goToRoute('contracts.list')"
        index="1"
        >Contracts</el-menu-item
      >
      <el-menu-item index="2" @click="goToRoute('contacts.list')"
        >Contacts</el-menu-item
      >
      <el-menu-item class="menu-logout-button" index="3">Logout</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Files } from "@element-plus/icons-vue";
import { Router, useRouter } from "vue-router";

export default defineComponent({
  name: "TheHeader",
  components: {
    Files,
  },
  setup() {
    const router: Router = useRouter();

    const activeIndex = ref("1");

    const goToRoute = (name: string) => {
      router.push({ name });
    };

    return {
      goToRoute,
      activeIndex,
    };
  },
});
</script>

<style scoped>
.menu-logout-button {
  position: absolute;
  right: 0px;
}

#my-documents-button {
  margin-left: 10px;
}
</style>
