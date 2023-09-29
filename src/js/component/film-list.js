class FilmList extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div id="film-list"></div>`;
    }
  }
  
  customElements.define('film-list', FilmList);
  