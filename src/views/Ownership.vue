<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="4" />
    <div>
      <h2>4. Ownership</h2>
      <p>
        Ultimate Benecial Owner /UBO/ is a natural person/s who ultimately owns
        or controls more than 25% of the shares or voting rights in the company.
        It also includes those persons who exercise ultimate effective control
        over a legal person or arrangement. Reference to “ultimately owns or
        controls” and “ultimate effective control” refer to situations in which
        ownership/control is exercised through a chain of ownership or by means
        of control other than direct control. If no such a person exists in the
        company, please ll in the details of a client’s senior management
        members /i.e. managing director, CEO, president etc./.
      </p>
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="3"
      ></el-input-number>
      <h3><i class="el-icon-s-custom"></i> UBO 1</h3>
      <UBO :form="form.ownership.ubos[0]" ref="ubos0" />

      <div v-show="num > 1">
        <h3><i class="el-icon-s-custom"></i>UBO 2</h3>
        <UBO :form="form.ownership.ubos[1]" ref="ubos1" />
      </div>

      <div v-show="num > 2">
        <h3><i class="el-icon-s-custom"></i>UBO 3</h3>
        <UBO :form="form.ownership.ubos[2]" ref="ubos2" />
      </div>
    </div>
    <BackNext :show-back="true" v-on:next="onNext" v-on:back="onBack" />
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
import UBO from "@/components/UBO";
import Tooltip from "@/components/Tooltip";

export default {
  name: "Ownership",
  components: { LayoutCard, Stepper, BackNext, UBO, Tooltip },
  props: ["id", "form"],
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    onNext() {
      const valid0 = this.$refs["ubos0"].validate();
      const valid1 = this.$refs["ubos1"].validate();
      const valid2 = this.$refs["ubos2"].validate();
      Promise.all([valid0, valid1, valid2]).then((results) => {
        const valid =
          results[0] === true &&
          (results[1] === true || this.num < 2) &&
          (results[2] === true || this.num < 3);
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "IPAddress",
            params: { id: this.id },
          });
        } else {
          return false;
        }
      });
    },
    onBack() {
      // přechod na další stránku
      this.$router.push({
        name: "CompanyRepresentative",
        params: { id: this.id },
      });
    },
    handleChange(value) {
      console.log(value);
    },
    submitForm() {
      this.$refs["ubos"].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["ubos"].resetFields();
    },
    //     pridejUbo() {
    //      this.Ubo.push({})
  },
};
</script>

<style>
.popup {
  width: 10px;
  background-color: #e6a23c;
}
.input {
  width: 600px;
  background-color: skyblue;
}
h2 {
  font-size: 18px large;
  text-align: center;
  font-weight: bold;
  color: #303133;
}
p {
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px Medium;
  color: #606266;
}
</style>
