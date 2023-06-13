import './Style.css';

//DarkMode LightMode Toggle
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const options = document.getElementById('options');

//Generate homePage dynamically

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    document.body.classList.toggle('dark');
    const logo = document.getElementById('logo')
    const img =document.getElementById('image')
    
    //see which mode it is
    const isDarkMode = body.classList.contains('dark');

    if(isDarkMode){
        logo.src = "../src/reasources/dark-logo.jpeg";
        if(img){
          img.src = "../src/reasources/dark.jpg";
        }
    }
    else{
        logo.src = "../src/reasources/light-logo.jpeg";
        if(img){
          img.src = "../src/reasources/light-bat.jpg";
        }
    }
});

let generate = document.querySelector('.generate');

let homegen = ()=>{
    generate.innerHTML = 
    `<div class="home">
    <div class="content">
        <div class="text">
            <div class="slogan">
                BY<br>SNUITES<br>FOR<br>SNUITES
            </div>
            <div class="slogan-para">
                Welcome to SnuAcademia, the ultimate student designed website that helps in simplifying study life
                at SNU
            </div>
        </div>
    </div>
    <img id="image" src="../src/reasources/light-bat.jpg" style="width:50%;margin-right: 10%;">
</div>`
}

//default is Home
//homegen();
document.getElementById('home').addEventListener('click', homegen)

//generate Study Material Tab
let studyGen = ()=>{
    generate.innerHTML = `<div class="study">
    <div class="tagline">
        <span>Where Textbooks</span>
        <span>And Dreams Collide</span>
        <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Explore, Discover, and Shape Your Academic Journey with Limitless Possibilities</span>
    </div>
    <div class="search-bar">
        <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>
        <input type="text" id="course-select" placeholder="Search..." data-search>
    </div>
    <div class="courses">
        
    </div>
</div>`

const generateCourses = (array, linkArray) => {
    let courses = document.querySelector('.courses');
    let searchBar = document.getElementById('course-select');
  
    searchBar.addEventListener('input', () => {
      //input being typed inside the search bar
      const searchText = searchBar.value.toLowerCase();
  
      // Clear existing courses
      courses.innerHTML = '';
  
      for (let index = 0; index < array.length; index++) {
        const courseName = array[index].toLowerCase();
        const link = linkArray[index];
  
        if (courseName.includes(searchText)) {
          let courseDiv = document.createElement('div');
          courseDiv.classList.add('courseBox');
          courses.appendChild(courseDiv);
          courseDiv.innerHTML = `<span id="course-${index}">${array[index]}</span>
          <span class="glink"  id="link-${index}"><a href="${link}" target="_blank">Content</a></span>`;
  
          courseDiv.addEventListener('mouseover', () => {
            document.getElementById(`course-${index}`).style.display = 'none';
            document.getElementById(`link-${index}`).style.display = 'flex';
          });
          courseDiv.addEventListener('mouseout', () => {
            document.getElementById(`course-${index}`).style.display = 'flex';
            document.getElementById(`link-${index}`).style.display = 'none';
          });
        }
      }
    });
    //To generate courses when you load up page
    searchBar.dispatchEvent(new Event('input'));
  };
//example arrays
let courseArr = ['DES101','FAC202','MEC104','MKT202','OHM401','STM204']
let linkArr = ['https://drive.google.com/drive/folders/1pfWH0J2ek7yxTMbmoCv-4YQPB5XKOLHr?usp=sharing','https://drive.google.com/drive/folders/1q7UsKWFg5odT6rX57T4LArhSY5eLa2RJ?usp=sharing','https://drive.google.com/drive/folders/1NlrHKCP52b53OQiYcdBgO7NvL9eQ81zv?usp=sharing','https://drive.google.com/drive/folders/1tzIs2ux6lR1u8eT9fTAD-5JXBkhAGqrb?usp=drive_link','https://drive.google.com/drive/folders/1_-mkdQHCqpPceiQeZw7j91r0hVcUhmhJ?usp=sharing','https://drive.google.com/drive/folders/1Z9BqJC1vCnMxFSRT8YMafB1sdlLAv8mu?usp=sharing'];
generateCourses(courseArr,linkArr);

}
document.getElementById('study').addEventListener('click',studyGen)

//Generate Roadmap
const roadGen = ()=>{
  generate.innerHTML = ``;
}

document.getElementById('road').addEventListener('click',roadGen);

//Generate Erp Management Tab
const erpGen = ()=>{
  generate.innerHTML = ``;
}

document.getElementById('erp').addEventListener('click',erpGen);