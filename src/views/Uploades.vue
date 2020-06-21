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
    <el-main>
      Please upload the requested documents in this section.
      <br />By clicking on Info you can find document guidelines on each type of requested document.
    </el-main>
    <br />
    <UploadComp
      text="1. Business/commercial register extract"
      :id="id"
      fileType="busines-register-extract"
    />
    <br />
    <UploadComp
      text="2. Copy of ID/Passport - Company representative"
      :id="id"
      fileType="id-representative"
    />
    <br />
    <UploadComp
      text="3. Proof of personal address - Company representative"
      :id="id"
      fileType="poa-representative"
    />
    <br />
    <UploadComp text="4. Copy of ID/Passport - UBO 1" :id="id" fileType="id-ubo1" />
    <br />
    <UploadComp text="5. Proof of personal address - UBO 1" :id="id" fileType="poa-ubo1" />
    <br />
    <UploadComp text="6. Copy of ID/Passport - UBO 2" :id="id" fileType="id-ubo2" />
    <br />
    <UploadComp text="7. Proof of personal address - UBO 2" :id="id" fileType="poa-ubo2" />
    <br />
    <UploadComp text="8. Copy of ID/Passport - UBO 3" :id="id" fileType="id-ubo3" />
    <br />
    <UploadComp text="9. Proof of personal address - UBO 3" :id="id" fileType="poa-ubo3" />
    <br />
    <UploadComp text="10. Official bank yccount statement" :id="id" fileType="bank-statement" />
    <br />
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