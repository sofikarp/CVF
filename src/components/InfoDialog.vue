<template>
  <div class="info-dialog">
    <i class="el-icon-info" @click="dialogVisible = true"></i>

    <el-dialog
      :title="title"
      :width="width"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >Close</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "info-dialog",
  props: ["title", "width"],
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
  },
};
</script>
<style scoped>
.info-dialog {
  display: inline-block;
  margin-left: 10px;
}

i {
  cursor: pointer;
  font-size: 20px;
  color: rgba(64, 158, 255, 0.95);
}
</style>
