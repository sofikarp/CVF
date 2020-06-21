<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="2" />
    <div>
      <h2>2. Company Information - part II</h2>
      <!-- Formulář Company representative 2. část-->
      <el-form
        v-if="form.mandatoryFields"
        :model="form"
        :rules="rules"
        ref="ruleForm2"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <el-form-item
          label="Do you accept multiple currencies?"
          prop="form.mandatoryFields.multiplyCurrencies"
          v-if="form.merchantProvider === 'Adyen'"
        >
          <el-radio-group v-model="form.mandatoryFields.multiplyCurrencies">
            <el-radio label="Yes"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- Formulář - pro pole s validací number-->

        <!-- Pole IBAN. Validace na number-->
        <el-form-item
          label="IBAN / Bank Account Number"
          prop="mandatoryFields.iban"
        >
          <el-input
            v-model.number="form.mandatoryFields.iban"
            autocomplete="off"
          ></el-input>
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
        <el-form-item
          label="Swift / BIC / Routing Number"
          prop="mandatoryFields.swift"
        >
          <el-input
            v-model.number="form.mandatoryFields.swift"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <!-- Popover, reaguje na najetí myší-->
        <!-- Pole Bank Currency. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Bank Account Currency"
          prop="mandatoryFields.bankAccountCurrency"
        >
          <el-input
            v-model="form.mandatoryFields.bankAccountCurrency"
          ></el-input>
        </el-form-item>
        <!-- Pole Bank A. Holder - name. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Bank Account Holder / Beneficiary name"
          prop="mandatoryFields.bankAccountBeneficiaryName"
        >
          <el-input
            v-model="form.mandatoryFields.bankAccountBeneficiaryName"
          ></el-input>
        </el-form-item>
        <!-- Pole Bank A. Holder - address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Bank Account Holder / Beneficiary address"
          prop="mandatoryFields.bankAccountBeneficiaryAddress"
        >
          <el-input
            v-model="form.mandatoryFields.bankAccountBeneficiaryAddress"
          ></el-input>
        </el-form-item>

        <!-- validace email -->
        <el-form-item
          label="Email address for Chargebacks Notifications"
          prop="mandatoryFields.emailCharge"
        >
          <el-input v-model="form.mandatoryFields.emailCharge"></el-input>
        </el-form-item>
        <!-- Pole TAX ID. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Company TAX ID"
          prop="mandatoryFields.companyTaxId"
        >
          <el-input v-model="form.mandatoryFields.companyTaxId"></el-input>
        </el-form-item>
        <br />

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
  name: "MandatoryFields",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],
  data() {
    return {
      rules: {
        mandatoryFields: {
          multiplyCurrencies: [
            {
              required: true,
              message: "Please select yes or no",
              trigger: "change",
            },
          ],

          iban: [
            {
              required: true,
              message: "IBAN is required",
            },
            {
              type: "number",
              message: "IBAN must be a number",
            },
          ],
          swift: [
            {
              required: true,
              message: "Swift is required",
            },
            {
              type: "number",
              message: "Swift must be a number",
            },
          ],
          bankAccountCurrency: [
            {
              required: true,
              message: "Please input Bank account Currency",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],

          bankAccountBeneficiaryName: [
            {
              required: true,
              message: "Please input Bank account holder",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],

          bankAccountBeneficiaryAddress: [
            {
              required: true,
              message: "Please input Bank account holder",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],
          emailCharge: [
            {
              required: true,
              message: "Please inputemail address",
              trigger: "change",
            },
            {
              type: "email",
              message: "Please input correct email address",
              trigger: ["change", "change"],
            },
          ],
          companyTaxId: [
            {
              required: true,
              message: "Please input Company TAX ID",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],
        },
      },
    };
  },
  methods: {
    onNext() {
      this.$refs["ruleForm2"].validate(async (valid) => {
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "CompanyRepresentative",
            params: { id: this.id },
          });
        } else {
          return false;
        }
      });
    },

    onBack() {
      // přechod na další stránku
      this.$router.push({ name: "MandatoryFields", params: { id: this.id } });
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
