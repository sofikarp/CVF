<template>
  <LayoutCard title="New CVF">
    <el-form label-position="top" label-width="100px" :model="form" :rules="rules" ref="form">
      <el-form-item label="Property" prop="property">
        <el-input v-model="form.property"></el-input>
      </el-form-item>
      <el-form-item label="Identificator" prop="identificator">
        <el-input v-model="form.identificator"></el-input>
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Create</el-button>
      </el-form-item>
    </el-form>
  </LayoutCard>
</template>
<script>
import LayoutCard from "@/components/LayoutCard";
export default {
  name: "create",
  components: { LayoutCard },
  data() {
    return {
      form: { property: "", identificator: "", email: "" },
      rules: {
        property: [
          {
            required: true,
            message: "This field is mandatory",
            trigger: "change"
          }
        ],
        identificator: [
          {
            required: true,
            message: "This field is mandatory",
            trigger: "change"
          }
        ],
        email: [
          {
            required: true,
            message: "This field is mandatory",
            trigger: "change"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("ok");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>