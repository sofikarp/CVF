<template>
  <div>
    <p>
      {{ text }}
      <InfoDialog :title="infoDialogTitle" :width="infoDialogWidth">
        <div class="text-center">
          <img :src="infoDialogImageSrc" />
        </div>
      </InfoDialog>
    </p>

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
import InfoDialog from "@/components/InfoDialog";
import { backend } from "@/services/axios";
export default {
  name: "uploadComp",
  components: { InfoDialog },
  props: [
    "text",
    "id",
    "fileType",
    "infoDialogTitle",
    "infoDialogImageSrc",
    "infoDialogWidth",
  ],
  data() {
    return {
      fileList: [],
    };
  },
  computed: {
    url() {
      return `${backend}/files/upload/${this.id}/${this.fileType}`;
    },
  },
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
</style>
