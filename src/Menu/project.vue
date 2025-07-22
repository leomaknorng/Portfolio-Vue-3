<template>
  <div class="about-section">
    <h1>PROJECT</h1>
  </div>
  <div class="about-content">
    <p>
      Saya telah terlibat dalam beberapa proyek pembuatan website, baik secara individu maupun dalam
      tim. Portofolio ini berisi ringkasan pengalaman saya dalam mengembangkan berbagai jenis
      website.
    </p>
  </div>

  <section class="projects-section">
    <div class="projects-grid">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" :alt="project.title" />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeImg from '../assets/home.png'
import loginImg from '../assets/login.png'
import berandaImg from '../assets/dashboard.png'
import profilImg from '../assets/profilsantri.png'
import laporanImg from '../assets/laporan.png'
import detailImg from '../assets/detail_laporan.png'
import replikaImg from '../assets/replika-sklh.png'
import templateImg from '../assets/template-vue3.png'
import implemenImg from '../assets/implementasi-template.png'
export default {
  data() {
    return {
      projects: [
        {
          title: 'Home Page',
          description: 'Membuat halaman Home dengan HTML & CSS',
          image: homeImg,
        },
        {
          title: 'Login Page',
          description: 'Membuat halaman Login dengan HTML & CSS',
          image: loginImg,
        },
        {
          title: 'Dashboard',
          description: 'Membuat halaman Dashboard dengan HTML & CSS',
          image: berandaImg,
        },
        {
          title: 'Profil Santri',
          description: 'Membuat halaman Profil Santri dengan HTML & CSS',
          image: profilImg,
        },
        {
          title: 'Laporan',
          description: 'Membuat halaman Laporan dengan HTML & CSS',
          image: laporanImg,
        },
        {
          title: 'Detail Laporan',
          description: 'Membuat halaman Detail Laporan dengan HTML & CSS',
          image: detailImg,
        },
        {
          title: 'Replika Web Sekolah',
          description:
            'Membuat replika web sekolah SMKN 6 Malang dengan HTML, CSS, Javascript & Vue 3',
          image: replikaImg,
        },
        {
          title: 'Template Website Dengan Vue 3',
          description: 'Membuat template sebuah website dengan HTML, CSS, Javascript & Vue 3',
          image: templateImg,
        },
        {
          title: 'Website Sekolah Dengan Vue 3',
          description:
            'Modifikasi template Vue 3 dengan konten SMKN 6 Malang berbasis HTML, CSS, dan JavaScript',
          image: implemenImg,
        },
      ],
    }
  },
}
</script>

<style scoped>
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 0 10%;
  color: white;
  text-align: center;
  margin-bottom: 0;
}

.about-section h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -15vh;
  padding: 0 20%;
  color: white;
  text-align: center;
}

.projects-section {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(255, 105, 105, 0.2);
}

.project-card img {
  width: 100%;
  height: 260px; /* lebih tinggi agar portrait tetap terlihat */
  object-fit: contain;
  background-color: #fff; /* atau warna lain jika ingin */
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.project-info {
  padding: 1.2rem;
  text-align: center;
}

.project-info h3 {
  margin-bottom: 0.6rem;
  font-size: 1.25rem;
  color: #ff6969;
}

.project-info p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.4;
}
</style>
