<template>
  <el-row justify="end">
    <el-col :span="4">
      <el-button type="primary">
        Upload
        <el-icon class="el-icon--right">
          <Upload />
        </el-icon>
      </el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">Cards</el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Upload } from "@element-plus/icons-vue";

export default defineComponent({
  name: "Contracts",
  components: {
    Upload,
  },
});
</script>

<style scoped></style>
