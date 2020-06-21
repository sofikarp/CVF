<template>
  <LayoutCard title>
    <div>
      <h1>It's done!</h1>
      <br />
      <div class="text">
        Thank you for filling the Customer Verification Form, we will come back
        to you soon.
      </div>
      <br />
      <img src="./img/done.gif" />
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
img {
  padding: 30px;
  text-align: center;
}
.text {
  color: #303133;
  padding: 0 20px 20px 0;
  font-size: 14px;
  line-height: 1.5;
}
h1 {
  font-size: 20px large;
  text-align: center;
  font-weight: bold;
  color: #409eff;
  padding-bottom: 20px;
}
</style>
