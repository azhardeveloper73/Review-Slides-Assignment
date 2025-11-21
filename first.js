const data = [
  {
    name: "Azhar Vayani",
    img: "https://avatars.githubusercontent.com/u/213297976?v=4",
    jobTitle: "Mern Stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati accusantium neque cumque delectus ipsam dolore porro officiis ab, vero pariatur tempore praesentium at inventore perspiciatis repellat rerum id commodi?",
  },
  {
    name: "Inno Sufiyan",
    img: "https://avatars.githubusercontent.com/u/66431140?v=4",
    jobTitle: "Full Stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati accusantium neque cumque delectus ipsam dolore porro officiis ab, vero pariatur tempore praesentium at inventore perspiciatis repellat rerum id commodi?",
  },
  {
    name: "Nabil Ahmed",
    img: "https://avatars.githubusercontent.com/u/200592644?v=4",
    jobTitle: "Mern Stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati accusantium neque cumque delectus ipsam dolore porro officiis ab, vero pariatur tempore praesentium at inventore perspiciatis repellat rerum id commodi?",
  },
  {
    name: "Saad Raza",
    img: "https://th.bing.com/th/id/OIP.CzTwFt-YORG8ZzAoBUHuWgHaHa?w=164&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    jobTitle: "Mern Stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati accusantium neque cumque delectus ipsam dolore porro officiis ab, vero pariatur tempore praesentium at inventore perspiciatis repellat rerum id commodi?",
  },
];

let starter = 0;

let img = document.querySelector("img");
let name = document.querySelector("h1");
let jobTitle = document.querySelector("h3");
let description = document.querySelector("p");
let surpriseBtn = document.getElementById("btn-2");


function dataContent() {
  img.src = data[starter].img;
  name.textContent = data[starter].name;
  jobTitle.textContent = data[starter].jobTitle;
  description.textContent = data[starter].description;
}

function previousHandler() {
    if(starter == 0) {
        starter = data.length -1;
    } else{
        starter--;
    }
  

  dataContent();
}
function nextHandler() {
 if(starter == data.length -1) {
        starter = 0;
    } else{
        starter++;
    }

  dataContent();
}

dataContent()



surpriseBtn.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * data.length);
    } while (randomIndex === starter);
    starter = randomIndex;
    dataContent();
});