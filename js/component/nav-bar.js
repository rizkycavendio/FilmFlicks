class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }   

    render(){
        this.innerHTML = `<h2>FilmFlicks</h2>`;
    }
}
  
  customElements.define('nav-bar', NavBar);