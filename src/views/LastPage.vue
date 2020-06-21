<template>
  <LayoutCard title>
    <div>
      <h1>It's done!</h1>
      <br />Thank you for filling the Customer Verification Form, we will come
      back to you soon.
      <br />

      <i class="el-icon-success"></i>
    </div>
  </LayoutCard>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
export default {
  name: "last-page",
  components: { LayoutCard },
  props: ["id", "form"],
};
</script>
<style scoped>
i {
  color: #67c23a;
  font-size: 72px;
  margin: 40px;
}

div {
  text-align: center;
}
</style>
