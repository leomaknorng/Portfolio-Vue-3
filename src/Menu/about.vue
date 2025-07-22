<template>
  <section class="about-container">
    <div class="about-box">
      <h1 class="about-title">ABOUT <span class="highlight">ME</span></h1>
      <div class="about-main">
        <div class="about-img">
          <img src="../assets/826-md-removebg-preview.png" alt="Foto Marveleo" />
        </div>
        <div class="about-content">
          <div class="about-card">
            <h3 class="card-heading">👨‍💻 Siapa Saya?</h3>
            <p>
              Halo! Saya <strong>Marveleo Gavrilla A</strong>, siswa di
              <strong>SMKN 6 Malang</strong> yang tertarik di bidang
              <strong>pengembangan web</strong>. Saya pernah PKL di <strong>Biznizzo</strong>,
              belajar banyak tentang praktik dunia kerja dan teknologi modern.
            </p>
          </div>
          <div class="about-card">
            <h3 class="card-heading">⚙️ Kemampuan Saya</h3>
            <p>
              Saya menguasai <strong>HTML</strong> dan <strong>CSS</strong>, serta suka membuat
              antarmuka yang responsif dan menarik. Saya terus belajar teknologi baru, seperti
              <strong>Vue.js</strong>, dan siap berkontribusi dalam proyek kreatif.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.about-container {
  background-color: #1f242d;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
}

.about-box {
  max-width: 1200px;
  width: 100%;
}

.about-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 2.5rem;
  font-weight: bold;
}

.hightlight {
  color: #ff6969;
}

.about-main {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.about-img img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ff6969;
  box-shadow: 0 0 15px rgba(255, 105, 105, 0.5);
  transition: transform 0.3s ease;
}

.about-img img:hover {
  transform: scale(1.05);
}

.about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid #ff6969;
  border-radius: 12px;
  padding: 1.5rem;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 15px rgba(255, 105, 105, 0.2);
}

.about-card:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 105, 105, 0.05);
}

.card-heading {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff6969;
  margin-bottom: 0.8rem;
}

/* Responsif */
@media (max-width: 768px) {
  .about-main {
    flex-direction: column;
    text-align: center;
  }

  .about-img img {
    margin-bottom: 1rem;
  }
}
</style>
