/*

Project #1


Details:
 
Create a simple "to-do list" application, using client-side HTML, CSS, and Javascript only. 
This application should store its data using localStorage only, and should not connect to any external APIs, backends, databases etc.
This should function as a "Single Page Application", so the page should never actually refresh or reload, 
and no links should direct to any other page. Instead, when links are clicked (or forms are submitted), 
the contents of the page should disappear and the new content should be loaded in its place, all without actually redirecting the user. 
Here are the user-stories:


Index

1. Upon a fresh load (or refresh) of the application, the user should see the title of the application, a description,
 and two buttons: "Sign Up" and "Log In".

2. If "Sign Up" is clicked, the user should be taken to a form where they need to enter their: first name,
last name, email, and password (all strings, but passwords should not be displayed in plain text inputs, use password inputs instead).
 The user also needs to check a check-box that says "I agree to the Terms of Use". 
When they submit the form, if there are any errors on the form, they should see a red error message somewhere on the screen.
 If the form submission is successful, they should be taken to their dashboard.
All data for the new user should be stored in localStorage. Note: in an actual application you would never store passwords this way, 
this is just for the sake of this project.

3. If "Log In" is clicked the user should be taken to a form where they need to enter their email address and password. 
When they submit the form, if there are any errors on the form (or if the email and password don't match an existing user), 
they should see a red error message somewhere on the screen.
If the inputs are fine, and both of these match an existing user, then the user should be taken to their dashboard.

Dashboard:

1. The dashboard should list (in chronological order), all of the "To-Do Lists" created by the user thus far. 
If none have been created, none should be displayed. In either case, there should be a "Create New to-do List button" somewhere on the screen.

2. If one of the existing todo-lists is clicked on, the user should be taken to that list.

3. If a user clicks to create a new todo list, they should be taken to a blank list.

Lists:

When a user is viewing a (new or existing) list, they should be able to :

1. Name or rename the list to anything they want, as long as it doesn't conflict with the name of any other list created by that particular user.

2.  Add as many items to the list as they wish

3. Check off an item as "done", and uncheck it as well

4. Save the list

Users 

1. If the user is logged in, then at the top of the screen, on every page of the site, there should be a "log out" button. 
Clicking that should log the user out.

2. If the user is logged in, then at the top of the screen, on every page of the site, there should be a button that says "account settings". 
Clicking that link should take the user to a page where they can edit any/all of the information they entered on the signup form.

3. Your application should support as many unique users as possible. 
The actions that one user takes within the application should have virtually no effect on what other users are doing.

Extra Credit:

If you feel like getting fancy, try to find an open-source JS library for hashing passwords (using any hashing function you prefer).
Hash the passwords when you receive them and only store the hash rather than the raw password.

As mentioned above, storing actual users' passwords (in a real life application) is far more complex than this, and often involves many moving parts,
but it's still good practice to get used to using hashing libraries.
 */
let dataBase = [];
let loggedUserEmail = null;
let loggedUser = null;
let newuser;

const SignUp_LogIn = document.getElementById("SignUp-LogIn");
const SignUp = document.getElementById("sU");
const LogIn = document.getElementById("lI");




 // SIGN UP FORM

 const signUpFormDiv = document.getElementById("sUF");
 const signUpForm = document.getElementById("signUpForm");
 const FirstName = document.getElementById("FirstName");
 const FirstNameError = document.getElementById("FirstNameError");
 const LastName = document.getElementById("LastName");
 const LastNameError = document.getElementById("LastNameError");
 const Email = document.getElementById("Email");
 const EmailError = document.getElementById("EmailError");
 const Password = document.getElementById("Password");
 const PasswordError = document.getElementById("PasswordError");
 const Checkbox = document.getElementById("Checkbox");
 const CheckError = document.getElementById("CheckboxError");
 const SubmitError =document.getElementById("SubmitError");


 // LOGIN 

 const login = document.getElementById("lIF");


 // DASHBOARD

 const DashboardDiv = document.getElementById("Dashboard"); 
 const addButton = document.getElementById("addButton");
 const Pdashboard = document.getElementById("Pdashboard");
 const DashboardButton = document.getElementById("DASH1");
 const dashTitle = document.getElementById("dashTitle");
 const Logout  = document.getElementById("lastB")
 

 // DASHBOARD LIST 
 
 const createdList = document.getElementById("ulP");
 const newList = document.getElementById("newList");
 const changeTitle = document.getElementById("changeTitle");

// SETTING 

const setting = document.getElementById("setting");

 // DISPLAY SIGNUP FORM

SignUp.addEventListener("click",function(){

    displaySignUp();


});

// SETTING EVENT  

Logout.addEventListener("click",function(){
    hideSetting();
    hideDashboard();
    hideLogin();
    hideSignUp();
    removeGreenBorder();
    displaySignUp();
})


