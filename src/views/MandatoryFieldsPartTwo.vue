<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="2" />
    <div>
      <h2>1. Company Information - part II</h2>
      <!-- Formulář Company representative 2. část-->
      <el-form
        :model="ruleForm3"
        :rules="rules"
        ref="ruleForm3"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- For Adyen.... dulezite info-->
        <el-alert title="For Adyen users only" type="warning" show-icon></el-alert>
        <!-- For Adyen.... otazka-->
        <el-form-item
          label="Would you like to accept and receive multiply currencies?"
          prop="multiplyCurrencies"
        >
          <el-radio-group v-model="ruleForm3.multiplyCurrencies">
            <el-radio label="Yes"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- For Adyen yes.... info-->
        <el-alert
          title
          type="success"
          description="If yes, please provide in next question all bank accounts per accepted currency."
          show-icon
        ></el-alert>
        <br />
      </el-form>
      <!-- Formulář - pro pole s validací number-->

      <el-form
        :model="numberValidateForm2"
        ref="numberValidateForm2"
        :rules="rules"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- Pole IBAN. Validace na number-->
        <el-form-item label="IBAN / Bank Account Number" prop="iban">
          <el-input v-model.number="numberValidateForm2.iban" autocomplete="off"></el-input>
          <el-popover
            placement="top-start"
            type="warning"
            width="200"
            trigger="hover"
            content="If you do not know your IBAN, you can look it up here."
            class="popup"
          >
            <el-button slot="reference">ℹ️</el-button>
          </el-popover>
        </el-form-item>
        <!-- Pole SWIFT. Validace na number-->
        <el-form-item label="Swift / BIC / Routing Number" prop="swift">
          <el-input v-model.number="numberValidateForm2.swift" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- Formular. Validace na vše kromě number-->
      <el-form
        :model="ruleForm4"
        :rules="rules"
        ref="ruleForm4"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- Popover, reaguje na najetí myší-->
        <!-- Pole Bank Currency. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Bank Account Currency" prop="bankAccountCurrency">
          <el-input v-model="ruleForm4.bankAccountCurrency"></el-input>
        </el-form-item>
        <!-- Pole Bank A. Holder - name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Bank Account Holder / Beneficiary name"
          prop="bankAccountBeneficiaryName"
        >
          <el-input v-model="ruleForm4.bankAccountBeneficiaryName"></el-input>
        </el-form-item>
        <!-- Pole Bank A. Holder - address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Bank Account Holder / Beneficiary address"
          prop="bankAccountBeneficiaryAddress"
        >
          <el-input v-model="ruleForm4.bankAccountBeneficiaryAddress"></el-input>
        </el-form-item>

        <!-- validace email -->
        <el-form-item label="Email address for Chargebacks Notifications" prop="emailCharge">
          <el-input v-model="ruleForm4.emailCharge"></el-input>
        </el-form-item>
        <!-- Pole TAX ID. Validace na vyplněnost - nutná min. délka-->
        <el-form-item label="Company TAX ID" prop="companyTaxId">
          <el-input v-model="ruleForm4.companyTaxId"></el-input>
        </el-form-item>
        <br />

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
      numberValidateForm2: {
        num: "",
        iban: "",
        swift: ""
      },
      ruleForm3: {
        multiplyCurrencies: ""
      },
      ruleForm4: {
        bankAccountCurrency: "",
        bankAccountBeneficiaryName: "",
        bankAccountBeneficiaryAddress: "",
        emailCharge: "",
        companyTaxId: "",
        num: ""
      },
      rules: {
        multiplyCurrencies: [
          {
            required: true,
            message: "Please select yes or no",
            trigger: "change"
          }
        ],

        iban: [
          {
            required: true,
            message: "IBAN is required"
          },
          {
            type: "number",
            message: "IBAN must be a number"
          }
        ],
        swift: [
          {
            required: true,
            message: "Swift is required"
          },
          {
            type: "number",
            message: "Swift must be a number"
          }
        ],
        bankCurrency: [
          {
            required: true,
            message: "Please input Bank account Currency",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],

        bankAccountBeneficiaryName: [
          {
            required: true,
            message: "Please input Bank account holder",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],

        bankAccountBeneficiaryAddress: [
          {
            required: true,
            message: "Please input Bank account holder",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        emailCharge: [
          {
            required: true,
            message: "Please inputemail address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        companyTaxId: [
          {
            required: true,
            message: "Please input Company TAX ID",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm3"].validate(valid => {
        if (valid) {
          alert("Please submit!");
        } else {
          console.log("Error submit!!");
          return false;
        }
      });

      this.$refs["numberValidateForm2"].validate(valid => {
        if (valid) {
          alert("Please submit!");
        } else {
          console.log("Error submit!!");
          return false;
        }
      });

      this.$refs["ruleForm4"].validate(valid => {
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
      this.$refs["numberValidateForm2"].resetFields();
      this.$refs["ruleForm4"].resetFields();
    },
    onNext() {
      this.$emit("changed");
      // přechod na další stránku
      this.$router.push({
        name: "CompanyRepresentative",
        params: { id: this.id }
      });
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
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px Medium;
  color: #606266;
}
</style>
