// app.js
import { tag } from './index.js';
const p = tag('p', '👋 Hello App Modules!');
const app = document.querySelector(`#root`);
app.appendChild(p);
