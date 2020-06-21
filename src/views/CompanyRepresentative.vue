<template>
  <LayoutCard title>
    <Stepper :active="3" />
    <div>
      <h2>2. Company Representative</h2>
      <el-main>
        Please make sure the Agreement is signed by either a director or a
        person that has the authority to bind the company and act on the
        client’s behalf.
      </el-main>
      <!-- Formulář--vše kromě polí s validací type number-->

      <el-form
        v-if="form.companyRepresentative"
        :model="form"
        :rules="rules"
        ref="ruleForm4"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="First Name" prop="companyRepresentative.firstName">
          <el-input v-model="form.companyRepresentative.firstName"></el-input>
        </el-form-item>
        <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Last Name" prop="companyRepresentative.lastName">
          <el-input v-model="form.companyRepresentative.lastName"></el-input>
        </el-form-item>
        <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Title or Position"
          prop="companyRepresentative.title"
        >
          <el-input v-model="form.companyRepresentative.title"></el-input>
        </el-form-item>
        <!-- Pole Date. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Date of Birth"
          required
          prop="companyRepresentative.dateBirth"
        >
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="form.companyRepresentative.dateBirth"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Personal Address"
          prop="companyRepresentative.personalAddress"
        >
          <el-input
            v-model="form.companyRepresentative.personalAddress"
          ></el-input>
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

        <!-- validace email -->
        <el-form-item
          label="Email address"
          prop="companyRepresentative.emailAddress"
        >
          <el-input
            v-model="form.companyRepresentative.emailAddress"
          ></el-input>
        </el-form-item>

        <BackNext :show-back="true" v-on:next="onNext" v-on:back="onBack" />
      </el-form>
    </div>
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
export default {
  name: "CompanyRepresentative",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],
  data() {
    return {
      rules: {
        companyRepresentative: {
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

          dateBirth: [
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
          emailAddress: [
            {
              required: true,
              message: "Please inputemail address",
              trigger: "blur",
            },
            {
              type: "email",
              message: "Please input correct email address",
              trigger: ["blur", "change"],
            },
          ],
        },
      },
    };
  },
  methods: {
    onNext() {
      this.$refs["ruleForm4"].validate(async (valid) => {
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "Ownership",
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
        name: "MandatoryFieldsPartTwo",
        params: { id: this.id },
      });
    },
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
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px Medium;
  color: #606266;
}
</style>
