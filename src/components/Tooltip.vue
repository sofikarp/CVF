<template>
  <el-popover
    placement="top-start"
    trigger="hover"
    :width="width"
    :title="title"
    :content="content"
  >
    <small class="tooltip" slot="reference">{{ question }}</small>
  </el-popover>
</template>
<script>
export default {
  name: "tooltip",
  props: ["title", "content", "question", "width"],
};
</script>
<style scoped>
.tooltip {
  color: #409eff;
  cursor: pointer;
  font-size: 20px;
  display: inline-block;
  margin-left: 6px;
}
</style>
