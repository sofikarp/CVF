<template>
  <div id="app">
    <el-container>
      <el-main v-if="isLoaded">
        <router-view :form="formData.template" v-on:changed="sendDataToApi" />
      </el-main>
    </el-container>
    <h2>Neveřejný projekt, který provede klienty náročným KYC procesem</h2>
    <h3>Chcete si ho vykoušet?</h3>
    <div class="oko"><img src="./assets/img/oko.gif" /></div>
    <div class="buttons">
      <div class="button">
        <a href="https://cvf.netlify.app/#/new"
          ><el-button type="primary">
            Chci kompletní formulář jako zadavatel</el-button
          ></a
        >
      </div>
      <div class="button">
        <a href="https://cvf.netlify.app/#/guide/5eefa0475b4a6d705e8ea8d8"
          ><el-button type="primary">
            Chci projít formulář jako klient</el-button
          ></a
        >
      </div>
    </div>
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
            companyTaxId: "",
          },
          companyRepresentative: {
            firstName: "",
            lastName: "",
            position: "",
            dateOfBirth: "",
            personalAddress: "",
            email: "",
          },
          ownership: {
            ubos: [
              {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                personalAddress: "",
                shares: "",
              },
              {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                personalAddress: "",
                shares: "",
              },
              {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                personalAddress: "",
                shares: "",
              },
            ],
          },
          ipAddress: "",
        },
      },
    };
  },
  methods: {
    async sendDataToApi() {
      await put(`/verifications/${this.$route.params.id}`, this.formData);
    },
  },
  async mounted() {
    if (this.$route.params.id) {
      const res = await get(`/verifications/${this.$route.params.id}`);
      this.formData = merge(this.formData, res.data);
    }
    this.isLoaded = true;
  },
};
</script>
<style scoped>
#app {
  width: 100%;
}

h2 {
  font-size: 18px large;
  text-align: center;
  font-weight: bold;
  color: #409eff;
  padding-bottom: 20px;
  margin: 40px;
}
.oko {
  text-align: center;

  padding-bottom: 20px;
}
.text {
  color: #303133;
  padding: 0 20px 20px 0;
  margin-left: 40px;
  font-size: 14px;
  line-height: 1.5;
}
h3 {
  font-size: 16px large;
  text-align: center;
  font-weight: bold;
  color: #303133;
}
ul {
  text-align: center;
  font-size: 16px large;
  list-style-type: none;
}
.button {
  text-align: center;
  font-size: 20px large;
  padding: 15px;
}
.buttons {
  display: flex;
  justify-content: space-evenly;

  text-align: center;
  font-size: 20px large;
}