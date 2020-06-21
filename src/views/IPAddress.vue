<template>
  <LayoutCard title="IP Address">
    <Stepper :active="5" />
    <p>
      For added security, we will need your IP ddress to certify this form. You can find your IP address
      <a
        href="https://whatismyipaddress.com/"
        target="_blank"
      >HERE</a>.
    </p>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="IP Address" prop="ipAddress">
        <el-input v-model="form.ipAddress"></el-input>
        <Tooltip
          title="How to format IP Address"
          content="Please do not forget to add in the '.' - do, the format should be for example XXX.XXX.XXX.XXX"
          question="Info"
          width="500"
        />
      </el-form-item>
    </el-form>

    <BackNext :show-back="true" v-on:next="onNext" v-on:back="onBack" />
  </LayoutCard>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
import Tooltip from "@/components/Tooltip";

export default {
  name: "ip-address",
  components: { LayoutCard, Stepper, BackNext, Tooltip },
  props: ["id", "form"],
  data() {
    const validateIpAddress = (rule, value, callback) => {
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          value
        )
      ) {
        callback();
      } else {
        callback(new Error("Please input valid IP Address"));
      }
    };
    return {
      rules: {
        ipAddress: [
          {
            required: true,
            message: "Please input IP Address",
            trigger: "change"
          },
          {
            validator: validateIpAddress,
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    onNext() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "Uploades",
            params: { id: this.id }
          });
        } else {
          return false;
        }
      });
    },
    onBack() {
      // přechod na další stránku
      this.$router.push({ name: "Ownership", params: { id: this.id } });
    }
  }
};
</script>