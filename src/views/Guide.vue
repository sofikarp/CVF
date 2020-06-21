<template>
  <div>
    <LayoutCard title>
      <div class="text">
        <h1>Welcome to the Customer Verification Form!</h1>
        <br />As you have been already informed by our Salse Manager, the part
        of <strong>onboarding process</strong> is also submitting the data and
        documents required by our Risk team. We want this process to be as
        smooth as possible. That's why we are using this web application.
        <br />
        We want this to be as comfortable for you as possible so you do not need
        to fill up the whole form in one session. You just need to fill the
        particular step and submit the button
        <strong style="color: #409eff">Next</strong>. At this point your data
        will be saved until your next visit.
        <br />
        In order for us to enable you the merchant services, our company and its
        payment partners Stripe and Adyen must comply with relevant
        <strong>Anti Money Laundering (AML)</strong> laws designated to combat
        money laundering and terrorist financing. These laws force us to
        proactively monitor our clients and apply certain measures and
        procedures to effectively comply with those rules. For these purposes,
        we have to go through the
        <strong>Know Your Customer (KYC)</strong> process and collect certain
        information and documents about our customers and their business.
        <br />
        These requirements are market standards across the financial industry
        and apply to banks, insurance companies, exchange institutions,
        electronic money institutions and other financial undertakings including
        the payment service providers.
      </div>
      <div class="container">
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
      </div>
      <BackNext :show-back="false" v-on:next="onNext" />
    </LayoutCard>
  </div>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
import BackNext from "@/components/BackNext";
export default {
  name: "guide",
  components: { LayoutCard, BackNext },
  props: ["id", "form"],
  methods: {
    onNext() {
      this.$router.push({
        name: "RegionMerchantProvider",
        params: { id: this.id },
      });
    },
  },
};
</script>
<style scoped>
.video {
  text-align: center;
  padding: 20px;
}
iframe {
  border: 3px solid #409eff;
  border-radius: 4px;
}

.nextButton {
  margin-left: auto;
}

h1 {
  font-size: 22px large;
  text-align: center;
  font-weight: bold;
  color: #409eff;
}
.text {
  font-size: 16px;
  line-height: 1.5;
  margin: 40px;
}
@media screen and (max-width: 768px) {
  iframe {
    width: 390px;
    height: auto;
    text-align: center;
  }
}
</style>
