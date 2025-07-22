<template>
  <section class="services">
    <h2 class="section-title">SERVICES</h2>
    <div class="services-container">
      <div v-for="(service, index) in services" :key="index" class="service-card glass">
        <div class="icon-wrapper">
          <i :class="service.icon" class="service-icon"></i>
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-desc">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceSection',
  data() {
    return {
      services: [
        {
          title: 'Website Sederhana',
          description: 'Membangun website statis untuk profil bisnis, sekolah, atau personal.',
          icon: 'fas fa-laptop-code',
        },
        {
          title: 'Vue.js Frontend',
          description: 'Mengembangkan UI interaktif dan modular menggunakan Vue 3.',
          icon: 'fab fa-vuejs',
        },
        {
          title: 'Desain Responsif',
          description: 'Mendesain layout yang nyaman di berbagai ukuran layar.',
          icon: 'fas fa-desktop',
        },
        {
          title: 'Template Kustom',
          description: 'Menyesuaikan tampilan template HTML sesuai kebutuhan pengguna.',
          icon: 'fas fa-layer-group',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
.services {
  margin-top: 100px;
  padding: 1em 2rem;
  text-align: center;
}

.section-title {
  font-size: 40px;
  margin-bottom: 3rem;
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  padding: 2rem;
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.4s ease-in-out;
  color: #fff;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #ff6969;
  box-shadow: 0 0 20px rgba(255, 105, 105, 0.2);
}

.icon-wrapper {
  background: linear-gradient(135deg, #ff6969, #ff8a8a);
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 105, 105, 0.3);
}

.service-icon {
  font-size: 1.7rem;
  color: white;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
}

.service-desc {
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.6;
}

/* Responsif */
@media (max-width: 500px) {
  .section-title {
    font-size: 28px;
  }
  .service-title {
    font-size: 1.1rem;
  }
}
</style>
