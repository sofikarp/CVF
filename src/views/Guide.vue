<template>
  <div>
    <LayoutCard title="Customer Verification Form">
      <div>
        <p>
          Welcome to the Customer Verification!
          <br />As you have been already informed by our Salse Manager, the part of onboarding process is also submitting data and documents required by our Risk team. We want this process to be as smooth as possible. That's why we are using this web application.
          <br />
          <br />We want this to be as comfortable for you as possible so you do not need to fill up the whole form in one session. You just need to fill the particular step and submit the button Next. At this point your data will be saved until your next visit.
        </p>
      </div>
      <section class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vLeC6khWzpM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <div class="buttonDiv">
        <BackNext :show-back="false" v-on:next="onNext" />
      </div>
    </LayoutCard>
  </div>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
import BackNext from "@/components/BackNext";
export default {
  name: "guide",
  components: { LayoutCard, BackNext },
  props: ["id"],
  methods: {
    onNext() {
      this.$router.push({
        name: "RegionMerchantProvider",
        params: { id: this.id }
      });
    }
  }
};
</script>
<style scoped>
.video {
  text-align: center;
}

iframe {
  border: 3px solid #409eff;
  border-radius: 4px;
}

.buttonDiv {
  display: flex;
  margin-top: 20px;
}

.nextButton {
  margin-left: auto;
}
</style>