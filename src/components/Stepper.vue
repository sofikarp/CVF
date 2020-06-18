<template>
  <el-steps class="stepper" :active="active" finish-status="success">
    <el-step title="Step 1" description="Region & Merchant Provider"></el-step>
    <el-step title="Step 2" description="Mandatory Fields 1/2"></el-step>
    <el-step title="Step 3" description="Mandatory Fields 2/2"></el-step>
    <el-step title="Step 4" description="Company Representative"></el-step>
    <el-step title="Step 5" description="Ownership"></el-step>
    <el-step title="Step 6" description="IP Address"></el-step>
    <el-step title="Step 7" description="Document Uploads"></el-step>
  </el-steps>
</template>
<script>
export default {
  name: "stepper",
  props: ["active"]
};
</script>
<style scoped>
.stepper {
  margin-bottom: 40px;
}
</style>