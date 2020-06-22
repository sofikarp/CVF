<template>
  <div>
    <LayoutCard title>
      <h1>Welcome to the Customer Verification Form!</h1>
      <div class="text">
        As you have been already informed by our Salse Manager, the part of
        <strong>onboarding process</strong> is also submitting the data and
        documents required by our Risk team. We want this process to be as
        smooth as possible. That's why we are using this web application. We
        want this to be as comfortable for you as possible so you do not need to
        fill up the whole form in one session. You just need to fill the
        particular step and submit the button
        <strong
          style="color: #409eff"
        >Next</strong>. At this point your data
        will be saved until your next visit.
      </div>
      <el-collapse v-model="activeName" accordion class="text">
        <el-collapse-item
          title="Q: Why do we need all of these documents and information?"
          name="1"
        >
          <div>
            In order for us to enable you the merchant services, our company and
            its payment partners Stripe and Adyen must comply with relevant
            <strong>Anti Money Laundering (AML)</strong> laws designated to
            combat money laundering and terrorist financing. These laws force us
            to proactively monitor our clients and apply certain measures and
            procedures to effectively comply with those rules. For these
            purposes, we have to go through the
            <strong>Know Your Customer (KYC)</strong> process and collect
            certain information and documents about our customers and their
            business.
            <br />These requirements are market standards across the
            financial industry and apply to banks, insurance companies, exchange
            institutions, electronic money institutions and other financial
            undertakings including the payment service providers.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="Q: What are we going to do with these documents/information?"
          name="2"
        >
          <div>
            We will securely store them in our CRM system for the purposes of a potential audit
            from regulators. Also in accordance with the ‘Stripe/Adyen merchant agreement’ we
            shall submit those information/ documents to Stripe/Adyen via internal API.
          </div>
        </el-collapse-item>

        <el-collapse-item
          title="Q: Are we going to share this information with third parties?"
          name="3"
        >
          <div>
            Please see the question above. We will only share this information (in accordance
            with the agreement) with Stripe/Adyen and local regulatory authorities (if applicable).
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="Q: Can someone from your company help me gather these items and hand hold me?"
          name="4"
        >
          <div>
            Usually, the requested documents are not publicly available so we will most
            probably be unable to help you with gathering those documents. However, if you are
            unsure about what exactly should be provided for your particular company, please
            hand over your questions to your Sales/Account Manager who will consult it with the
            Compliance department. They will examine your matter closer and will liaise with
            Sales/AM in order to address the answers to your specific questions.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Q: How long does the KYC/ AML process take?" name="5">
          <div>
            This mainly depends on quality and accuracy of the information and documents
            provided by the customers. If all necessary information/documents are provided at
            the outset, and the Compliance team is comfortable with their authenticity, the
            process might take up to 3 days.
            If however the documentation/ information provided by the client is not sufficient or
            there are doubts as to their legitimacy, the Compliance department will have to
            contact Sales/AM in order to obtain additional documents/information from the client.
            The duration of the process then can be extended depending on how quickly the
            client responds.
            Kindly note, every case is different and it is difficult to provide a firm time frame for
            the process. There are many other factors in play like complexity of the case, local or
            legal exceptions, volume of the check, utilization of the analysts etc.
          </div>
        </el-collapse-item>
      </el-collapse>

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
  data() {
    return {
      activeName: null
    };
  },
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
  margin: 20px;
}
@media screen and (max-width: 540px) {
  iframe {
    width: 300px;

    text-align: center;
  }
}
@media screen and (min-width: 540px) and (max-width: 960px) {
  iframe {
    width: 380px;

    text-align: center;
  }
}
</style>
