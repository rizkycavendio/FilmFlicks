class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }   

    render(){
        this.innerHTML = `
            <style>
                .nav-bar {
                    padding: 16px;
                    width: 100%;
                    background-color: #1B262C;
                    color: white;
                }

                .filter-dropdown {
                    margin-right: 10px;
                }

                .search-input {
                    margin-right: 10px;
                }

                .btn-search {
                    background-color: #3282B8;
                    color: white;
                }

                .btn-search:hover {
                    background-color: #0F4C75;
                }
            </style>
            <div class="nav-bar">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-6">
                            <h2>FilmFlicks</h2>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <div class="form-group search-input">
                                <input type="text" class="form-control" id="searchBar" placeholder="Cari film">
                            </div>
                            <button type="button" class="btn btn-search">Cari Film</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);
