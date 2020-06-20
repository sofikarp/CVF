<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="4" />
    <div>
      <h2>4. Ownership</h2>
      <p>
        Ultimate Benecial Owner /UBO/ is a natural person/s who ultimately owns or controls more than 25% of the shares or
        voting rights in the company. It also includes those persons who exercise ultimate effective control over a legal person or
        arrangement. Reference to “ultimately owns or controls” and “ultimate effective control” refer to situations in which
        ownership/control is exercised through a chain of ownership or by means of control other than direct control.
        If no such a person exists in the company, please ll in the details of a client’s senior management members /i.e. managing
        director, CEO, president etc./.
      </p>pred
      <UBO :form="form" />test
    </div>
    <BackNext :show-back="true" v-on:next="onNext" v-on:back="onBack" />
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
import UBO from "@/components/UBO";

export default {
  name: "Ownership",
  components: { LayoutCard, Stepper, BackNext, UBO },
  props: ["id", "form"],
  data() {
    return {
      ruleForm3: {
        num: "",
        shares: "",
        firstName: "",
        lastName: "",
        title: "",
        dateBirth: "",
        personalAddress: ""
      },
      rules: {
        num: [
          {
            required: true,
            message: "Please input",
            trigger: "blur"
          },
          {
            type: "number",
            message: "Total % of shares must be a number"
          }
        ],
        firstName: [
          {
            required: true,
            message: "Please input First name",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Please input Last name",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: "Please input Title or position",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],

        dateBirth: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        personalAddress: [
          {
            required: true,
            message: "Please input Personal address",
            trigger: "blur"
          },
          {
            min: 1,
            max: 100,
            message: "Length should be min 1",
            trigger: "blur"
          }
        ],

        shares: [
          {
            required: true,
            message: "Total % of shares is required"
          },
          {
            type: "number",
            message: "Total % of shares must be a number"
          }
        ]
      }
    };
  },
  methods: {
    onNext() {
      this.$refs["ruleForm3"].validate(async valid => {
        if (valid) {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "IPAddress",
            params: { id: this.id }
          });
        } else {
          return false;
        }
      });
    },
    onBack() {
      // přechod na další stránku
      this.$router.push({
        name: "CompanyRepresentative",
        params: { id: this.id }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    submitForm() {
      this.$refs["ruleForm3"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["ruleForm3"].resetFields();
    }
  }
};
</script>

<style>
.popup {
  width: 10px;
  background-color: #e6a23c;
}
.input {
  width: 600px;
  background-color: skyblue;
}
h2 {
  font-size: 18px large;
  text-align: center;
  font-weight: bold;
  color: #303133;
}
p {
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px Medium;
  color: #606266;
}
</style>