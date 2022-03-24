<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Document name</span>
        <el-button class="button" type="text">Operation button</el-button>
      </div>
    </template>
    <div>Document info</div>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 300px;
  margin: 3px;
}
</style>
