<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="0" />
    <el-form class="form" label-position="top" label-width="100px" :model="form">
      <div class="text-center">
        <label class="label">Choose your region</label>
        <el-radio-group v-model="form.region" size="medium">
          <el-radio-button label="World"></el-radio-button>
          <el-radio-button label="USA"></el-radio-button>
          <el-radio-button label="Australia"></el-radio-button>
        </el-radio-group>
        <label class="label mt-50">Choose your merchant provider</label>
        <el-radio-group v-model="form.merchantProvider" size="medium">
          <el-radio-button label="Stripe"></el-radio-button>
          <el-radio-button label="Adyen"></el-radio-button>
        </el-radio-group>
      </div>
      <BackNext :show-back="false" v-on:next="onNext" />
    </el-form>
  </LayoutCard>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";

export default {
  name: "property-metadata",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],
  methods: {
    onNext() {
      this.$emit("changed");
      //this.$router.push({ name: "", params: { id: this.id } }); přechod na další stránku
    }
  }
};
</script>
<style scoped>
.label {
  display: block;
  padding-bottom: 0.5em;
  font-size: 20px;
}

.text-center {
  text-align: center;
  padding: 40px;
}

.mt-50 {
  margin-top: 50px;
}
</style>