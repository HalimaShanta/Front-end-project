<template>
  <div class="hero">
    <NavBar />
    <div class="con">
      <div class="detel">
        <div class="vector">
          <img class="line2" src="../assets/img/Line2.png">
          <img class="line3" src="../assets/img/Line3.png">
          <img class="line4" src="../assets/img/Line4.png">
         
          <img class="vect" src="../assets/img/Vector.png">

        </div>
        <div class="box">
          <h1>Welcome to<br><span>Globetech</span></h1>
          <p>We are committed to deliver <span>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
          <div class="btn-grp">
        
           <a href="#" class="spt-btn">Support Us</a>
           <a href="#" class="msn-btn">Our Mission</a>
          </div>
        </div>
      </div>
      <div class="images">
        <img src="../assets/img/Ellipse1.png" class="photo-bg">
        <img src="../assets/img/Ellipse2.png" class="photo-bg1">
               <img src="../assets/img/Ellipse3.png" alt="" class="photo-bg2" />
               <img src="../assets/img/Ellipse4.png" alt="" class="photo-bg3" />
               <img src="../assets/img/Ellipse6.png" alt="" class="photo photo-bg6"/>

               <img src="../assets/img/Ellipse9.png" alt="" class="photo photo-bg9"/>
               <img src="../assets/img/Ellipse11.png" alt="" class="photo photo-bg11"/>
               <img src="../assets/img/Ellipse10.png" alt="" class="photo photo-bg10"/>
               <img src="../assets/img/Ellipse8.png" alt="" class="photo photo-bg8"/>
               <img src="../assets/img/Ellipse7.png" alt="" class="photo photo-bg7"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data() {
    return {
      hover: false,
    };
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');
* {
margin: 0;
padding: 0;
/* font-family: 'Poppins', Sans-Serif; */
box-sizing: border-box;
}
.hero {
  /* position: absolute; */
  max-width: -moz-available;
  height: 100vh;
  background: #1E1E1E;
  /* display: flex;
  flex-direction: coloumn;
  flex-wrap: wrap;
  justify-content: flex-start; */
 
   /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  */
 /* max-width: 900px;
  height: 500px;*/
  /* overflow: hidden; */
  
  
}

.detel {
 /* margin-top: 13%;
  margin-left: 8%; */
  /* max-width: 600px;
  margin: 150px 100px; */
  /*margin-bottom: 80%;
  top: 20%;*/
  position: relative;
  background: #1E1E1E;
  height: 100%;
  padding-top: 25px;
  width: 100%;
  
}
.detel  h1 {
  font-size: 50px;
  color: #28ACE2;
  margin-bottom: 20px;
  text-align: justify;
  font-family: "Poppins",sans-serif;
}
span {
  color: #CBF231;
}
.box {
  margin-top: 90px;
  margin-left: 100px;
}
.detel p {
  width: 410px;
  font-weight: 400;
  font-size: 18px;
  line-height: 152%;
  text-align: justify;
  color: #2EBBE5;
  margin-bottom: 40px;
}
.detel .btn-grp {
display: inline-block;
 /* padding: 10%; */
  /*margin-right: 100px;*/
  margin-right: 65%; 
}
.detel .spt-btn {
  color: #00052F;
  font-weight: 700;
  font-size: 20px;
  line-height: 152%;
  background: linear-gradient(265.22deg, #DEF77D 0%, #D0F344 100%);
border-radius: 4px;
box-shadow: 8px 8px 16px 0px #FFFFFF80 inset;

box-shadow: inset -8px -8px 16px #B6CC63, inset 8px 8px 16px rgba(255, 255, 255, 0.5);
text-decoration: none;
padding: 10px 20px;
}
.detel .msn-btn {
  color: #8FE5FF;
  font-weight: 700;
  font-size: 20px;
  line-height: 152%;
  border: 2px solid #8FE5FF;
border-radius: 4px;
text-decoration: none;
padding: 10px 20px;
box-sizing: border-box;
margin-left: 40px;
transition: all .5s;
}
.images {
  width: 100%;
  height: 65%;
  position: absolute;
  bottom: 5%; 
  /* margin-bottom: 50%; */
  left: 38%;
  /* z-index: 9999; */
}
.images .photo-bg2 {
  height: 100%;
  position: absolute;
  left: 15%; 
  top: 5%; 
}
.images .photo-bg {
  height: 80%;
  position: absolute;
  left: 17.8%;
  top: 14.5%;
}
.images .photo-bg1 {
  height: 60%;
  position: absolute;
  right: 61%;
  top: 25%;
}
.images .photo-bg3 {
  height: 35%;
  position: absolute;
  right: 64.9%;
  top: 35%;
}
.images .photo-bg6 {
 height: 8%;
  position: absolute;
  left: 39%;
  top: 70%;
}
.images .photo-bg9 {
 height: 10%;
  position: absolute;
  left: 38%;
  top: 24%;
}
.images .photo-bg11 {
  height: 13%;
  position: absolute;
   left: 21%;
  top: 65%; 
} 
.images .photo-bg10 {
  height: 6%;
  position: absolute;
  left: 21.5%;
  top: 37%;
}
.images .photo-bg8 {
  height: 9%;
  position: absolute;
  left: 30%;
  top: 99%;
}
.images .photo-bg7 {
  height: 11%;
  position: absolute;
  left: 19%;
  top: 10%;
}
.detel .vector .line4 {
  position: relative;
  right: 39.6%;
  top: 11.5%;
  margin-top: 12px;
  width: 65px;
  height: 0px;
  border: 2px solid #28ACE2;
  transform: rotate(180deg);
  border-radius: 2px;
}
.detel .vector .line3 {
  position: relative;
  /* left: 10.1%; */
  right: 34.8%;
  /* top: 2%; */
  /* bottom: 20%; */
  margin-top: 21px;
  width: 65px;
  height: 0px;
  border: 2px solid #28ACE2;
  transform: rotate(180deg);
  border-radius: 2px;
}
.detel .vector .line2 {
  position: relative;
  /* left: 5%; */
  right: 30%;
  top: 10%;
  margin-top: 30px;
  width: 65px;
  height: 0px;
  border: 2px solid #28ACE2;
  transform: rotate(180deg);
  border-radius: 2px;
}
.detel .vector .vect{
  position: relative;
  right: 39.6%; 
  /* top: 20%;
  width: 20px;
  height: 20px; */
/* -webkit-transition-duration:5s;
-webkit-transition-timing-function:linear;
-webkit-transition-delay:0s; */
bottom: 100%;
width: 70px;
/* height: 52px; */
margin-top: 20px;

}
/* 
.detel .vector:hover {
  

animation: vector ;
}
.animate {
  transition: all .5s;
} */
/* .vect:hover {
  left: 30%;
}  */
/*.detel .vector a.hover {
/*  position: absolute;
  left: 20.6%;
}*/
/* .active {

    z-index: 1;
  background-repeat: repeat-x;
  transition: vector 2s linear;
  animation-name: vector;
  animation-duration: 4s;
  animation-delay: 2s;
}
@keyframes vector {
  80% {
    transform: translateX(-3400px)
  }
 25%{left: 200px;}
} */
.images {
  z-index: 9999;
}
.photo:hover {

 animation: animate 10s linear infinite;
}
@keyframes animate {
  0%{
    transform: translate(-50%,-50%) rotate(0);
  }
  100%{
    transform: translate(-50%,-50%) rotate(360deg);
  }
  
}
.vector:hover {
  animation: move 5s linear;
}
@keyframes move {
  100%{
    transform: translateX(3400px);
  }
}
</style>