// SIGNUP EVENT


 signUpForm.addEventListener("submit",function(e){
                e.preventDefault();

    const fistnameValue = FirstName.value.trim();
    const lastnameValue = LastName.value.trim();
    const emailValue = Email.value.trim();
    const passwordValue = Password.value.trim();
    const checkboxValue = Checkbox.checked;
    loggedUserEmail = emailValue;

  if (fistnameValue === "") {
    checkError(FirstName,FirstNameError);
  }else{
    checkSuccess(FirstName,FirstNameError);
  }

  if (lastnameValue === "") {
    checkError(LastName,LastNameError);
  }else{
    checkSuccess(LastName,LastNameError);
  }

  if (emailValue === "") {
    checkError(Email,EmailError);
  }else{
    checkSuccess(Email,EmailError);
  }

  if (passwordValue === "") {
    checkError(Password,PasswordError);
  }else{
    checkSuccess(Password,PasswordError);
  }


  if (checkboxValue === false) {
    checkError(Checkbox,CheckboxError);
  }else{
    checkSuccess(Checkbox,CheckboxError);
  }

 newuser = createUserAccount(fistnameValue,lastnameValue,emailValue,passwordValue);
console.log(loggeduser());


 if((loggedUserEmail.length > 5) && (fistnameValue.length > 1) && (lastnameValue.length > 1) && (passwordValue.length > 3) && (checkboxValue == true))
 {

if(dataBase.length == 0){

   setTimeout(function(){
    dataBase.push(newuser);
    updateLocalStorage()
    hideSignUp();                      
    hideSignupLogIn();
    displayDashboard();
    hidePdashboard();
    console.log("Hi I am here");

   },2000);  

 }else{
    setTimeout(function(){
    checkUserEmail();
    console.log("Hi I am here down");
    
    },2000);

    

 }

 }else{

    setTimeout(function(){

alert("Samething wrong ");

    },2000);
    
 }

 
 

 

 

 // console.log(dataBase.length);

 const txt = localStorage.getItem("mylocal");
 const obj = JSON.parse(txt);
 console.log(obj[0].list);

 createList();

this.reset();


 });


 // DASHBOARD EVENT 

DashboardButton.addEventListener("click",function(){
        hideSetting();
        hidePdashboard();
        displayDashTitle();
        displayCreatedList();
        displayaddButton();
        listTitle();
});

addButton.addEventListener("click",function(){
         hideaddButton();
         hideDashTitle();
         hideCreatedList();
         displayPdashboard();
         nameNewListTitle();
});

changeTitle.addEventListener("click",function(e){
    e.preventDefault();
    createNewListTitle();
});

 

// CHECK SIGN UP ERRORS

 function checkError(elementName,errorName){
    errorName.classList.remove("hide");
    errorName.classList.add("display");
    elementName.style.border = "1px solid red " ;

 }

 // CHECK SIGN UP SECCESS

 function checkSuccess(elementName,errorName){
    errorName.classList.remove("display");
    errorName.classList.add("hide");
    elementName.style.border = "1px solid green " ;
 }


 // HIDE SIGN UP FORM 

 function hideSignUp(){
    signUpFormDiv.classList.remove("display");
    signUpFormDiv.classList.add("hide");
 }


 // DISPLAY SIGN UP



 function displaySignUp(){
    signUpFormDiv.classList.remove("hide");
    signUpFormDiv.classList.add("display");
 }

// HIDE SIGNUP LOGIN


function hideSignupLogIn(){
    SignUp_LogIn.classList.remove("display");
    SignUp_LogIn.classList.add("hide");
}


// DISPLAY SIGNUP  LOGIN 

function displaySignupLogIn(){    
    SignUp_LogIn.classList.add("display");
    SignUp_LogIn.classList.remove("hide");
}

// DISPLAY LOGIN 

function displayLogin(){
    login.classList.remove("hide");
    login.classList.add("display");
}

// HIDE LOGIN 

function hideLogin(){
    login.classList.remove("display");
    login.classList.add("hide");
}

// HIDE DASHBOARD

function hideDashboard(){
    DashboardDiv.classList.remove("display");
    DashboardDiv.classList.add("hide");
} 


// DISPLAY DASHBOARD

function displayDashboard(){
    DashboardDiv.classList.remove("hide");
    DashboardDiv.classList.add("display");
}

// HIDE THE BUTTON THAT IS USED TO CREATE LIST

function hideaddButton(){
    addButton.classList.add("hide");
    addButton.classList.remove("display");
}


// DISPLAY THE BUTTON THAT IS USED TO CREATE LIST

function displayaddButton(){
    addButton.classList.add("display");
    addButton.classList.remove("hide");
}

// HIDE PRINCIPAL DASHBOARD

function hidePdashboard(){
    Pdashboard.classList.remove("display");
    Pdashboard.classList.add("hide");
}

// DISPLAY PRINCIPAL DASHBOARD

function displayPdashboard(){
    Pdashboard.classList.remove("hide");
    Pdashboard.classList.add("display");
}


// HIDE DASHTITLE 

