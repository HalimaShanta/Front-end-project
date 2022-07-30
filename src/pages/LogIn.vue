<template>
 
  <body>
  <div class="container">
    <div class="myCard">
      <div class="row">
        <div class="col-md-4">
         <div class="myRightCtn" >
           <div class="box">
             <div class="heading">
             <h2>Globetech Company Limited</h2>
             <p>Make yourself digitalized & more effecient</p>
          
             </div>
             
              <router-link to="/" class="btn-out">
                </router-link>
                <router-view v-slot=" { Component }">
                  <transition name="fade">
                    <component :is="Component"/>
                  </transition>
                </router-view>
                
           </div>
         </div>
        </div>
        <div class="col-md-8">
          <div class="myLeftCtn">
            <form class="myFrom text-center">
              <div class="header">
              <h2>Welcome</h2>
              <p>Sign in to your account</p>
              <div class="form">
              <div class="form-group">
                <input class="myInput" type="text" placeholder="Email" id="username">
              </div>
              <div class="form">
                <input class="myInput" type="text" placeholder="Password" id="email">
                <fa class="icon" icon="fa-solid fa-eye" />
               </div> 
              
              <input type="submit" class="btn" value="Login">
             
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
export default {
  name: 'LogIn',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: #1E1E1E;
}
.container {
  position: absolute;
  max-width: 900px;
  height: 500px;
  /*margin: auto;*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.myRightCtn {
  position: relative;
  background: #1E1E1E;
  height: 100%;
  padding-top: 25px;
  /*color: #fff;*/
  width: 100%;
}
.myLeftCtn {
  position: absolute;
  background: #C0CDD3;
  height: 100%;
  padding-top: 25px;
  padding-left: 50px;
  margin-right:90%;
  left: 30%;
  width: 70%;
}
.heading {
  padding-top: 10px;
}
.heading h2 {
  font-family: "Montserrat",Sans-Serif;
  font-size: 23px;
  font-weight: 600;
  line-height: 29px;
  color: #0096C7;
  letter-spacing: 0.12em;
  /*text-transform: uppercase;*/
  font-variant: small-caps;
}
.heading p {
  font-family: "Montserrat",Sans-Serif;
  font-size: 9px;
  font-weight: 550;
  line-height: 20px;
  width: 100%;
  color: #FFFFFF;

}
.row {
  height: 100%;
  width: 100%;
}
.myCard {
  position: relative;
  height: 100%;
 /* background: #fff;*/
 /* width: 100%;*/
}
.box {
  position: relative;
  margin: 15px;
  margin-bottom: 100px;
}
.myLeftCtn .myInput {
  width: 80%;
  padding: 1px;
  padding-left: 19px;
  border-radius: 8px;
  background: transparent;
  border: solid #8C8383;
  color: #928B8B;
  font-weight: 400;
  font-family: "Montserrat",Sans-Serif;
  font-size: 10px;
  letter-spacing: 0.09em;
  line-height: 29px;
}
.form-group {
  padding-bottom: 5px;
}
.myFrom {
  position: relative;
  margin-top: 120px;
  background: #FFFFFF;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 45%;
  margin-left: 100px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 4px;
  height: 47%;
}
.header h2 {
  font-family: "Montserrat",Sans-Serif;
  font-size: 26px;
  font-weight: 200;
  line-height: 29px;
  letter-spacing: -0.09em;
  width: 100%;
  color: #212121;
  padding-top: 15px;
}
.header p {
  font-family: "Montserrat",Sans-Serif;
  font-size: 12px;
  font-weight: 200;
  line-height: 15px;
  letter-spacing: -0.09em;
  width: 100%;
  color: #928B8B;
  padding-bottom: -5px;
}
.btn {
  width: 80%;
  padding: 1px;
  padding-left: 5px;
  border-radius: 8px;
  background: #0096C7;
  color: #FFFFFF;
  font-weight: 600;
  font-family: "Montserrat",Sans-Serif;
  font-size: 12px;
  line-height: 29px;
  margin-top: 10px;
}
.btn-in {
  /*width: 20px;*/
}
/*.btn-out {
  background: transparent;
  border: 50px solid transparent;
  border-left-color: #FFFFFF;
  width: 0px;
  height: 0px;
  display: block;
  line-height: 10px
}*/
.btn-out {
  /*position: relative;*/
  display: block;
  width: 20px;
  height: 0;
  background: transparent;
  border: 10px solid transparent;
  border-right-color: #FFFFFF;
  margin-left: 45%;
  margin-top: 102%;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.icon {
   color: #928B8B;
  position: absolute;
  right: 30px;
  top: 135px;
}
</style>