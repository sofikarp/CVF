<template>
  <div>
    <p>{{ text }}</p>
    <br />
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="url"
      :file-list="fileList"
    >
      <el-button type="primary">
        Click to upload
        <i class="el-icon-upload el-icon-right"></i>
      </el-button>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "uploadComp",
  props: ["text", "id", "fileType"],
  data() {
    return {
      fileList: [],
    };
  },
  computed: {
    url() {
      return `${process.env.VUE_APP_API_URL}/files/upload/${this.id}/${this.fileType}`;
    },
  },
};
</script>
