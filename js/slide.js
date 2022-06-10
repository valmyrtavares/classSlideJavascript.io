import images  from "./api/imagens.js";
export default class Slide{

    constructor(container,velocity){
        this.container = document.querySelector(container);
        this.velocity=velocity ||1500
        this.count = 0
    }

    createElements(){
        const div = document.createElement('div');    
        this.createButton();           
        images.forEach(item =>{
            this.tagImage = document.createElement('img')
            this.tagImage.setAttribute('src', item.img)
            this.tagImage.style.display = "none"
            div.appendChild(this.tagImage)
        })
        div.style.width = "100%"
        this.container.appendChild(div)
        this.showImage()
        this.createPoint();
    }
    createButton(){
        this.container.style.position = "relative"
        const btnContainer= document.createElement('div')
        const btnForward= document.createElement('button')
        const btnBack= document.createElement('button')
        btnContainer.style.width="100%"
        btnContainer.style.display="flex"
        btnContainer.style.justifyContent="space-between"
        btnContainer.style.position="absolute"
        btnContainer.style.top="100px";
        btnForward.innerHTML = "&gt;";
        btnBack.innerHTML = "	&lt;";
        btnBack.style.fontSize="40px";
        btnBack.style.color="green";
        btnForward.style.fontSize="40px";
        btnForward.style.color="green";
        btnBack.style.background="none";
        btnForward.style.background="none";
        btnBack.style.border="none";
        btnForward.style.border="none";
        btnContainer.appendChild(btnBack)
        btnContainer.appendChild(btnForward)
        this.container.appendChild(btnContainer)
        btnForward.addEventListener('click',()=>{
            this.forward()})
        btnBack.addEventListener('click',()=>{
            this.back()})
    }
    createPoint(){
        const divPoint = document.createElement('div');
        divPoint.style.display="flex"
        divPoint.style.justifyContent="space-around"
        divPoint.style.width="100%"
        images.forEach((item,index)=>{           
            const divs = document.createElement('div')
            divs.style.background="red";
            divs.style.borderRadius="50%";
            divs.style.width="15px";            
            divs.style.height="15px";
            divs.addEventListener('click',()=>{
                this.setPoint(index)
            })
            divPoint.appendChild(divs)
        })
        this.container.appendChild(divPoint)      
    }
    setPoint(index){
        console.log(index)    
    }


    forward(){
        console.log('forward')
    }
    back(){
        console.log('back')
    }


    showImage(){                
        const imgCapture = document.querySelectorAll('img')
        this.stopSlide = setInterval(()=>{
        for(let i = 0; i<imgCapture.length; i++){
            imgCapture[i].style.display="none";
        }
       imgCapture[this.count].style.display="block";  
       this.count++  
       if(this.count>imgCapture.length-1){
           this.count=0
       }
       console.log(this.count)
        }, this.velocity)       
    }

    init(){
        console.log(typeof images);
        this.createElements();
    }
}