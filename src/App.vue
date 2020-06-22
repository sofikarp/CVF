<template>
  <div id="app">
    <el-container>
      <el-main v-if="isLoaded">
        <router-view :form="formData.template" v-on:changed="sendDataToApi" />
      </el-main>
    </el-container>
    <div>tttt</div>
  </div>
</template>
<script>
import { get, put } from "@/services/axios";
import merge from "lodash.merge";
export default {
  name: "app",
  data() {
    return {
      isLoaded: false,
      formData: {
        template: {
          property: "",
          identificator: "",
          email: "",
          region: "World",
          merchantProvider: "Stripe",
          mandatoryFields: {
            companyName: "",
            propertyName: "",
            registrationNumber: "",
            registeredAddress: "",
            tradingAddress: "",
            website: "",
            multiplyCurrencies: "",
            iban: "",
            swift: "",
            bankAccountCurrency: "",
            bankAccountBeneficiaryName: "",
            bankAccountBeneficiaryAddress: "",
            companyTaxId: ""
          },
          companyRepresentative: {
            firstName: "",
            lastName: "",
            position: "",
            dateOfBirth: "",
            personalAddress: "",
            email: ""
          },
          ownership: {
            ubos: [
              {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                personalAddress: "",
                shares: ""
              },
              {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                personalAddress: "",
                shares: ""
              },
              {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                personalAddress: "",
                shares: ""
              }
            ]
          },
          ipAddress: ""
        }
      }
    };
  },
  methods: {
    async sendDataToApi() {
      await put(`/verifications/${this.$route.params.id}`, this.formData);
    }
  },
  async mounted() {
    if (this.$route.params.id) {
      const res = await get(`/verifications/${this.$route.params.id}`);
      this.formData = merge(this.formData, res.data);
    }
    this.isLoaded = true;
  }
};
</script>
<style scoped>
#app {
  width: 100%;
}
</style>
