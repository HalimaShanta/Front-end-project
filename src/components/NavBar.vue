<template>
  <div id="id" class="nav">
    <nav>
      <img  src="../assets/img/logo1.png" alt="vue" class="logo">
      <ul>
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" to="/services">Services</router-link></li>
        <li><router-link class="link" to="/login">Login</router-link></li>
         
      </ul>
      </nav>
      </div>
</template>

<script>
export default {
name: 'NavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');
* {
margin: 0;
padding: 0;
font-family: 'Poppins', Sans-Serif;
}
/*.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #1E1E1E;
  display: flex;
  flex-direction: coloumn;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: grid;
  
  
}*/
.nav {
  width: 100%;
  background: #1E1E1E;
}
nav {
  display: flex;
  width: 80%;
  margin: auto;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  background: #1E1E1E;
}
nav ul li {
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
}
nav ul li .link {
  text-decoration: none;
  color: #8FE5FF;
}
nav ul li .link:hover {
color: #D7F561;
}
.link.router-link-active {
  color: #D7F561;
}

</style>