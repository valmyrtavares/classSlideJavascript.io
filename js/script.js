import Slide  from "./modules/slide.js";    
import images  from "./api/imagens.js"; 
import images1  from "./api/imagens1.js"; 

const slide = new Slide('#container',3000, true, images);
slide.init();

const segundo = new Slide('#lux',3000, true, images1);           
segundo.init();