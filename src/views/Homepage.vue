<template>
  <div class="blok">
    <h1>Customer Verification Form</h1>
    <h2>
      Neveřejný projekt vznikl v rámci Czechitas Digitální Akademie: Web Praha,
      jaro 2020
    </h2>
    <div class="oko">
      <img src="./img/oko.gif" />
    </div>
    <div class="buttons">
      <router-link :to="{ name: 'Create' }">
        <el-button type="primary" size="medium" class="button"
          >Chci projít formulář jako zadavatel</el-button
        >
      </router-link>

      <router-link
        :to="{ name: 'Guide', params: { id: '5eefa0475b4a6d705e8ea8d8' } }"
      >
        <el-button type="primary" size="medium" class="button"
          >Chci projít formulář jako klient</el-button
        >
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#app {
  width: 100%;
}

h1 {
  font-size: 25 px large;
  text-align: center;
  font-weight: bold;
  color: #409eff;
  padding-bottom: 20px;
  margin: 40px;
}
.oko {
  text-align: center;
  padding-bottom: 30px;
  padding-top: 20px;
}
.text {
  color: #303133;
  padding: 0 20px 20px 0;
  margin-left: 40px;
  font-size: 14px;
  line-height: 1.5;
}
h3 {
  font-size: 16px large;
  text-align: center;
  font-weight: bold;
  color: #303133;
  padding-bottom: 20px;
}

.button {
  text-align: center;
  font-size: 20px large;
  padding: 15px;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.el-button {
  font-size: 20px large;
}
@media screen and (min-width: 0) and (max-width: 540px) {
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .button {
    margin-top: 20px;
  }
}
</style>
