class FilmList extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div id="film-list">
          <!-- Film items will be added here dynamically -->
        </div>
      `;
    }
  }
  
  customElements.define('film-list', FilmList);
  