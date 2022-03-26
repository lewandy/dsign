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
        >Documents</el-menu-item
      >
      <el-menu-item index="2" @click="goToRoute('contacts.list')"
        >Contacts</el-menu-item
      >
      <el-dropdown class="menu__logout-dropdown">
        <div id="avatar-container">
          <span>ldilone</span>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="User">My Account</el-dropdown-item>
            <el-dropdown-item :icon="Warning">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Files, User, Warning } from "@element-plus/icons-vue";
import { Router, useRouter } from "vue-router";

const router: Router = useRouter();

const activeIndex = ref("1");

const goToRoute = (name: string) => {
  router.push({ name });
};
</script>

<style scoped>
.menu__logout-dropdown {
  position: absolute;
  height: 100% !important;
  right: 0px;
  cursor: pointer;
}

#avatar-container {
  display: flex;
  align-items: center;
  height: 100%;
}

#avatar-container span {
  font-weight: bold;
  margin-right: 10px;
}

#my-documents-button {
  margin-left: 10px;
}
</style>
