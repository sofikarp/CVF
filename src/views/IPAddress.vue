<template>
  <LayoutCard title="IP Address">
    <Stepper :active="5" />
    <div>
      <p>
        For added security, we will need your IP ddress to certify this form. You can find your IP address HERE.
        <br />Please do not forget to add in the "." - do, the format should be for example 1000.0.0.1
      </p>

      <!-- <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="ip-address"
          prop="ipAddress"
          :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
        >
          <el-input type="ipAddress" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
          <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
        </el-form-item>
      </el-form>-->
    </div>
    <BackNext :show-back="true" v-on:next="onNext" />
  </LayoutCard>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";

export default {
  name: "ip-address",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],
  methods: {
    onNext() {
      this.$emit("changed");
      // přechod na další stránku
      this.$router.push({ name: "Uploades", params: { id: this.id } });
    }
  }
};
</script>