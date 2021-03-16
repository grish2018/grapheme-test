<template>
  <div id="app">
    <Header />
    <main></main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
  height: 100vh;
}
@font-face {
  //Helvetica Neue is paid
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue"),
    url(./fonts/LiberationSans-Regular.ttf) format("truetype");
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
main {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #f6f8ff;
}
</style>
