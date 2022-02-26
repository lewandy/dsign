<template>
  <el-header>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-icon :style="{ marginTop: '10px' }" :size="40">
        <files />
      </el-icon>
      <el-menu-item id="my-documents-button" index="1">My Documents</el-menu-item>
      <el-menu-item index="2">Contacts</el-menu-item>
      <el-menu-item class="menu-logout-button" index="3">Logout</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Files } from "@element-plus/icons-vue"

export default defineComponent({
  name: 'TheHeader',
  components: {
    Files
  },
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    return {
      activeIndex,
      handleSelect
    }
  }
})
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