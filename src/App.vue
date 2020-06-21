<template>
  <div id="app">
    <el-container>
      <el-main v-if="isLoaded">
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
      isLoaded: false,
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
    if (this.$route.params.id) {
      const res = await get(`/verifications/${this.$route.params.id}`);
      this.formData = res.data;
      this.isLoaded = true;
    }
  }
};
</script>
<style scoped>
#app {
  width: 100%;
}
</style>