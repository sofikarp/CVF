<template>
  <el-popover
    placement="top-start"
    trigger="hover"
    :width="width"
    :title="title"
    :content="content"
  >
    <small class="tooltip" slot="reference"
      ><i class="el-icon-info"></i>
    </small>
  </el-popover>
</template>
<script>
export default {
  name: "tooltip",
  props: ["title", "content", "width"],
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
i {
  cursor: pointer;
  font-size: 18px;
  color: rgba(64, 158, 255, 0.95);
}
</style>
