<template>
  <div>
    <el-button v-on:click="$emit('back')" v-if="showBack" type="primary" size="medium" plain>Back</el-button>
    <el-button v-on:click="$emit('next')" class="next" type="primary" size="medium">Next</el-button>
  </div>
</template>
<script>
export default {
  name: "back-next",
  // props: ["showBack"]
  props: {
    showBack: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
div {
  display: flex;
  margin-top: 20px;
}

.next {
  margin-left: auto;
}
</style>