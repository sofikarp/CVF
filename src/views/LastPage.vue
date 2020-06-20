<template>
  <LayoutCard title="Last Page">
    <div>
      <p>
        It's done!
        <br />Thank you for filling the Customer Verification Form, we will come back to you soon.
      </p>
    </div>
  </LayoutCard>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
export default {
  name: "last-page",
  components: { LayoutCard },
  props: ["id", "form"]
};
</script>