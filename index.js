import './Style.css';
import logo1 from "../src/reasources/10.png"
import logo2 from "../src/reasources/9.png"
//DarkMode LightMode Toggle
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const options = document.getElementById('options');

//Generate homePage dynamically

toggle.addEventListener('click', function () {
  this.classList.toggle('bi-moon');
  document.body.classList.toggle('dark');
  const logo = document.getElementById('logo')
  const img = document.getElementById('image')

  //see which mode it is
  let isDarkMode = body.classList.contains('dark');

  if (isDarkMode) {
    logo.src = logo2;
    if (img) {
      img.src = "../src/reasources/dark.jpg";
    }
  }
  else {
    logo.src = logo1;
    if (img) {
      img.src = "../src/reasources/light-bat.jpg";
    }
  }
});

let generate = document.querySelector('.generate');
const hoe = document.getElementById('home');
const stud = document.getElementById('study');
const road = document.getElementById('road');
const erp = document.getElementById('erp');
let homegen = () => {
  const isDarkMode = body.classList.contains('dark');
  hoe.style.borderBottom = '2px solid var(--font-color)';
  stud.style.borderBottom = 'none';
  road.style.borderBottom = 'none';
  erp.style.borderBottom = 'none';
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
  const img = document.getElementById('image')
  if (isDarkMode) {
    if (img) {
      img.src = "../src/reasources/dark.jpg";
    }
  }
  else {
    if (img) {
      img.src = "../src/reasources/light-bat.jpg";
    }
  }
}

//default is Home
homegen();
document.getElementById('home').addEventListener('click', homegen)

//generate Study Material Tab
let studyGen = () => {
  hoe.style.borderBottom = 'none';
  stud.style.borderBottom = '2px solid var(--font-color)';
  road.style.borderBottom = 'none';
  erp.style.borderBottom = 'none';
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
  let courseArr = ['DES101', 'FAC202', 'MEC104', 'MKT202', 'OHM401', 'STM204']
  let linkArr = ['https://drive.google.com/drive/folders/1pfWH0J2ek7yxTMbmoCv-4YQPB5XKOLHr?usp=sharing', 'https://drive.google.com/drive/folders/1q7UsKWFg5odT6rX57T4LArhSY5eLa2RJ?usp=sharing', 'https://drive.google.com/drive/folders/1NlrHKCP52b53OQiYcdBgO7NvL9eQ81zv?usp=sharing', 'https://drive.google.com/drive/folders/1tzIs2ux6lR1u8eT9fTAD-5JXBkhAGqrb?usp=drive_link', 'https://drive.google.com/drive/folders/1_-mkdQHCqpPceiQeZw7j91r0hVcUhmhJ?usp=sharing', 'https://drive.google.com/drive/folders/1Z9BqJC1vCnMxFSRT8YMafB1sdlLAv8mu?usp=sharing'];
  generateCourses(courseArr, linkArr);
}
document.getElementById('study').addEventListener('click', studyGen)

//Generate Roadmap
const roadGen = () => {
  hoe.style.borderBottom = 'none';
  stud.style.borderBottom = 'none';
  road.style.borderBottom = '2px solid var(--font-color)';
  erp.style.borderBottom = 'none';
  generate.innerHTML = `<div class="roadMaps">
  <div class="tagline">
      <span>Choose</span>
      <span>Your Academic Trail</span>
      <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Chart Your Academic Journey: Explore Major and Minor Paths</span>
  </div>
  <div class="search-bar">
      <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>
      <input type="text" id="course-select" placeholder="Search..." data-search>
  </div>
  <div class="roads">
      
  </div>`;
  let roadArr = ['CSC', 'ECE', 'EEE', 'MECH', 'BMS', 'ECO']
  generateRoad(roadArr);
}

