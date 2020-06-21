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
      <h2>
        <i class="el-icon-s-custom"></i>
      </h2>

      <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="First Name" prop="ownership.ubos.firstName">
        <el-input v-model="form.ownership.ubos.firstName"></el-input>
      </el-form-item>
      <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Last Name" prop="ownership.ubos.lastName">
        <el-input v-model="form.ownership.ubos.lastName"></el-input>
      </el-form-item>
      <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Title or Position" prop="ownership.ubos.title">
        <el-input v-model="form.ownership.ubos.title"></el-input>
      </el-form-item>
      <!-- Pole Date typ picker. Validace na vyplněnost - nutná min. délka-->

      <el-form-item label="Date of birth" required prop="ownership.ubos.dateOfBirth">
        <el-date-picker
          placeholder="Pick a date"
          v-model="form.ownership.ubos.dateOfBirth"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
      <el-form-item label="Personal Address" prop="ownership.ubos.personalAddress">
        <el-input v-model="form.ownership.ubos.personalAddress"></el-input>
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
        prop="ownership.ubos.shares"
      >
        <el-input v-model.number="form.ownership.ubos.shares" autocomplete="off"></el-input>
      </el-form-item>

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
      num: 1,
      rules: {
        ownership: {
          ubos: {
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