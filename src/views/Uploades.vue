<template>
  <LayoutCard title>
    <Stepper :active="6" />
    <!-- <el-form class="formular">
      <h2>6. Upload</h2>
      <el-main>
        Please upload here the documents requested above:
        You can nd guidelines on each type of requested document here.
      </el-main>
      <div slot="tip" class="el-upload__tip"></div>
      <el-alert
        title="Jpg/png files with a size less than 500kb. ● Documents can be in .png, .jpg, or .pdf format
      ● Documents must be large enough and clear to read"
        type="warning"
    show-icon-->
    <!-- ></el-alert> -->
    <br />
    <UploadComp text="ahoj" :id="id" fileType="busines-register-extract" />
    <BackNext v-on:back="onBack" v-on:next="onNext" />
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
import UploadComp from "@/components/UploadComp";
export default {
  name: "Uploades",
  components: { LayoutCard, Stepper, BackNext, UploadComp },
  props: ["id", "form"],

  methods: {
    onNext() {
      // přechod na další stránku
      this.$router.push({
        name: "LastPage",
        params: { id: this.id }
      });
    },
    onBack() {
      // přechod na další stránku
      this.$router.push({ name: "IPAddress", params: { id: this.id } });
    },
    submitUpload() {
      this.$refs.upload.submit();
    }
  },
  handleRemove(file, fileList) {
    console.log(file, fileList);
  },
  handlePreview(file) {
    console.log(file);
  }
};
</script>

<style scoped>
.quest {
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px Medium;
  color: #606266;
}
p {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px Medium;
  color: #606266;
  border: solid 0.5px #e4e7ed;
  padding: 10px;
  border-radius: 4px;
}
ul {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px Medium;
  color: #606266;
}
.formular {
  margin: 30px;
}
</style>