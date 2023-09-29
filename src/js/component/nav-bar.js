class NavBar extends HTMLElement {
    connectedCallback(){
      this.render();
    }   
  
    render(){
      this.innerHTML = `
        <style>
        .btn-search {
          background-color: #3282B8;
          color: white;
        }
      
        .btn-search:hover {
          background-color: #0F4C75;
        }
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark nav-bar">
          <div class="container">
            <a class="navbar-brand" href="#">FilmFlicks</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav w-100 justify-content-end">
                <div class="form-group search-input">
                  <input type="text" class="form-control" id="searchBar" placeholder="Mau nonton apa?">
                </div>
                <button type="button" class="btn btn-search">Cari Film</button>
              </div>
            </div>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define('nav-bar', NavBar);
  