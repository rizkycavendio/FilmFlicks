class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <footer class="footer">
          <div class="container footer-content">
            <div class="footer-logo">
              <h1>FilmFlicks</h1>
            </div>
            <div class="footer-links">
              <ul>
                <li><a href="#">Tanya Jawab</a></li>
                <li><a href="#">Pusat Bantuan</a></li>
                <li><a href="#">Informasi Langganan</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <ul>
                <li><a href="#">Pusat Media</a></li>
                <li><a href="#">Beli Kartu Hadiah</a></li>
                <li><a href="#">Event Bulanan</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <ul>
                <li><a href="#">Hubungan Investor</a></li>
                <li><a href="#">Cara Menonton</a></li>
                <li><a href="#">Informasi Legal</a></li>
              </ul>
            </div>
            <div class="footer-description">
              <h6>&copy; Copyright 2023 Muhammad Rizky Cavendio F284YB009</h6>
            </div>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
  