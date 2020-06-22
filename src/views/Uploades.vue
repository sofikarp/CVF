<template>
  <LayoutCard title>
    <Stepper :active="6" />
    <h2>Uploades</h2>
    <div class="text">
      Please <strong>upload the requested documents</strong> in this section.
      <br />By clicking on Info you can find document guidelines on each type of
      requested document.
      <br />
    </div>
    <el-alert
      title="● Maximum file size is 15mb.
        ● Documents can be in .png, .jpg, or .pdf format.
        ● Documents must be large enough and clear to read."
      type="warning"
      show-icon
    ></el-alert>

    <br />
    <UploadComp
      text="1. Business/commercial register extract"
      :id="id"
      file-type="busines-register-extract"
      :info-dialog-image-src="require('@/assets/img/cvf-register.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="2. Copy of ID/Passport - Company representative"
      :id="id"
      file-type="id-representative"
      :info-dialog-image-src="require('@/assets/img/cvf-id.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="3. Proof of personal address - Company representative"
      :id="id"
      file-type="poa-representative"
      :info-dialog-image-src="require('@/assets/img/cvf-poa.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="4. Copy of ID/Passport - UBO 1"
      :id="id"
      file-type="id-ubo1"
      :info-dialog-image-src="require('@/assets/img/cvf-id.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="5. Proof of personal address - UBO 1"
      :id="id"
      file-type="poa-ubo1"
      :info-dialog-image-src="require('@/assets/img/cvf-poa.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="6. Copy of ID/Passport - UBO 2"
      :id="id"
      file-type="id-ubo2"
      :info-dialog-image-src="require('@/assets/img/cvf-id.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="7. Proof of personal address - UBO 2"
      :id="id"
      file-type="poa-ubo2"
      :info-dialog-image-src="require('@/assets/img/cvf-poa.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="8. Copy of ID/Passport - UBO 3"
      :id="id"
      file-type="id-ubo3"
      :info-dialog-image-src="require('@/assets/img/cvf-id.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="9. Proof of personal address - UBO 3"
      :id="id"
      file-type="poa-ubo3"
      :info-dialog-image-src="require('@/assets/img/cvf-poa.png')"
      info-dialog-width="700px"
    />
    <br />
    <UploadComp
      text="10. Official bank account statement"
      :id="id"
      file-type="bank-statement"
      :info-dialog-image-src="require('@/assets/img/cvf-bank.png')"
      info-dialog-width="720px"
    />
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
      this.$router.push({
        name: "LastPage",
        params: { id: this.id },
      });
    },
    onBack() {
      this.$router.push({ name: "IPAddress", params: { id: this.id } });
    },
  },
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
h2 {
  font-size: 18px large;
  text-align: center;
  font-weight: bold;
  color: #409eff;
  padding-bottom: 20px;
}
h3 {
  font-size: 16px large;
  text-align: left;
  font-weight: bold;
  color: #409eff;
}
.text {
  color: #303133;
  padding: 0 30px 20px 0;
  font-size: 14px;
  line-height: 1.5;
  margin-left: 40px;
}
</style>
