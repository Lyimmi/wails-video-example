import './style.css';
import './app.css';

import logo from './assets/images/logo-universal.png';
import { Greet } from '../wailsjs/go/main/App';

document.querySelector('#app').innerHTML = `
    <video width="100%" height="100%" controls id="vp"></video>
`;

let vp = document.getElementById("vp");
let source = document.createElement('source');

source.src = "Big_Buck_Bunny_1080_10s_5MB.webm";
source.type = "video/webm";
source.id = "vidSrc"

vp.appendChild(source);
vp.play();