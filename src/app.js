import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './js/component/nav-bar.js';
import { fetchData } from './js/view/main.js';

document.addEventListener('DOMContentLoaded', fetchData);