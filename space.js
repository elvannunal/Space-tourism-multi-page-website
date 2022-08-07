const moon=document.querySelector('.moon');
const mars=document.querySelector(".mars");
const europa=document.querySelector(".europa");
const titan=document.querySelector(".titan");
const marss=document.querySelector(".marss");
const sectionDestination=document.querySelector(".section-destination")
moon.addEventListener('click',()=>{
   mars.innerHTML=`
   <div class="${moon}">
            <img src="assets/destination/image-moon.png" alt="">
    </div>
    `;

    sectionDestination.innerHTML=`
    <div class="section-destination">
    <h1>MOON</h1>
    <p>Don't forget to pack your hiking boots.You'll need them<br>
        to tackle Olympus Mons, the tallest planetary mountain in<br>
        our solar system. It's two and a half times the size of<br>
        Everest!
    </p>
    <div class="block"></div>
    `
})
marss.addEventListener('click',()=>{
    mars.innerHTML=`
    <div class="${mars}">
             <img src="assets/destination/image-mars.png" alt="">
     </div>
     `
     ;
     sectionDestination.innerHTML=`
     <div class="section-destination">
     <h1>MARS</h1>
     <p>Don't forget to pack your hiking boots.You'll need them<br>
         to tackle Olympus Mons, the tallest planetary mountain in<br>
         our solar system. It's two and a half times the size of<br>
         Everest!
     </p>
     <div class="block"></div>
     `
 })
europa.addEventListener('click',()=>{
    mars.innerHTML=`
    <div class="${europa}">
             <img src="assets/destination/image-europa.png" alt="">
     </div>
     `;
     sectionDestination.innerHTML=`
     <div class="section-destination">
     <h1>EUROPA</h1>
     <p>Don't forget to pack your hiking boots.You'll need them<br>
         to tackle Olympus Mons, the tallest planetary mountain in<br>
         our solar system. It's two and a half times the size of<br>
         Everest!
     </p>
     <div class="block"></div>
     `
    
 })
titan.addEventListener('click',()=>{
    mars.innerHTML=`
    <div class="${titan}">
             <img src="assets/destination/image-titan.png" alt="">
     </div>
     `;
     sectionDestination.innerHTML=`
     <div class="section-destination">
     <h1>TITAN</h1>
     <p>Don't forget to pack your hiking boots.You'll need them<br>
         to tackle Olympus Mons, the tallest planetary mountain in<br>
         our solar system. It's two and a half times the size of<br>
         Everest!
     </p>
     <div class="block"></div>
     `
 })