const generateRoad = (array) => {
  let roads = document.querySelector('.roads');
  let searchBar = document.getElementById('course-select');

  searchBar.addEventListener('input', () => {
    //input being typed inside the search bar
    const searchText = searchBar.value.toLowerCase();

    // Clear existing courses
    roads.innerHTML = '';

    for (let index = 0; index < array.length; index++) {
      const branchName = array[index].toLowerCase();
      //const link = linkArray[index];
      if (branchName.includes(searchText)) {
        let mapDiv = document.createElement('div');
        mapDiv.classList.add('roadBox');
        roads.appendChild(mapDiv);
        mapDiv.innerHTML = `<span id="course-${index}">${array[index]}</span>
          <div style="display:flex; justify-content: space-around; width:80%" >
          <span class="glink-r"  id="majorLink-${index}"><a class='ar' href="https://www.google.com/" target="_blank">Major</a></span>
          <span class="glink-r" id="minorLink-${index}"><a class='ar'href="https://www.google.com/" target="_blank">Minor</a></span>
          </div>`;

        mapDiv.addEventListener('mouseover', () => {
          document.getElementById(`course-${index}`).style.display = 'none';
          document.getElementById(`majorLink-${index}`).style.display = 'flex';
          document.getElementById(`minorLink-${index}`).style.display = 'flex';

        });
        mapDiv.addEventListener('mouseout', () => {
          document.getElementById(`course-${index}`).style.display = 'flex';
          document.getElementById(`majorLink-${index}`).style.display = 'none';
          document.getElementById(`minorLink-${index}`).style.display = 'none';
        });
      }
    }
  });
  //To generate courses when you load up page
  searchBar.dispatchEvent(new Event('input'));
}

document.getElementById('road').addEventListener('click', roadGen);

