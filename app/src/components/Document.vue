<template>
  <el-card class="document_card">
    <template #header>
      <div class="document_card_header">
        <span>{{ document.name }}</span>
        <el-button class="button" type="text">View</el-button>
      </div>
    </template>
    <div>{{ document.description }}</div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Document",
  props: ["document"],
});
</script>

<style lang="scss" scoped>
.document_card {
  width: 300px;
  margin: 3px;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
