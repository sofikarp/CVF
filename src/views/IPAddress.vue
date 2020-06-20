<template>
  <LayoutCard title="IP Address">
    <Stepper :active="4" />
    <BackNext :show-back="false" v-on:next="onNext" />
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