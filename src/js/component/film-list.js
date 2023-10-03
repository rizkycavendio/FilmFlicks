class FilmList extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render(){
      this.innerHTML = `
        <div id="film-list"></div>`;
    }
  }
  
  customElements.define('film-list', FilmList);
  