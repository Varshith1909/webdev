// Add your code here

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const date = form.elements.date.value;
    const newsletter = formData.get("Newsletter");

    

    if(!username || !email || !password){
        console.warn("You must enter some data to submit this form");
    }

    else{
        console.groupCollapsed("========= Form Submission =========");
        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        if(newsletter == null){
            console.log("Newsletter: no submission")
        }
        else{
        console.log(`Newsletter: ${newsletter}`);
        }
            
        console.log(!date ? "Date : no submission" : `Date: ${date}`);
        console.groupEnd();
    }
    
});