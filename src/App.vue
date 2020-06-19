<template>
  <div id="app">
    <el-container>
      <el-main>
        <router-view :form="formData.template" v-on:changed="sendDataToApi" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { get, put } from "@/services/axios";
export default {
  name: "app",
  data() {
    return {
      formData: {
        template: {}
      }
    };
  },
  methods: {
    async sendDataToApi() {
      await put(`/verifications/${this.$route.params.id}`, this.formData);
    }
  },
  async mounted() {
    const res = await get(`/verifications/${this.$route.params.id}`);
    this.formData = res.data;
  }
};
</script>
<style scoped>
#app {
  width: 100%;
}
</style>