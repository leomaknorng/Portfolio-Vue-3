<template>
  <section class="home">
    <div class="home-info">
      <h1>Marveleo Gavrilla A</h1>
      <h2>I' am a <span class="highlight">Student</span></h2>
      <div class="btn-dwnld">
        <a href="" class="btn">Download CV</a>
      </div>
    </div>

    <div class="home-img">
      <div class="img-box">
        <div class="img-item">
          <img src="../assets/826-md-removebg-preview.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.home {
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 60px 9% 0;
  color: white;
}

.home-info h1 {
  font-size: 55px;
}

.home-info h2 {
  font-size: 32px;
  margin-top: -10px;
}

.highlight {
  color: #ff6969;
}

.home-info .btn-dwnld {
  display: flex;
  align-items: center;
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  margin-top: 10px;
  background-color: #ff6969;
  border: 2px solid #ff6969;
  border-radius: 40px;
  box-shadow: 0 0 10px #ff6969;
  font-size: 16px;
  color: #1f242d;
  font-weight: 600;
  transition: 0.5s;
}

.btn:hover {
  background: transparent;
  color: #ff6969;
  box-shadow: none;
}

.home-img .img-box {
  position: relative;
  width: 32vw;
  height: 32vw;
  margin-left: 30%;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.home-img .img-box::before,
.home-img .img-box::after {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background: conic-gradient(
    transparent 180deg,
    rgba(255, 105, 105, 0.8) 320deg,
    rgba(255, 105, 105, 0.4) 320deg,
    rgba(255, 105, 105, 0) 360deg
  );
  transform: rotate(180deg);
}

.home-img .img-box .img-item {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 7%;
  background-color: #1f242d;
  border-radius: 50%;
  border: 0.1px solid #1f242d;
  display: flex;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
}

.home-img .img-box .img-item img {
  position: absolute;
  top: 15%;
  display: block;
  width: 85%;
  object-fit: cover;
  mix-blend-mode: lighten;
}
</style>
