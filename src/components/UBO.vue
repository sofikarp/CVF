<template>
  <div>
    xxx
    <el-form
      :model="form"
      ref="ubo"
      :rules="rules"
      label-width="300px"
      class="demo-ruleForm"
      label="top"
    >
      <!-- Formulář---->
      <h2>
        <i class="el-icon-s-custom"></i>
      </h2>

      <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="First Name" prop="mandatoryFields.UBO.firstName">
        <el-input v-model="firstName"></el-input>
      </el-form-item>
      <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Last Name" prop="mandatoryFields.UBO.lastName">
        <el-input v-model="lastName"></el-input>
      </el-form-item>
      <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Title or Position" prop="mandatoryFields.UBO.title">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <!-- Pole Date typ picker. Validace na vyplněnost - nutná min. délka-->

      <el-form-item label="Date of birth" required prop="mandatoryFields.UBO.dateBirth">
        <el-date-picker
          type="date"
          placeholder="Pick a date"
          v-model="dateBirth"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Personal Address" prop="mandatoryFields.UBO.personalAddress">
        <el-input v-model="personalAddress"></el-input>
        <!-- Popover, reaguje na najetí myší-->
        <el-popover
          placement="top-start"
          type="warning"
          width="200"
          trigger="hover"
          content="Please include post code and country"
          class="popup"
        >
          <el-button slot="reference">ℹ️</el-button>
        </el-popover>
      </el-form-item>

      <!-- Total -->
      <!-- Pole procenta pro jednotlive UBO. Validace na number-->

      <el-form-item
        label="Total % of shares/voting rights in the company"
        prop="mandatoryFields.UBO.shares"
      ></el-form-item>

      <br />

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Create</el-button>
        <el-button @click="resetForm('form')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UBO",

  props: ["id", "form"],
  data() {
    return {
      ubo: {
        num: "",
        shares: "",
        firstName: "",
        lastName: "",
        title: "",
        dateBirth: "",
        personalAddress: ""
      },
      rules: {
        mandatoryFields: {
          UBO: {
            firstName: [
              {
                required: true,
                message: "Please input First name",
                trigger: "blur"
              },
              {
                min: 1,
                max: 50,
                message: "Length should be min 1",
                trigger: "blur"
              }
            ],
            lastName: [
              {
                required: true,
                message: "Please input Last name",
                trigger: "blur"
              },
              {
                min: 1,
                max: 50,
                message: "Length should be min 1",
                trigger: "blur"
              }
            ],
            title: [
              {
                required: true,
                message: "Please input Title or position",
                trigger: "blur"
              },
              {
                min: 1,
                max: 50,
                message: "Length should be min 1",
                trigger: "blur"
              }
            ],

            dateBirth: [
              {
                type: "date",
                required: true,
                message: "Please pick a date",
                trigger: "change"
              }
            ],
            personalAddress: [
              {
                required: true,
                message: "Please input Personal address",
                trigger: "blur"
              },
              {
                min: 1,
                max: 100,
                message: "Length should be min 1",
                trigger: "blur"
              }
            ],

            shares: [
              {
                required: true,
                message: "Total % of shares is required"
              },
              {
                type: "number",
                message: "Total % of shares must be a number"
              }
            ]
          }
        }
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
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