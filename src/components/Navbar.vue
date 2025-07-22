<template>
  <nav class="navbar">
    <router-link to="/" class="header" active-class="active"> Portfolio </router-link>

    <div class="navbar-menu">
      <router-link to="/" class="nav-link" active-class="active"> Home </router-link>

      <router-link to="/about" class="nav-link" active-class="active"> About </router-link>

      <router-link to="/project" class="nav-link" active-class="active"> Project </router-link>

      <router-link to="/service" class="nav-link" active-class="active"> Service </router-link>

      <router-link to="/contact" class="nav-link" active-class="active"> Contact </router-link>
    </div>

    <div class="navbar-toggle" @click="toggleMenu">
      <span class="hamburger"></span>
      <span class="hamburger"></span>
      <span class="hamburger"></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      const menu = document.querySelector('.navbar-menu')
      if (this.isMenuOpen) {
        menu.classList.add('active')
      } else {
        menu.classList.remove('active')
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: #1f242d;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.header {
  color: white;
  font-size: 30px;
  font-weight: 700;
  transition: 0.5s;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  display: flex;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 500;
  transition: 0.5s;
}

.nav-link:hover {
  color: #ff6969;
}

.header:hover {
  color: #ff6969;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  width: 20px;
  height: 2px;
  background: #333333;
  margin: 2px 0;
  border-radius: 1px;
  transition: 0.2s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 60px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 60px);
    background: #ffffff;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
    gap: 0;
    transition: left 0.3s ease;
    border-top: 1px solid #e5e5e5;
  }

  .navbar-menu.active {
    left: 0;
  }

  .navbar-toggle {
    display: flex;
  }

  .nav-link {
    font-size: 1rem;
    padding: 15px 20px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 0;
  }

  .nav-link:hover {
    background: #f8f8f8;
  }

  .nav-link.active {
    background: #f0f0f0;
    border-left: 3px solid #333333;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 15px;
  }

  .brand-text {
    font-size: 1.3rem;
  }
}
</style>
