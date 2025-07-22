<template>
  <section class="kontak">
    <h2>CONTACT <span class="highlight">ME</span></h2>
    <div class="kontak-info">
      <p>
        <strong>Alamat:</strong> Jl.Ki Ageng Gribig No.28, Madyopuro, Kec. Kedungkandang, Kota
        Malang, Jawa Timur 65139
      </p>
      <p><strong>Telepon:</strong> (0341) 722216</p>
      <p><strong>Email:</strong> @smkn6malang.sch.id</p>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2309692044605!2d112.66913457415848!3d-7.975064379503032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62866628675a5%3A0xe475311940a81d11!2sSMK%20Negeri%206%20Kota%20Malang!5e0!3m2!1sid!2sid!4v1752490133828!5m2!1sid!2sid"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <form @submit.prevent="kirimPesan">
      <input type="text" placeholder="Nama Anda" required />
      <input type="email" placeholder="Email Aktif" required />
      <textarea placeholder="Pesan Anda" required></textarea>
      <button type="submit">Kirim Pesan</button>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style>
.kontak {
  color: #fff;
  padding: 7.5rem 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 120px;
}

.kontak h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: white;
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.8s ease-out;
}

.hightlight {
  color: #ff6969;
}

.kontak h2::after {
  content: '✦';
  display: block;
  margin: 8px auto 0;
  font-size: 24px;
  color: #ff6969;
  animation: blink 1s infinite alternate;
}

@keyframes blink {
  from {
    opacity: 0.3;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1.2);
  }
}

.kontak-info {
  margin: 40px auto;
  max-width: 640px;
  font-size: 17px;
  line-height: 1.8;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  z-index: 1;
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.kontak-info p {
  margin: 12px 0;
  color: #eaeaea;
}

.kontak-info strong {
  color: #ff6969;
}

iframe {
  width: 100%;
  max-width: 720px;
  height: 300px;
  margin: 35px auto;
  border: none;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  display: block;
  animation: fadeInUp 0.8s ease-out;
}

form {
  max-width: 640px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

form input,
form textarea {
  padding: 16px 20px;
  background: #fdfdfd;
  color: #222;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  outline: none;
  box-shadow:
    inset 2px 2px 6px rgba(0, 0, 0, 0.1),
    inset -2px -2px 6px rgba(255, 255, 255, 0.6),
    0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

form input:focus,
form textarea:focus {
  transform: scale(1.03);
  box-shadow:
    0 0 0 4px #ffd700aa,
    0 8px 16px rgba(0, 0, 0, 0.2);
}

form textarea {
  min-height: 150px;
  resize: vertical;
}

form button {
  background-color: #ff6969;
  color: #1f242d;
  border: 2px solid #ff6969;
  border-radius: 50px;
  padding: 16px;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #ff6969;
}

form button:hover {
  background: transparent;
  color: #ff6969;
  box-shadow: none;
}
</style>
