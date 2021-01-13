const header = document.querySelector('.card-header')
const title = document.querySelector('.title')
const content = document.querySelector('.content')
const profile = document.querySelector('.profile')
const personName = document.querySelector('.name')
const date = document.querySelector('.date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')


function getData (){
     header.innerHTML =  
     '<img src="./timon-studler-BIk2ANMmNz4-unsplash.jpg" alt="" />'
     title.innerHTML = 'Lorem ipsum dolor sit amet'
     content.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, debitis!'
     profile.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
personName.innerHTML = 'John Doe'
date.innerHTML = 'Oct 20,2020'
animated_bgs.forEach((bg)=>{
     bg.classList.remove('animated-bg')
})
animated_bgs_text.forEach((bg)=>{
     bg.classList.remove('animated-bg-text')
})

}
setTimeout(getData, 3000);