function hideDashTitle(){
    dashTitle.classList.remove("display");
    dashTitle.classList.add("hide");
}

// DISPLAY DASHTITLE

function displayDashTitle(){
    dashTitle.classList.remove("hide");
    dashTitle.classList.add("display");
}

// HIDE CREATED LIST 

function hideCreatedList(){
    createdList.classList.remove("display");
    createdList.classList.add("hide");
}

// DISPLAY CREATED LIST 

function displayCreatedList(){
    createdList.classList.add("display");
    createdList.classList.remove("hide");
}

// DISPLAY SETTING

function displaySetting(){
    setting.classList.remove("hide");
    setting.classList.add("display");
} 

// HIDE SETTING 

function hideSetting(){
    setting.classList.remove("display");
    setting.classList.add("hide");
}

// REMOVE GREEN BORDER

function removeGreenBorder(){
    FirstName.style.border = "1px solid white";
    LastName.style.border = "1px solid white";
    Email.style.border = "1px solid white";
    Password.style.border = "1px solid white";
}

// DISPLAY LIST TITLE 

function listTitle(){
    let list;
    const createUl = document.createElement("ul");
    const obj = readTheLocalstorage();
    let loggedMail = readLocalstorageLogged();
    let listLi;
    let listA;
     
    for(let i = 0; i < obj.length; i++)
    {
        
        if(obj[i].useraccount.email === loggedMail)
        {
            
            for(let listName of obj[i].list)
            {

                 listLi = document.createElement("li");
                 listA = document.createElement("a");
                 listA.setAttribute("href","#");
                 listA.innerText = listName;


            }
            listLi.appendChild(listA);
            createUl.appendChild(listLi);
        }
    }
    return createdList.appendChild(createUl);
}


// LOGGED USER 

function loggeduser(){
    
    let obj = readTheLocalstorage();
    let objEmail = readLocalstorageLogged(); 

    for(let i = 0; i < obj.length; i++)
    {
        if(obj[i].useraccount.email === objEmail)
        {
            return obj[i].useraccount.email
        }
        
    }
    
}

console.log(loggeduser());

// CREATE NEW LIST TITLE

function nameNewListTitle(){
    let value = "NEW LIST";
    newList.value = value;
}

createNewListTitle();

function createNewListTitle(){
    let listName = newList.value;
    let listStorage = [];
    let obj = readTheLocalstorage();
    let loggedMail = readLocalstorageLogged();
    // let list;

   for(let i = 0; i < obj.length; i++)
   {
     if(obj[i].useraccount.email === loggedMail)
     {  
        
           
             obj[i].list.push(listName);
           
        
        
     }
     
    }

        listStorage.push(listName);
    
        localStorage.setItem("mylocal",JSON.stringify(obj));
        localStorage.setItem("listStorage",JSON.stringify(listStorage));
    
  

}
 
 console.log(createNewListTitle() +"new list");

// CREATE NEW LIST



function createList(){    
    let loggedMail = loggeduser();
}




// READ THE LOCALSTORAGE

function readTheLocalstorage(){
    const txt = localStorage.getItem("mylocal");
    const obj = JSON.parse(txt);
    return obj;
}

// READ THE LOCALSTORAGE LOGGED EMAIL

function readLocalstorageLogged(){
    const txt = localStorage.getItem("userMail");
    const objEmail = JSON.parse(txt);
    return objEmail;
}


// CREATE USER


function createUserAccount(firstname,lastname,email,password){

    let user = { 
        useraccount : {
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : password,
        
                },
    list : []
    };

    return user;
}
// 








function createList(){

    

   

}

// INSERT USE INTO DATABASE

function insertUserIn2DB(user){
    let txt = localStorage.getItem("mylocal");
    dataBase = JSON.parse(txt)
    dataBase.push(user);
    updateLocalStorage()
}

// INSER DATABASE INTO LOCALSTORAGE

function updateLocalStorage(){
    let txt = JSON.stringify(dataBase);
    let txtuserMail = JSON.stringify(loggedUserEmail);
    localStorage.setItem("mylocal",txt);
    localStorage.setItem("userMail",txtuserMail);
}

// CHECK IF USER EXIST IN THE DATABASE

function checkUserEmail(){

 let txt = localStorage.getItem("mylocal");
 const obj = JSON.parse(txt);
 // console.log(obj[0].useraccount.email);
 for(let i = 0 ; i < obj.length ; i++)
 {
    if(obj[i].useraccount.email === loggedUserEmail)
    {
            SubmitError.classList.remove("hide");    
            SubmitError.classList.remove("display"); 
            console.log("not ok");
            return;
    }else{
        SubmitError.classList.remove("display");    
        SubmitError.classList.add("hide"); 
    }
 }
 
 insertUserIn2DB(newuser);
 hideSignUp();
 hideSignupLogIn();
 displayDashboard();
 displayDashTitle();
 displayCreatedList();
 displayaddButton();
 hidePdashboard();
 updateLocalStorage();
            console.log(" ok");
 
}



