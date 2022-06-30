import Slide  from "./modules/slide.js";    
import images  from "./api/imagens.js"; 
import images1  from "./api/imagens1.js"; 
import images2  from "./api/imagens2.js"; 


const primeiro = new Slide('#novo',1000, true, images2, );
primeiro.init();

const segundo = new Slide('#outronovo',2000, true, images );           
segundo.init();

 const terceiro = new Slide('#lux',3000, true, images1 );           
 terceiro.init();

 const quarto = new Slide('#winter',4000, true, images );           
 quarto.init();


