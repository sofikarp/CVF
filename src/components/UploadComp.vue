<template>
  <div>
    <p>{{ text }}</p>
    <br />
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="`${process.env.VUE_APP_API_URL}/files/upload/${id}/${fileType}`"
      :file-list="fileList"
    >
      <el-button type="primary" @click="submitUpload">
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
      fileList: []
    };
  }
};
</script>