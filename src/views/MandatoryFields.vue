<template>
  <LayoutCard>
    <Stepper :active="1" />
    <div>
      <h2>Company Information - part I</h2>
      <div class="text">
        Information about your company and real estate will be filled in here.
        For more information hover over the info icon.
      </div>
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
        <el-form-item prop="mandatoryFields.propertyName">
          <span slot="label">
            Property Name
            <Tooltip
              title="What is property name?"
              content="Name of the hotel or property"
              width="300"
            />
          </span>
          <el-input v-model="form.mandatoryFields.propertyName"></el-input>
        </el-form-item>

        <!-- Pole Company number. Validace na number-->

        <el-form-item prop="mandatoryFields.registrationNumber">
          <span slot="label">
            Company Registration Number
            <Tooltip
              title="For Australia"
              content="ABN - Australian Business Number"
              width="300"
            />
          </span>
          <el-input
            v-model.number="form.mandatoryFields.registrationNumber"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <!-- Pole Official Company Registred Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item
          label="Company Registered Address"
          prop="mandatoryFields.registeredAddress"
        >
          <el-input v-model="form.mandatoryFields.registeredAddress"></el-input>
        </el-form-item>
        <!-- Pole Trading Address. Validace na vyplněnost - nutná min. délka-->
        <el-form-item prop="mandatoryFields.tradingAddress">
          <span slot="label">
            Trading Address
            <Tooltip
              title="What is trading/business address?"
              content="Location from where the company conduts its business, can also be the address of the hotel or property"
              width="500"
            />
          </span>
          <el-input v-model="form.mandatoryFields.tradingAddress"></el-input>
        </el-form-item>
        <!-- validace website -->
        <el-form-item prop="mandatoryFields.website">
          <span slot="label">
            Website
            <Tooltip
              title="Required Format"
              content="Fill in using the whole url: http://www.xxxxx.com"
              width="300"
            />
          </span>
          <el-input v-model="form.mandatoryFields.website"></el-input>
        </el-form-item>
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

<style scoped>
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
  color: #409eff;
  padding-bottom: 20px;
}
.text {
  color: #303133;
  padding: 0 20px 20px 0;

  font-size: 14px;
  line-height: 1.5;
}
</style>