//Generate Erp Management Tab
const erpGen = () => {
  hoe.style.borderBottom = 'none';
  stud.style.borderBottom = 'none';
  road.style.borderBottom = 'none';
  erp.style.borderBottom = '2px solid var(--font-color)';
  generate.innerHTML = `<div class="erpManagement">
  <div class="tagline">
      <span>Simplify</span>
      <span>Your Erp Experience</span>
      <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Commonly asked FAQs </span>
  </div>
  <div class="linkSection">
      <div id="erpLink">Erp</div>
      <div id="fastLink">Fastrack</div>
      <div id="hosteLink">Hostel Management</div>
      <div id="bbLink">Blackboard</div>
  </div>
  <div class="faqs">
      <div class>
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <span>What is Erp?</span>
              <i class="bi bi-caret-down-fill"></i>
          </div>
          <div class="sol">random image/video</div>                    
      </div>
  </div>
</div>`;
  let linkSection = document.querySelector('.linkSection');
  let links = linkSection.getElementsByTagName("div");
  let faqs = document.querySelector('.faqs');

  function faqFill(array) {
    faqs.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      console.log('hello');
      let element = array[i];
      let faqDiv = document.createElement('div');
      faqDiv.innerHTML =
        `<div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
      <span>${element.question}</span>
      <span><i id='drop-${i}' class="bi bi-caret-down-fill"></i></span>
      </div>
      <div class="sol" id='sol-${i}'>${element.answer}</div>`
      faqs.appendChild(faqDiv);
      document.getElementById(`drop-${i}`).addEventListener('click', () => {
        const sol = document.getElementById(`sol-${i}`);
        const arrow = document.getElementById(`drop-${i}`);
        if (sol.style.display == 'flex') {
          sol.style.display = 'none';
          arrow.classList = 'bi-caret-down-fill';
        }
        else {
          sol.style.display = 'flex'
          arrow.classList = 'bi-caret-up-fill';
        }
      })
    }
  }
  faqs.innerHTML = '';
  //Example arrays
  let erpFaqs = [
    {
      question: "What is ERP?",
      answer: "ERP (Enterprise Resource Planning) is a software system that integrates various business processes and functions to streamline operations and enhance efficiency."
    },
    {
      question: "What are the benefits of implementing an ERP system?",
      answer: "Some of the benefits of implementing an ERP system include improved productivity, better data visibility, enhanced decision-making, streamlined processes, and cost savings."
    },
    {
      question: "How does an ERP system work?",
      answer: "An ERP system works by integrating data and processes across different departments or functions within an organization, allowing for centralized data storage, real-time information sharing, and efficient collaboration."
    },
    {
      question: "What modules are typically included in an ERP system?",
      answer: "Common modules in an ERP system include finance and accounting, human resources, inventory management, procurement, sales and marketing, production planning, and customer relationship management (CRM)."
    },
    {
      question: "How can ERP benefit educational institutions?",
      answer: "ERP systems can benefit educational institutions by automating administrative tasks, managing student records, facilitating communication, improving resource allocation, and supporting data-driven decision-making."
    }
  ];
  let fastrackFaqs = [
    {
      question: "What is Fastrack?",
      answer: "Fastrack is a system used for applying for permission to leave the campus grounds temporarily."
    },
    {
      question: "How do I apply for Fastrack?",
      answer: "To apply for Fastrack, you need to log in to the Fastrack portal, fill out the required details, and submit your application."
    },
    {
      question: "What are the eligibility criteria for Fastrack?",
      answer: "The eligibility criteria for Fastrack may vary depending on the university's policies. Typically, it may include factors such as academic standing, disciplinary record, and attendance."
    },
    {
      question: "How long does it take to get a Fastrack approval?",
      answer: "The time taken to receive a Fastrack approval can vary. It is recommended to submit your application well in advance to allow sufficient time for the approval process."
    },
    {
      question: "What should I do if my Fastrack application gets rejected?",
      answer: "If your Fastrack application gets rejected, you can reach out to the designated authority or department to understand the reasons for rejection and seek further guidance."
    }
  ];
  let hostelFaqs = [
    {
      question: "What is hostel management?",
      answer: "Hostel management refers to the administration and supervision of residential facilities provided to students or individuals within an educational institution or other similar settings."
    },
    {
      question: "How do I apply for hostel accommodation?",
      answer: "To apply for hostel accommodation, you typically need to fill out a hostel application form provided by your educational institution. The form will require necessary details such as personal information, preferred room type, and any specific requirements."
    },
    {
      question: "What amenities are usually provided in hostels?",
      answer: "Hostels generally offer basic amenities such as beds, study desks, storage spaces, shared bathrooms, common areas, and sometimes additional facilities like recreational areas, laundry rooms, or dining halls."
    },
    {
      question: "What are the rules and regulations in hostels?",
      answer: "Hostels have specific rules and regulations that residents must adhere to, including guidelines related to curfew hours, visitor policies, noise restrictions, cleanliness, safety protocols, and other aspects to ensure a conducive living environment for all residents."
    },
    {
      question: "What should I do if I have issues or complaints regarding hostel facilities?",
      answer: "If you have any issues or complaints regarding hostel facilities, it is recommended to contact the hostel management office or the designated authority responsible for addressing such concerns. They will assist you in resolving the problem or guiding you on the necessary steps to take."
    }
  ];
  let blackboardFaqs = [
    {
      question: "What is Blackboard?",
      answer: "Blackboard is an online learning management system (LMS) used by professors to provide course materials, including notes, assignments, announcements, and other resources to students in a digital format."
    },
    {
      question: "How do I access Blackboard?",
      answer: "To access Blackboard, you need to log in to your educational institution's Blackboard portal using your assigned username and password. The portal is typically accessible through a web browser or a dedicated Blackboard mobile app."
    },
    {
      question: "What kind of materials can I find on Blackboard?",
      answer: "On Blackboard, professors can upload various materials such as lecture notes, slides, reading materials, videos, quizzes, discussion boards, and other course-related resources. It serves as a centralized platform for accessing and managing course content."
    },
    {
      question: "How can I submit assignments on Blackboard?",
      answer: "Blackboard provides features for students to submit their assignments electronically. Professors usually set up specific assignment submission areas within Blackboard where students can upload their files or enter text-based responses."
    },
    {
      question: "Can I communicate with my professors through Blackboard?",
      answer: "Yes, Blackboard offers communication tools such as email, discussion boards, and messaging features that allow students to interact with their professors. You can use these tools to ask questions, seek clarification, or engage in course-related discussions."
    }
  ];
  document.getElementById('erpLink').addEventListener('click', function () {
    faqFill(erpFaqs);
  });
  document.getElementById('fastLink').addEventListener('click', function () {
    faqFill(fastrackFaqs);
  });
  document.getElementById('hosteLink').addEventListener('click', function () {
    faqFill(hostelFaqs);
  });
  document.getElementById('bbLink').addEventListener('click', function () {
    faqFill(blackboardFaqs);
  });
}

document.getElementById('erp').addEventListener('click', erpGen);