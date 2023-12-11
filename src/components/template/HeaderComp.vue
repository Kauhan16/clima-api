<template>
  <header>
    <img src="@/assets/logo.png" alt="" />

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
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(82, 188, 202);
  font-size: 24px;
  justify-content: space-between;
}

.menu {
  margin-right: 5rem;
  display: flex;
}

.clic {
  color: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(77, 77, 77, 0.3);
  transition: background-color 0.3s;
}

.clic:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

img {
  width: 8rem;
}
</style>
