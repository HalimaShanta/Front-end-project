<template>
      
      <div class="body">
        <NavBar />
       <div class="vector">
        <img class="line2" src="../assets/img/Line2.png">
        <img class="line3" src="../assets/img/Line3.png">
        <img class="line4" src="../assets/img/Line4.png">
        <img class="vect" src="../assets/img/Vector.png">
      </div>
      <div class="heading">
        <h3>Services</h3>
        <h2>We provide services to our client</h2>
      </div>
      <div class="container-box">
        <div class="box">
          <div class="box-img">
            <img src="../assets/img/soft1.png">
          </div>
          <div class="box-content">
            <h3>Software Solution</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            <a href="#">More</a>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <img src="../assets/img/image3.png">
          </div>
          <div class="box-content">
            <h3>E-Commerce Solution</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            <a href="#">More</a>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <img src="../assets/img/image4.png">
          </div>
          <div class="box-content">
            <h3>ERP Solution</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            <a href="#">More</a>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <img src="../assets/img/bulk1.png">
          </div>
          <div class="box-content">
            <h3>Bulk SMS Service</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            <a href="#">More</a>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <img src="../assets/img/image5.png">
          </div>
          <div class="box-content">
            <h3>Graphic Design</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            <a href="#">More</a>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <img src="../assets/img/image6.png">
          </div>
          <div class="box-content">
            <h3>Digital Marketing</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            <a href="#">More</a>
          </div>
        </div>
      </div>
      </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'SerVices',
  components: {
    NavBar
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;700;900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*font-family: "Poppins",Sans-Serif;*/
  background: #1E1E1E;
}
.body {
  max-width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  /* overflow: hidden; */
}

.heading {
  text-align: center;
  padding: 10px;
}
.heading h3 {
  font-family: "Poppins",Sans-Serif;
  font-size: 23px;
  font-weight: 500;
  line-height: 59px;
  letter-spacing: 0.15em;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
}
.heading h2 {
  font-family: "Poppins",Sans-Serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.15em;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
}
.container-box {
  /*display: flex;
  flex-wrap: wrap;*/
  justify-content: center;
  align-items: center;
 /* margin: 60px;
  padding-top: 20px;*/
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin: 15px;

  
}
.container-box .box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 /* width: 350px;*/
  color: #333;
  background: #fff;
 /* padding: 9px;*/
 /*margin-top: 100%;
  margin-left: 20%;*/
  /*border-radius: 29px;
  height: 600px;
  margin: 35px 20px;
  width: 250px;*/
/*left: 50px;
top: 200px;*/
width: 290px;
border-radius: 29px;
padding: 10px;
margin: 10px 10px;
  
}
.container-box .box .box-img {
  /*margin-bottom: 5px;*/
  /*width: 245px;
  height: 115px;*/
 /* border-radius: 5px;*/
 /*position: relative;*/
 /*position: relative;*/
 /*bottom: 5%;*/
 /*top: 1%;*/
  background: #fff;
  /*margin: 10px 0;*/
  width: 200px;
  height: 200px;
  /*border-radius: 50%;*/
  
}
.container-box .box-img img {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  background: #fff;
}
.container-box .box-content {
  text-align: center;
  padding: 15px;
  background: #FFFFFF;
}
.container-box .box-content h3 {
font-family: "Montserrat",Sans-Serif;
font-size: 20px;
font-weight: 100px;
/*line-height: 32px;*/
/*letter-spacing: 0.15em;*/
text-align: center;
color: #2397CD;
background: #FFFFFF;
font-style: normal;
/*height: 100%;*/
/*width: 100%;
left: 226px;*/
/*top: 877px;*/
line-height: 1.5;
margin-top: 15px;

}
.box-content p {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400px;
  line-height: 1.6;
  /*letter-spacing: 0.15em;*/
  text-align: justify;
  color: #000633;
  background: #FFFFFF;
  /*width: 100%;
  left: 200px;*/
}
.box-content a {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.15em;
  text-align: center;
  border-radius: 25px;
  background: #2397CD;
  text-decoration: none;
  color: #FFFFFF;
  padding: 10px;
  display: block;
  width: 50%;
  margin-left: 20%;
  
}
  
.vector .line4 {
  position: relative;
  right: 39.3%;
  top: 20%;
  margin-top: 12px;
  width: 70px;
  height: 0px;
  border: 2px solid #28ACE2;
  transform: rotate(180deg);
  border-radius: 2px;
}
.vector .line3 {
  position: relative;
  right: 31.9%;
  top: 30.6%;
  margin-top: 21px;
  width: 70px;
  height: 0px;
  border: 2px solid #28ACE2;
  transform: rotate(180deg);
  border-radius: 2px;
}
.vector .line2 {
  position: relative;
  right: 24.6%;
  top: 29.9%;
  margin-top: 30px;
  width: 70px;
  height: 0px;
  border: 2px solid #28ACE2;
  transform: rotate(180deg);
  border-radius: 2px;
}
.vector .vect {
  position: relative;
  right: 40%;
  margin-top: 20px;
 
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