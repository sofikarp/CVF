<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="1" />
    <div>
      <h2>1. Company Information - part I</h2>
      <el-main>Nějaký text, který vysvětlí, co a jak vyplnit.....koho se údaje týkají atd. A že jsou to povinná pole atd....</el-main>
      <!-- Formulář--vše kromě polí s validací type number-->

      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm1"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- Pole Official Company name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Official Company name" prop="companyName">
          <el-input v-model="ruleForm1.companyName"></el-input>
        </el-form-item>
        <!-- Pole Property Name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Property Name" prop="propertyName">
          <el-input v-model="ruleForm1.propertyName"></el-input>
          <br />
          <!-- Tooltip, reaguje na najetí myší-->

          <el-tooltip class="item" effect="light" content="Doing business as" placement="top-start">
            <el-button>ℹ️ What is Property name?</el-button>
          </el-tooltip>
        </el-form-item>
      </el-form>
      <!-- Formulář - pro pole s validací number-->
      <!-- Pole Company number. Validace na number-->
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        :rules="rules"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <el-form-item label="Company Registration Number" prop="registrationNumber">
          <el-input v-model.number="numberValidateForm.registrationNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- Formulář--vše kromě polí s validací type number-->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- Pole Official Company Registred Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Company Registred Address" prop="registeredAddress">
          <el-input v-model="ruleForm.registeredAddress"></el-input>
        </el-form-item>
        <!-- Pole Trading Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Trading Address" prop="tradingAddress">
          <el-input v-model="ruleForm.tradingAddress"></el-input>
          <br />
          <!-- Popover, reaguje na najetí myší-->
          <el-popover
            placement="top-start"
            type="warning"
            width="200"
            trigger="hover"
            content="`This is the location from where the company conducts its business; it can also be the address of the hotel/property.`"
            class="popup"
          >
            <el-button slot="reference">ℹ️ What is Trading address</el-button>
          </el-popover>
        </el-form-item>
        <!-- validace website -->
        <el-form-item label="Website" prop="website">
          <el-input v-model="ruleForm.website"></el-input>
        </el-form-item>
        <br />
        <!-- button -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
        <BackNext :show-back="false" v-on:next="onNext" />
      </el-form>
    </div>
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";

export default {
  name: "MandatoryFields",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],
  data() {
    return {
      ruleForm1: {
        companyName: "",
        propertyName: ""
      },
      numberValidateForm: {
        registrationNumber: ""
      },
      ruleForm: {
        registeredAddress: "",
        tradingAddress: "",
        website: ""
      },

      rules: {
        companyName: [
          {
            required: true,
            message: "Please input Official Company name",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        propertyName: [
          {
            required: true,
            message: "Please input Property name",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        registrationNumber: [
          {
            required: true,
            message: "Company Registration Number  is required"
          },
          {
            type: "number",
            message: "Company Registration Number must be a number"
          }
        ],

        registeredAddress: [
          {
            required: true,
            message: "Please input Company Registred Address",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        tradingAddress: [
          {
            required: true,
            message: "Please input Trading Address",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        website: [
          {
            type: "url",
            required: true,
            message: "Please input correct URL",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },

  methods: {
    onNext() {
      this.$emit("changed");
      // přechod na další stránku
      this.$router.push({
        name: "MandatoryieldsPartTwo",
        params: { id: this.id }
      });
    },
    submitForm() {
      this.$refs["ruleForm1"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      this.$refs["numberValidateForm"].validate(valid => {
        if (valid) {
          alert("Please submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          alert("Please submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["ruleForm1"].resetFields();
      this.$refs["numberValidateForm"].resetFields();
      this.$refs["ruleForm"].resetFields();
    }
  }
};
</script>

<style>
.item {
  margin: 4px;
}
.top {
  text-align: center;
  color: #606266;
}
.bottom {
  clear: both;
  text-align: center;
}

h2 {
  font-size: 18px large;
  text-align: center;
  font-weight: bold;
  color: #303133;
}
</style>