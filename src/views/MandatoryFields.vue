<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="1" />
    <div>
      <h2>Company Information - part I</h2>
      <el-main
        >Nějaký text, který vysvětlí, co a jak vyplnit.....koho se údaje týkají
        atd. A že jsou to povinná pole atd....</el-main
      >
      <!-- Formulář-->

      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm1"
        label-width="300px"
        class="demo-ruleForm"
        label="top"
      >
        <!-- Pole Official Company name. Validace na vyplněnost - nutná min. délka řetězce-->
        <el-form-item
          label="Official Company name"
          prop="mandatoryFields.companyName"
        >
          <el-input v-model="form.mandatoryFields.companyName"></el-input>
        </el-form-item>
        <!-- Pole Property Name. Validace na vyplněnost - nutná min. délka řetězce-->
        <el-form-item label="Property Name" prop="mandatoryFields.propertyName">
          <el-input v-model="form.mandatoryFields.propertyName"></el-input>
          <br />
          <!-- Tooltip, reaguje na najetí myší-->

          <el-tooltip
            class="item"
            effect="light"
            content="Doing business as"
            placement="top-start"
          >
            <el-button>ℹ️ What is Property name?</el-button>
          </el-tooltip>
        </el-form-item>

        <!-- Pole Company number. Validace na number-->

        <el-form-item
          label="Company Registration Number"
          prop="mandatoryFields.registrationNumber"
        >
          <el-input
            v-model.number="form.mandatoryFields.registrationNumber"
            autocomplete="off"
          ></el-input>
          <Tooltip
            title="For Australia"
            content="ABN - Australian Business Number"
            question=" ℹ️ Info"
            width="300"
          />
        </el-form-item>

        <!-- Pole Official Company Registred Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Company Registred Address"
          prop="mandatoryFields.registeredAddress"
        >
          <el-input v-model="form.mandatoryFields.registeredAddress"></el-input>
        </el-form-item>
        <!-- Pole Trading Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Trading Address"
          prop="mandatoryFields.tradingAddress"
        >
          <el-input v-model="form.mandatoryFields.tradingAddress"></el-input>
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
        <el-form-item label="Website" prop="mandatoryFields.website">
          <el-input v-model="form.mandatoryFields.website"></el-input>
          <Tooltip
            title="Format"
            content="Fill in using the whole url: http://www.xxxxx.com"
            question="Info"
            width="300"
          />
        </el-form-item>
        <br />
        <!-- button -->

        <BackNext :show-back="true" v-on:next="onNext" v-on:back="onBack" />
      </el-form>
    </div>
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
import Tooltip from "@/components/Tooltip";

export default {
  name: "MandatoryFields",
  components: { LayoutCard, Stepper, BackNext, Tooltip },
  props: ["id", "form"],
  data() {
    return {
      rules: {
        mandatoryFields: {
          companyName: [
            {
              required: true,
              message: "Please input Official Company name",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],
          propertyName: [
            {
              required: true,
              message: "Please input Property name",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],
          registrationNumber: [
            {
              required: true,
              message: "Company Registration Number  is required",
            },
            {
              type: "number",
              message: "Company Registration Number must be a number",
            },
          ],

          registeredAddress: [
            {
              required: true,
              message: "Please input Company Registred Address",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],
          tradingAddress: [
            {
              required: true,
              message: "Please input Trading Address",
              trigger: "change",
            },
            {
              min: 1,
              max: 50,
              message: "Length should be min 1",
              trigger: "change",
            },
          ],
          website: [
            {
              type: "url",
              required: true,
              message: "Please input correct URL",
              trigger: "change",
            },
          ],
        },
      },
    };
  },
  methods: {
    onNext() {
      this.$refs["ruleForm1"].validate(async (valid) => {
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "MandatoryFieldsPartTwo",
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
        name: "RegionMerchantProvider",
        params: { id: this.id },
      });
    },
    resetForm() {
      this.$refs["ruleform1"].resetFields();
    },
  },
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
