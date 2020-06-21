<template>
  <div>
    <el-form
      :model="form"
      ref="ubos"
      :rules="rules"
      label-width="300px"
      class="demo-ruleForm"
      label="top"
    >
      <!-- Formulář---->

      <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="First Name" prop="firstName">
        <el-input v-model="form.firstName"></el-input>
      </el-form-item>
      <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="form.lastName"></el-input>
      </el-form-item>
      <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Title or Position" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <!-- Pole Date typ picker. Validace na vyplněnost - nutná min. délka-->

      <el-form-item label="Date of birth" required prop="dateOfBirth">
        <el-date-picker
          placeholder="Pick a date"
          v-model="form.dateOfBirth"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Personal Address" prop="personalAddress">
        <el-input v-model="form.personalAddress"></el-input>
        <!-- Popover, reaguje na najetí myší-->
        <Tooltip
          title="Don't forget!"
          content="Include post code/ZIP and the country"
          question="ℹ️"
          width="300"
        />
      </el-form-item>

      <!-- Total -->
      <!-- Pole procenta pro jednotlive UBO. Validace na number-->

      <el-form-item label="Amount of shares" prop="shares">
        <el-input v-model.number="form.shares" autocomplete="off"></el-input>
        <Tooltip
          title="Format of the field"
          content="Total % of shares / voting rights in the company"
          question="ℹ️"
          width="300"
        />
      </el-form-item>

      <br />
    </el-form>
  </div>
</template>

<script>
import Tooltip from "../components/Tooltip";
export default {
  name: "UBO",
  components: { Tooltip },
  props: ["id", "form"],
  methods: {
    validate() {
      const result = new Promise((resolve) => {
        this.$refs["ubos"].validate(resolve);
      });
      return result;
    },
  },
  data() {
    return {
      num: 1,
      ownership: {
        ubos: [
          {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            personalAddress: "",
            shares: "",
          },
          {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            personalAddress: "",
            shares: "",
          },
          {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            personalAddress: "",
            shares: "",
          },
        ],
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Please input First name",
            trigger: "blur",
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur",
          },
        ],

        lastName: [
          {
            required: true,
            message: "Please input Last name",
            trigger: "blur",
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur",
          },
        ],
        title: [
          {
            required: true,
            message: "Please input Title or position",
            trigger: "blur",
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur",
          },
        ],

        dateOfBirth: [
          {
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        personalAddress: [
          {
            required: true,
            message: "Please input Personal address",
            trigger: "blur",
          },
          {
            min: 1,
            max: 100,
            message: "Length should be min 1",
            trigger: "blur",
          },
        ],

        shares: [
          {
            required: true,
            message: "Total % of shares is required",
          },
          {
            type: "number",
            message: "Total % of shares must be a number",
          },
        ],
      },
    };
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
