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
        this.createCSS()
        const div = document.createElement('div');    
        div.classList.add('main_container')
        this.createButton();           
        this.dataImg.forEach(item =>{
            this.tagImage = document.createElement('img')
            this.tagImage.setAttribute('src', item.img)
            this.tagImage.classList.add("tag_image")           
            div.appendChild(this.tagImage)
        })
       
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
        btnContainer.classList.add("btn_container")
    ;
        btnForward.innerHTML = "&gt;";
        btnBack.innerHTML = "	&lt;";
        btnBack.classList.add("btn_back")
        btnForward.classList.add("btn_forward")
     
        btnContainer.appendChild(btnBack)
        btnContainer.appendChild(btnForward)
        this.container.appendChild(btnContainer)
        btnForward.addEventListener('click',()=>{
            this.forward()})
        btnBack.addEventListener('click',()=>{
            this.back()})
    }

     createCSS(){
        this.head = document.querySelector('head')
        const style = document.createElement('style');
        style.innerHTML = `
        .main_container{
             overflow:hidden;
             width:100%;
             min-height:300px;
             max-height:300px;
        }
        .tag_image{
            display:none;
            width:100%;
            margin:auto;
        }
        .active{
            display:block;
        }
        .btn_container{
           width:100%;
           display:flex;
           justify-content:space-between;
           position:absolute;
           top:100px;
        }
        .btn_back{
           font-size:40px;
           color:green;
           border:none;
           background:none;
        }
         .btn_forward{
          font-size:40px;
          color:green;
          background:none;
          border:none;
        }
          .div_point{
           displayflex;
           justifyContentspace-around;
           width100%;
        }
        .div_point{
            display:flex;
            justify-content:space-around;
            width:100%;
         }
         .divs{
            background:red;
            border-radius:50%;
            width:15px;            
            height:15px;           
         }
         .point_active{
            background:black !important;
         }
        `
        this.head.appendChild(style);
    }
    createPoint(){
        const divPoint = document.createElement('div');
        divPoint.classList.add("div_point")
            
        this.dataImg.forEach((item,index)=>{           
            const divs = document.createElement('div')
            divs.classList.add("divs")
            divs.setAttribute("id", "point")
          
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
            this.imgCapture[i].classList.remove("active");
            this.point[i].classList.remove("point_active");
        }   
        this.count = index
        console.log(this.count)
        clearInterval(this.stopSlide);   
        this.imgCapture[this.count].classList.add('active');     
        this.point[this.count].classList.add("point_active");      
        this.showImage()
    }

    forward(){        
        for(let i = 0; i<this.imgCapture.length; i++){
            this.imgCapture[i].classList.remove("active");
            this.pointWay? this.point[i].classList.remove("point_active"):""; 
        }      
        this.count++
       if(this.count > this.imgCapture.length-1){
           this.count=0
       }
       clearInterval(this.stopSlide);   
       this.imgCapture[this.count].classList.add('active');     
       this.pointWay? this.point[this.count].classList.add("point_active"):"";      
        this.showImage()
        console.log(this.count)
    }


    back(){
        for(let i = 0; i<this.imgCapture.length; i++){
            this.imgCapture[i].classList.remove("active");
            this.pointWay? this.point[i].classList.remove("point_active"):""; 
        }      
        this.count--
       if(this.count < 0){
           this.count=this.imgCapture.length-1
       }
       clearInterval(this.stopSlide);   
       this.imgCapture[this.count].classList.add('active');     
       this.pointWay? this.point[this.count].classList.add("point_active"):"";  
        this.showImage()       
    }


    showImage(){                
        this.imgCapture = document.querySelectorAll('img')      
        this.imgCapture[this.count].classList.add('active');         
        this.stopSlide = setInterval(()=>{           
        for(let i = 0; i<this.imgCapture.length; i++){
           this.imgCapture[i].classList.remove("active");
          this.pointWay? this.point[i].classList.remove("point_active"):"";
        }
        this.count++  
        if(this.count>this.imgCapture.length-1){
            this.count=0
        }
        this.imgCapture[this.count].classList.add('active'); 
      this.pointWay? this.point[this.count].classList.add("point_active"):"";
        }, this.velocity)   
    }

    init(){     
        this.createElements();
    }
}