<template>
  <LayoutCard title="IP Address">
    <Stepper :active="5" />
    <div>
      <p>
        For added security, we will need your IP ddress to certify this form. You can find your IP address
        <a href="https://whatismyipaddress.com/" target="_blank">HERE</a>.
        <br />Please do not forget to add in the "." - do, the format should be for example 1000.0.0.1
      </p>
    </div>

    <BackNext :show-back="true" v-on:next="onNext" v-on:back="onBack" />
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
    },
    onBack() {
      // přechod na další stránku
      this.$router.push({ name: "Ownership", params: { id: this.id } });
    }
  }
};
</script>