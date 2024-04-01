// let i=0
// let j=0;

// function btn(){
// for(i=0;i<1;i++){
//    document.querySelector("#loop").innerHTML= `  <img src="https://i.pinimg.com/736x/1b/fb/23/1bfb238fd9c5d1f8623d2c90690707a3.jpg" alt="Portrait 1" style="width: 50%;">
//     <h3>Portrait 2</h3>
//     <p>By Artist "faris shafi"</p>
//     <p>$80</p>
//     <button style="border-radius: 5px; padding: 5px;background-color: #343ca0;

//     <img src="https://i.pinimg.com/736x/3d/57/c7/3d57c7de976ebad86636674f0184646e.jpg" alt="Portrait 1" style="width: 50%;">
//     <h3>Portrait 3</h3>
//     <p>By Artist ""Talha Anjum"</p>
//     <p>$80</p>
  
//     <img src="https://img.freepik.com/premium-photo/aesthetic-elegance-bestselling-white-art-against-black-backdrop_983420-155002.jpg" alt="Portrait 1" style="width: 50%;">
//     <h3>Portrait 1</h3>
//     <p>By Artist 4</p>
//     <p>$80</p>
  
    
//     `
// }
// }

// function btn2(){
//     for(j=0;j<1;j++){
//         document.querySelector("#loop2").innerHTML=` <img src="https://i.pinimg.com/736x/1b/fb/23/1bfb238fd9c5d1f8623d2c90690707a3.jpg" alt="Portrait 1" style="width: 50%;">
//         <h3>Portrait 2</h3>
//         <p>By Artist "faris shafi"</p>
//         <p>$80</p>
      
//         <img src="https://i.pinimg.com/736x/3d/57/c7/3d57c7de976ebad86636674f0184646e.jpg" alt="Portrait 1" style="width: 50%;">
//         <h3>Portrait 3</h3>
//         <p>By Artist ""Talha Anjum"</p>
//         <p>$80</p>
      
//         <img src="https://img.freepik.com/premium-photo/aesthetic-elegance-bestselling-white-art-against-black-backdrop_983420-155002.jpg" alt="Portrait 1" style="width: 50%;">
//         <h3>Portrait 1</h3>
//         <p>By Artist 4</p>
//         <p>$80</p>
//         `
//     }
// }
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
  // array object potraits

  let potrait = [
{
    name: "wallpaper cave",
    price:"1200$",
    artistname: "John keat",
img:"images/p1.webp"
},
{
    name: "wallpaper cave",
    price:"1200$",
    artistname: "John keat",
img:"images/p2.jpg"
},
{
    name: "wallpaper cave",
    price:"1200$",
    artistname: "John keat",
img:"images/p3.webp"
},
{
    name: "wallpaper cave",
    price:"1200$",
    artistname: "John keat",
img:"images/p4.jpg"
},
{
    name: "wallpaper cave",
    price:"1200$",
    artistname: "John keat",
img:"images/p5.jpg"
},
{
    name: "wallpaper cave",
    price:"1200$",
    artistname: "John keat",
img:"images/p6.jpg"
},

  ]
//   console.log(potrait.length)
let x ="";
let count =0;
// let fun =0;
function showmore(){
    
    for (let i=0; i<potrait.length;i++){ 
        
        x+=` <div class="sublist">
    <div class="product-card">
        <img src="${potrait[i].img}"alt="Portrait 1" style="width: 50%;">
        <h3>${potrait[i].name}</h3>
        <p>${potrait[i].artistname}</p>
        <p>${potrait[i].price}</p>
        <button style="border-radius: 5px; padding: 5px;background-color: #343ca0;
        color: white; border: none;" >Add to Cart</button>
    </div>
    <!-- Add more portrait cards -->
    </div>`
}
  document.querySelector("#portrait-section").innerHTML=x;
document.querySelector("#btnShowMore").style.display="none";
document.querySelector("#btnShowLess").style.display="block";

}
 
let p="";         
   
//    console.log(showmore1())
  for (let i=0; i<potrait.length;i++) {
    // console.log(i)
    if(count >=0 && count<3){
// console.log(potrait[key].name)
p+=` <div class="sublist">
    <div class="product-card">
        <img src=${potrait[i].img} alt="Portrait 1" style="width: 50%;">
        <h3>${potrait[i].name}</h3>
        <p>${potrait[i].artistname}</p>
        <p>${potrait[i].price}</p>
        <button style="border-radius: 5px; padding: 5px;background-color: #343ca0;
        color: white; border: none;" >Add to Cart</button>
    </div>
    <!-- Add more portrait cards -->
    </div>`

count++; 



    }
   
    
    
  }
 
// console.log(showmore())
  document.querySelector("#portrait-section").innerHTML=p;

  let landscape=[
    {
        name: "landscape cave",
        price:"1200$",
        artistname: "John keat",
    img:"images/L1.webp"
    },
    {
        name: "landscape cave",
        price:"1200$",
        artistname: "John keat",
    img:"images/L2.jpg"
    },
    {},
    {},
    {},
    {},
  ]