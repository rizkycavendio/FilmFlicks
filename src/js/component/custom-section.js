class CustomSection extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <section class="section">
          <div class="container container-section">
            <div class="col-md-6 column-left">
              <div class="description-section">
                <h2>Menikmati Film dari mana saja</h2>
                <p>Semua orang bisa menikmati film dari gawai mereka dengan mudah di layanan FilmFlicks. Koleksi Film terlengkap dan tentunya legal. Ayo daftar sekarang!</p>
              </div>
            </div>
            <div class="col-md-6 column-right">
              <div>
                <img alt="gabar-section-kanan" src="https://i.pinimg.com/564x/d9/2e/42/d92e4265a5c5f28276e0602669ba817e.jpg">
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('custom-section', CustomSection);
  