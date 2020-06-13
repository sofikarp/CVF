<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card class="card" shadow="hover">
        <div>
          <span>{{title}}</span>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "layout-card",
  props: ["title"]
};
</script>
<style scoped>
.content {
  margin-top: 50px;
}
</style>