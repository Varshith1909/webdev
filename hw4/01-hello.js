// Add your code here
let main = document.querySelector('main');

let image = document.createElement('img');
image.src = '../images/Varshith.jpg';
image.alt = 'Selfie of Varshith infront of a mirrror';
image.style.width = '200px';
image.style.height = '200px';
image.style.borderRadius = '50%';
image.style.display = 'block';
image.style.margin = 'auto';
main.append(image);

let para = document.createElement('p');
para.textContent = 
    "Hello, I am Varshith Chennuru a Masters student and my major is computer science. A tech-savvy individual with a Bachelor's degree in Computer Science seeking employment as a software developer. Passionate about learning and consistently advancing my knowledge and skills. Attended seminars and bootcamps on coding , web development. I am also a core team member of Google developer student club and I have been in part of conducting events.";
para.style.paddingLeft = "20%";
para.style.paddingRight = "20%";

let first = para.textContent.substring(0, para.textContent.indexOf('. ') + 1);
let remaining = para.textContent.substring(para.textContent.indexOf('. ') + 1);

let bold = document.createElement('strong');
bold.textContent = first;

para.textContent = '';
para.appendChild(bold);
para.appendChild(document.createTextNode(remaining));

main.append(para);
