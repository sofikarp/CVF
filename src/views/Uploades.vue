<template>
  <LayoutCard title="Region & Merchant Provider">
    <Stepper :active="6" />
    <div>
      <el-form class="formular">
        <h2>6. Upload</h2>
        <el-main>
          Please upload here the documents requested above:
          You can nd guidelines on each type of requested document here.
        </el-main>
        <div slot="tip" class="el-upload__tip"></div>
        <el-alert
          title="Jpg/png files with a size less than 500kb. ● Documents can be in .png, .jpg, or .pdf format
      ● Documents must be large enough and clear to read"
          type="warning"
          show-icon
        ></el-alert>

        <br />
        <!-- 1-->
        <p>
          1. Extract from local business register/chamber
          of commerce AND/OR certicate of incorporation
          or other incorporation documents
        </p>
        <br />
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>

        <!-- 2-->
        <p>
          2. Valid Company Representative's ID in color
          IDs - front and back
          Passports - first two pages (with the picture)
        </p>

        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 3-->
        <p>
          3. Proof of personal address for the Company
          Representative
        </p>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 4-->
        <p>
          4. Valid Passport/ ID of the UBO 1
          <strong>in color</strong>
        </p>
        <ul>
          <li>IDs - front and back</li>
          <li>Passports - first two pages (with the picture)</li>
        </ul>

        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 5-->
        <p>5. Proof of personal address for the UBO 1</p>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 6-->
        <p>
          6. Valid Passport/ ID of the UBO 2
          <strong>in color</strong>
        </p>
        <ul>
          <li>IDs - front and back</li>
          <li>Passports - first two pages (with the picture)</li>
        </ul>

        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 7-->
        <p>7. Proof of personal address for the UBO 2</p>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 8-->
        <p>
          8. Valid Passport/ ID of the UBO 3
          <strong>in color</strong>
        </p>
        <ul>
          <li>IDs - front and back</li>
          <li>Passports - first two pages (with the picture)</li>
        </ul>

        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 9-->
        <p>9. Proof of personal address for the UBO 3</p>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>
        <!-- 10-->
        <p>
          10. Ofcial bank account statement, not older than 3
          months, showing the Account details (e.g. IBAN/
          Account number, Swift, Bank) and the Account owner
        </p>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button type="primary" @click="submitUpload">
            Click to upload
            <i class="el-icon-upload el-icon-right"></i>
          </el-button>
        </el-upload>

        <BackNext :show-back="false" v-on:next="onNext" />
      </el-form>
    </div>
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/LayoutCard";
import Stepper from "@/components/Stepper";
import BackNext from "@/components/BackNext";
export default {
  name: "Uploades",
  components: { LayoutCard, Stepper, BackNext },
  props: ["id", "form"],

  data() {
    return {
      methods: {
        onNext() {
          this.$emit("changed");
          // přechod na další stránku
          this.$router.push({
            name: "LastPage",
            params: { id: this.id }
          });
        },
        submitUpload() {
          this.$refs.upload.submit();
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    };
  }
};
</script>

<style scoped>
.quest {
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px Medium;
  color: #606266;
}
p {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px Medium;
  color: #606266;
  border: solid 0.5px #e4e7ed;
  padding: 10px;
  border-radius: 4px;
}
ul {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px Medium;
  color: #606266;
}
.formular {
  margin: 30px;
}
</style>