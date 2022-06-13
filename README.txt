Fazer um script dentro do html
<script type="module">       
        import Slide  from "./js/slide.js";     
        const slide = new Slide('#container',3000, true);
        slide.init()
    </script>
    O primeiro paramentro é o container o segundo é a velocidade da passagem imagem e o terecido se terá ou não pontos para mudar a imagem do carrossel