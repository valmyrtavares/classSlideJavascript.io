// import dataImg  from "./api/imagens.js";
export default class Slide{

    constructor(container,velocity, pointWay, dataImg){
        this.container = document.querySelector(container);
        this.velocity=velocity ||1500
        this.pointWay = pointWay
        this.dataImg = dataImg
        this.count = 0
    }

    createElements(){
        const div = document.createElement('div');    
        div.style.overflow = "hidden";
        this.createButton();           
        this.dataImg.forEach(item =>{
            this.tagImage = document.createElement('img')
            this.tagImage.setAttribute('src', item.img)
            this.tagImage.style.display = "none"
            this.tagImage.style.width = "100%"
            this.tagImage.style.margin = "auto"
            div.appendChild(this.tagImage)
        })
        div.style.width = "100%"
        div.style.minHeight = "300px"
        div.style.minHeight = "300px"
        this.container.appendChild(div)
        this.showImage()
        if(this.pointWay){
            this.createPoint();
        }
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
        this.dataImg.forEach((item,index)=>{           
            const divs = document.createElement('div')
            divs.style.background="red";
            divs.setAttribute("id", "point")
            divs.style.borderRadius="50%";
            divs.style.width="15px";            
            divs.style.height="15px";
            divs.addEventListener('click',()=>{
                this.setPoint(index)
            })
            divPoint.appendChild(divs)
        })
        this.container.appendChild(divPoint)      
        this.point = document.querySelectorAll("#point")        
    }
    setPoint(index){
        for(let i = 0; i<this.imgCapture.length; i++){
            this.imgCapture[i].style.display="none";
            this.point[i].style.background="red";
        }   
        this.count = index
        console.log(this.count)
        clearInterval(this.stopSlide);   
        this.imgCapture[this.count].style.display="block";  
        this.point[this.count].style.background="black";      
        this.showImage()
    }

    forward(){        
        for(let i = 0; i<this.imgCapture.length; i++){
            this.imgCapture[i].style.display="none";
            this.pointWay? this.point[i].style.background="red":""; 
        }      
        this.count++
       if(this.count > this.imgCapture.length-1){
           this.count=0
       }
       clearInterval(this.stopSlide);   
        this.imgCapture[this.count].style.display="block";   
        this.pointWay? this.point[this.count].style.background="black":"";      
        this.showImage()
        console.log(this.count)
    }


    back(){
        for(let i = 0; i<this.imgCapture.length; i++){
            this.imgCapture[i].style.display="none";
            this.pointWay? this.point[i].style.background="red":"";   
        }      
        this.count--
       if(this.count < 0){
           this.count=this.imgCapture.length-1
       }
       clearInterval(this.stopSlide);   
        this.imgCapture[this.count].style.display="block";     
        this.pointWay? this.point[this.count].style.background="black":"";    
        this.showImage()       
    }


    showImage(){                
        this.imgCapture = document.querySelectorAll('img')
        console.log(this.imgCapture)
        this.imgCapture[this.count].style.display="block";         
        this.stopSlide = setInterval(()=>{           
        for(let i = 0; i<this.imgCapture.length; i++){
           this.imgCapture[i].style.display="none";
          this.pointWay? this.point[i].style.background="red":"";   
        }
        this.count++  
        if(this.count>this.imgCapture.length-1){
            this.count=0
        }         
        this.imgCapture[this.count].style.display="block"; 
      this.pointWay? this.point[this.count].style.background="black":"";
        }, this.velocity)   
    }

    init(){     
        this.createElements();
    
        console.log('Começou')
        
    }
}