<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="4" />
    <div>
      <h2>4. Ownership</h2>
      <p>
        Ultimate Benecial Owner /UBO/ is a natural person/s who ultimately owns or controls more than 25% of the shares or
        voting rights in the company. It also includes those persons who exercise ultimate effective control over a legal person or
        arrangement. Reference to “ultimately owns or controls” and “ultimate effective control” refer to situations in which
        ownership/control is exercised through a chain of ownership or by means of control other than direct control.
        If no such a person exists in the company, please ll in the details of a client’s senior management members /i.e. managing
        director, CEO, president etc./.
      </p>
      <el-form
        :model="ruleForm3"
        ref="ruleForm3"
        :rules="rules"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <el-form-item label="Ubo" prop="num">
          <el-input-number v-model="ruleForm3.num" @change="handleChange" :min="1" :max="3">></el-input-number>
        </el-form-item>

        <br />
        <el-alert
          title="If there is no ownership higher than 25%, please ll in 'N/A'"
          type="warning"
          show-icon
        ></el-alert>

        <!-- Formulář---->
        <h2>
          <i class="el-icon-s-custom"></i> UBO 1
        </h2>

        <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="First Name" prop="firstName">
          <el-input v-model="ruleForm3.firstName"></el-input>
        </el-form-item>
        <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Last Name" prop="lastName">
          <el-input v-model="ruleForm3.lastName"></el-input>
        </el-form-item>
        <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Title or Position" prop="title">
          <el-input v-model="ruleForm3.title"></el-input>
        </el-form-item>
        <!-- Pole Date typ picker. Validace na vyplněnost - nutná min. délka-->

        <el-form-item label="Date of birth" required prop="dateBirth">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="ruleForm3.dateBirth"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Personal Address" prop="personalAddress">
          <el-input v-model="ruleForm3.personalAddress"></el-input>
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
        <!-- Pole procenta pro jednotliv8 UBO. Validace na number-->

        <el-form-item label="Total % of shares/voting rights in the company" prop="shares">
          <el-input v-model.number="ruleForm3.shares" autocomplete="off"></el-input>
        </el-form-item>

        <br />
        <h2>
          <i class="el-icon-s-custom"></i> UBO 2
        </h2>

        <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="First Name" prop="firstName">
          <el-input v-model="ruleForm3.firstName"></el-input>
        </el-form-item>
        <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Last Name" prop="lastName">
          <el-input v-model="ruleForm3.lastName"></el-input>
        </el-form-item>
        <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Title or Position" prop="title">
          <el-input v-model="ruleForm3.title"></el-input>
        </el-form-item>
        <!-- Pole Date typ picker. Validace na vyplněnost - nutná min. délka-->

        <el-form-item label="Date of birth" required prop="dateBirth">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="ruleForm3.dateBirth"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Personal Address" prop="personalAddress">
          <el-input v-model="ruleForm3.personalAddress"></el-input>
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
        <!-- Shares ubo3 number. Validace na number-->

        <el-form-item label="Total % of shares/voting rights in the company" prop="shares">
          <el-input v-model.number="ruleForm3.shares" autocomplete="off"></el-input>
        </el-form-item>

        <h2>
          <i class="el-icon-s-custom"></i> UBO 3
        </h2>
        <!-- Pole First name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="First Name" prop="firstName">
          <el-input v-model="ruleForm3.firstName"></el-input>
        </el-form-item>
        <!-- Pole Last Name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Last Name" prop="lastName">
          <el-input v-model="ruleForm3.lastName"></el-input>
        </el-form-item>
        <!-- Pole Title. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Title or Position" prop="title">
          <el-input v-model="ruleForm3.title"></el-input>
        </el-form-item>
        <!-- Pole Date typ picker. Validace na vyplněnost - nutná min. délka-->

        <el-form-item label="Date of birth" required prop="dateBirth">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="ruleForm3.dateBirth"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <!-- Pole Personal Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Personal Address" prop="personalAddress">
          <el-input v-model="ruleForm3.personalAddress"></el-input>
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
        <!-- Pole Company number. Validace na number-->

        <el-form-item label="Total % of shares/voting rights in the company" prop="shares">
          <el-input v-model.number="ruleForm3.shares" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm3')">Create</el-button>
          <el-button @click="resetForm('ruleForm3')">Reset</el-button>
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
  name: "Ownership",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],
  data() {
    return {
      ruleForm3: {
        num: "",
        shares: "",
        firstName: "",
        lastName: "",
        title: "",
        dateBirth: "",
        personalAddress: ""
      },
      rules: {
        num: [
          {
            required: true,
            message: "Please input",
            trigger: "blur"
          },
          {
            type: "number",
            message: "Total % of shares must be a number"
          }
        ],
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
    };
  },
  methods: {
    onNext() {
      this.$refs["ruleForm3"].validate(async valid => {
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "IPAddress",
            params: { id: this.id }
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
        params: { id: this.id }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    submitForm() {
      this.$refs["ruleForm3"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["ruleForm3"].resetFields();
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