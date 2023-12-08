<template>
  <header>
    <img src="@/assets/logosite.png" alt="" />

    <div class="menu">
      <span class="clic"> <RouterLink to="/">Home</RouterLink> </span>
      <span></span>
      <span class="clic"> <RouterLink to="/weather">Clima</RouterLink> </span>
      <span></span>
    </div>
  </header>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

header span {
  padding: 0 20px;
}

header {
  font-family: "Nanum Gothic", sans-serif;
  padding: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to right, rgb(82, 188, 202), #78a6f5);
  font-size: 30px;
  justify-content: space-between;
}

.menu {
  margin-right: 15rem;
}

.clic {
  color: black;
  background-color: white;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgb(77, 77, 77);
}

.clic:hover {
  background-color: rgb(179, 233, 255);
  transition: background 1s;
}

img {
  width: 10rem;
}
</style>
