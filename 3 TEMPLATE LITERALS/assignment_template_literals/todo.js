let DataBase = [];
let loginUser = null;
let listTitle = null;


/* ====================================================
                         HEADER
======================================================*/
const header = document.querySelector("header");
header.innerHTML =`
    <div class="pirple color-white">
        <img src="Pirple1.png" alt="Pirple logo">
        <a href="http://www.pirple.com">www.pirple.com</a>
    </div>
    <div class="page_title">
        <p>To Do assignment using template literals</p>
    </div>
    <div class="Principal_link color-white">
        <button class="signupB" id="signupB">Sign Up</button>
        <button class="loginB" id="loginB">Login</button>
        <button class="dashboardB hide" id="dashboardB">Dashboard</button>
        <button class="settingB hide" id="settingB">Setting</button>
        <button class="logoutB hide" id="logoutB">Logout</button>
    </div>`;

// console.log(header.innerHTML);
/* ====================================================
                        END HEADER
======================================================*/ 
/* ====================================================
                          MAIN
======================================================*/
let content = document.querySelector(".content");
content.innerHTML += `
    <div class="home" id="home">
        to do assignment <br> by template literals
    </div>`;
content.innerHTML +=`
            <div class="signupdiv hide"  id="signupdiv">
                <h2>Sign Up</h2>
                <form id="signupForm">
                    <div class="label_input">
                        <label>FirstName</label>
                        <input type="text" placeholder="Enter FirstName" id="sFirstName">
                        <p class="hide" id="ErrorSfirstname">Error Enter FirstName</p>
                    </div>
                    <div class="label_input">
                        <label>LastName</label>
                        <input type="text" placeholder="Enter LastName" id="sLastName">
                        <p class="hide" id="ErrorSlastname">Error Enter LastName</p>
                    </div>
                    <div class="label_input">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" id="sEmail">
                        <p class="hide" id="ErrorSemail">Error Enter Email</p>
                    </div>
                    <div class="label_input">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" id="sPassword">
                        <p class="hide" id="ErrorSpassword">Error Enter Password</p>
                    </div>
                    <div class="label_inputcheckbox">
                        <input type="checkbox"  id="sCheckbox">
                        <span>I agree to the Terms of Use</span>
                        <p class="hide" id="ErrorScheckbox">Error Agree Terms of Use </p>
                    </div>
                    <div class="label_input">
                       
                        <input type="submit" value="SIGN UP">
                      
                    </div>

                </form>
            </div>`;

content.innerHTML +=`
            <div class="signupdiv hide"  id="logindiv">
                <h2>Login</h2>
                <form id="loginForm">
                   
                    <div class="label_input">
                        <label>Email</label>
                        <input type="email" placeholder="Enter FirstName" id="lEmail">
                        <p class="hide" id="errorlemail">Error Enter Email</p>
                    </div>
                    <div class="label_input">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" id="lPassword">
                        <p class="hide" id="errorlpassword">Error Enter Password</p>
                    </div>
                    
                    <div class="label_input">
                       
                        <input type="submit" value="LOGIN">
                      
                    </div>

                </form>
            </div>`;
content.innerHTML +=`
<div class="signupdiv hide"  id="settingdiv">
                <h2>Setting</h2>
                <form>
                    <div class="label_input">
                        <label>FirstName</label>
                        <input type="text" placeholder="Enter FirstName" id="setFirstName">
                    </div>
                    <div class="label_input">
                        <label>LastName</label>
                        <input type="text" placeholder="Enter LastName" id="setLastName">
                    </div>
                    <div class="label_input">
                        <label>Email</label>
                        <input type="email" placeholder="Enter FirstName" id="setEmail">
                    </div>
                    <div class="label_input">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" id="setPassword">
                    </div>
                    <div class="label_input">
                       
                        <input type="submit" value="SIGN UP">
                      
                    </div>

                </form>
            </div>`;
content.innerHTML +=`
<div class="signupdiv hide" id="dashboardDiv1">
                <h2>Dashboard</h2><span id="loginname">LoginName</span>
                <div class="todoTitleDiv hide" id="todoTitleDiv">
                    <h2>To Do Title</h2>
                    <form class="formTitle">
                        <input type="text" placeholder="Enter Title ">
                        <div class="TitleList">
                            <button>ISOKO</button>
                            <button>ISOKO</button>
                            <button>ISOKO</button>
                            <button>ISOKO</button>
                            <button>ISOKO</button>
                        </div>
                        <div class="createTitle">
                            <button type="submit">CREATE TITLE</button>
                        </div>
                    </form>
                </div>
                <div class="todoTitleDiv hide" id="todoListDiv">
                    <h2>To Do List</h2>
                    <span>Title</span>
                    <form class="formTitle">
                        <input type="text" placeholder="Enter To Do List ">
                        <div class="TodoList">
                            <ul>
                                <li>AMATA</li>
                                <li>AMATA</li>
                                <li>AMATA</li>
                                <li>AMATA</li>
                                <li>AMATA</li>
                            </ul>
                        </div>
                        <div class="createTitle">
                            <button type="submit">CREATE LIST</button>
                        </div>
                    </form>
                </div>
            </div>`;
            /* *********************************************** */


            /*##################################################
                                    VARIABLES
            ###################################################*/ 

            const TitleList = document.querySelector(".TitleList");

            // console.log(TitleList.querySelectorAll("button"));

             /*##################################################
                                 END  VARIABLES
            ###################################################*/ 


            /* *********************************************** */
/**************************************************************************/ 

/* ======================================================================
                     FRONTEND FUNCTION
========================================================================*/ 

/*#################################################
                    FUNCTION 
###################################################*/ 
function displayDiv(idElemenet){
    idElemenet.classList.remove("hide");
    idElemenet.classList.add("display_flex");
}
function hideDiv(idElemenet){
    idElemenet.classList.remove("display_flex");
    idElemenet.classList.add("hide");
}
function displaySuccess(idElemenet,errorId){
    idElemenet.style.border = "1px solid green";
    errorId.classList.add("hide");
}
function displayFailer(idElemenet,errorId){
    idElemenet.style.border = "1px solid red";
    errorId.classList.remove("hide");
}

function hideForSignUp(){
    hideDiv(document.getElementById("home"));
    hideDiv(document.getElementById("logindiv"));
}
function hideForLogin(){
    hideDiv(document.getElementById("home"));
    hideDiv(document.getElementById("signupdiv"));
}
function messageFail(idElement,message){
    idElement.classList.remove("hide");
    idElement.style.background = "linear-gradient(135deg,#3c020270,#db0c0c)";
    idElement.querySelector("h1").innerHTML = message;

    setTimeout(function(){
        idElement.classList.add("hide");
    },3000);
}
function messageSuccess(idElement,message){
    idElement.classList.remove("hide");
    idElement.style.background = "linear-gradient(135deg,#023c0b70,#0cdb40)";
    idElement.querySelector("h1").innerHTML = message;

    setTimeout(function(){
        idElement.classList.add("hide");
    },2000);
}
function hideForDashboard(){
    hideDiv(document.getElementById("logindiv"));
    hideDiv(document.getElementById("signupdiv"));
    hideDiv(document.getElementById("signupB"));
    hideDiv(document.getElementById("loginB"));
    hideDiv(document.getElementById("settingdiv"));
    hideDiv(document.getElementById("todoListDiv"));

}
console.log(document.getElementById("signupB"));
function hideForGoOnToDoList(){
    hideDiv(document.getElementById("todoTitleDiv"));

}
function hideForSetting(){
    hideDiv(document.getElementById("dashboardDiv1"));
}
function hideForLogout(){
    hideDiv(document.getElementById("dashboardDiv1"));
    hideDiv(document.getElementById("settingdiv"));
    hideDiv(document.getElementById("dashboardB"));
    hideDiv(document.getElementById("settingB"));
    hideDiv(document.getElementById("logoutB"));
}

function signupEvent(e){
    e.preventDefault();
    hideForSignUp();
    displayDiv(document.getElementById("signupdiv"));
}
function loginEvent(e){
    e.preventDefault();
    hideForLogin();
    displayDiv(document.getElementById("logindiv"));

}
function signupFormevent(e){
    e.preventDefault();
    checkSignUpUserError();
    const firstvalue = document.getElementById("sFirstName").value;
    const lastvalue = document.getElementById("sLastName").value;
    const emailvalue = document.getElementById("sEmail").value;
    const passwordvalue = document.getElementById("sPassword").value;

    if(firstvalue.length >= 3 && lastvalue.length >= 3 && emailvalue.length >=5 && passwordvalue.length >= 6 ){
    
    loginUser = emailvalue;
    let user = createUser(firstvalue,lastvalue,emailvalue,passwordvalue)
    checkIfUserExist(user,loginUser);
    


   
}else{
    console.log("something wrong in the form")
    messageFail(document.getElementById("errormessage"),"ERROR <br> FirstName: At least 3 characters <br> LastName: At least 3 characters <br> Email : At least 5 characters <br> Password : At least 6 characters");
}
    
}
function loginFormevent(e){
    e.preventDefault();
    checkLoginError();
    ifLoginExit(document.getElementById("lEmail").value,document.getElementById("lPassword").value);   
}
function dashboardEvent(e){
    e.preventDefault();
    hideForDashboard();
    displayDiv(document.getElementById("dashboardDiv1"));
    displayDiv(document.getElementById("todoTitleDiv"));
}
function GoOnToDoListEvent(e){
    e.preventDefault();
    // target = e.target();
    hideForGoOnToDoList();
    displayDiv(document.getElementById("todoListDiv"))
}
function settingEvent(e){
    e.preventDefault();
    hideForSetting();
    displayDiv(document.getElementById("settingdiv"));

}
function logoutEvent(e){
    e.preventDefault();
    hideForLogout();
    displayDiv(document.getElementById("home"));
    displayDiv(document.getElementById("signupB"));
    displayDiv(document.getElementById("loginB"));
}


/*###################################################
                  END  FUNCTION
#####################################################*/

/* ======================================================================
                     FRONTEND FUNCTION END
========================================================================*/

/* ======================================================================
                     BACKEND FUNCTION
========================================================================*/

function createUser(firstname,lastname,email,password){
    data = {
        useraccount :{
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password
        },
        listTitle : []
    }
    return data;
}

function checkSignUpUserError(){
    if(document.getElementById("sFirstName").value === ""){
        displayFailer(document.getElementById("sFirstName"),document.getElementById("ErrorSfirstname"));
         
    }else{
        displaySuccess(document.getElementById("sFirstName"),document.getElementById("ErrorSfirstname")); 
       
    }


    if(document.getElementById("sLastName").value === ""){
        displayFailer(document.getElementById("sLastName"),document.getElementById("ErrorSlastname"));
        
    }else{
        displaySuccess(document.getElementById("sLastName"),document.getElementById("ErrorSlastname"));
        
    }

    if(document.getElementById("sEmail").value === ""){
        displayFailer(document.getElementById("sEmail"),document.getElementById("ErrorSemail"));
        
    }else{
        displaySuccess(document.getElementById("sEmail"),document.getElementById("ErrorSemail"));
        
    }

    if(document.getElementById("sPassword").value === ""){
        displayFailer(document.getElementById("sPassword"),document.getElementById("ErrorSpassword"));
        
    }else{
        displaySuccess(document.getElementById("sPassword"),document.getElementById("ErrorSpassword"));
        
    }

    if(document.getElementById("sCheckbox").checked === false){
         displayFailer(document.getElementById("sCheckbox"),document.getElementById("ErrorScheckbox"));
        
    }else{
       displaySuccess(document.getElementById("sCheckbox"),document.getElementById("ErrorScheckbox"));
        
    }


}

function pushUser2Db(user){
   DataBase.push(user);
}

function updateLocalStorage(){
  let usermail = loginUser;
  let usermailText = JSON.stringify(usermail);
  let databaseText = JSON.stringify(DataBase);
  localStorage.setItem("myLocal",databaseText);
  localStorage.setItem("loggedUser",usermailText);
}

function readLocalStorage(){
    let data = localStorage.getItem("myLocal")
    let database = JSON.parse(data)
    return database;
}

function checkIfUserExist(user,loggedEmail){
    let arrayOfDataBase = readLocalStorage();
    if(arrayOfDataBase === null){
        pushUser2Db(user);
        updateLocalStorage();
        messageSuccess(document.getElementById("errormessage"),"USER REGISTERED");
        hideForDashboard();
        displayDiv(document.getElementById("dashboardB"));
        displayDiv(document.getElementById("settingB"));
        displayDiv(document.getElementById("logoutB"));
        displayDiv(document.getElementById("dashboardDiv1"));
        displayDiv(document.getElementById("todoTitleDiv"));
        document.getElementById("signupForm").reset();
        document.querySelector(".signupdiv").querySelectorAll("input").forEach(function(d){
            d.style.border = "1px solid white";
        });
        

        
    }else{
        for(let UserIn of arrayOfDataBase ){
            if(UserIn.useraccount.email === loggedEmail){

                messageFail(document.getElementById("errormessage"),"EMAIL REGISTERED ALLREADY");
                document.getElementById("signupForm").reset();
                document.querySelector(".signupdiv").querySelectorAll("input").forEach(function(d){
            d.style.border = "1px solid white";
        });

                return;
            }
            
        }
        pushUser2Db(user);
        updateLocalStorage();
        messageSuccess(document.getElementById("errormessage"),"USER REGISTERED");
        hideForDashboard();
        displayDiv(document.getElementById("dashboardB"));
        displayDiv(document.getElementById("settingB"));
        displayDiv(document.getElementById("logoutB"));
        displayDiv(document.getElementById("dashboardDiv1"));
        displayDiv(document.getElementById("todoTitleDiv"));
        document.getElementById("signupForm").reset();
        document.querySelector(".signupdiv").querySelectorAll("input").forEach(function(d){
            d.style.border = "1px solid white";
        });


    }
}

function checkLoginError(){
        if(document.getElementById("lEmail").value === ""){
        displayFailer(document.getElementById("lEmail"),document.getElementById("errorlemail"));
        }else{
        displaySuccess(document.getElementById("lEmail"),document.getElementById("errorlemail"));
        }
        if(document.getElementById("lPassword").value === ""){
        displayFailer(document.getElementById("lPassword"),document.getElementById("errorlpassword"));

        }else{
        displaySuccess(document.getElementById("lPassword"),document.getElementById("errorlpassword"));
        }
}

function ifLoginExit(email,password){
    let array = readLocalStorage();

    if(array === null){

         messageFail(document.getElementById("errormessage"),"SIGN UP FIRST");
         return;
    }else{
console.log(email);
console.log(password);
        for(let user of array){
        

        if((user.useraccount.email === email) && (user.useraccount.password === password)){

            hideForDashboard();
            displayDiv(document.getElementById("dashboardB"));
            displayDiv(document.getElementById("settingB"));
            displayDiv(document.getElementById("logoutB"));
            displayDiv(document.getElementById("dashboardDiv1"));
            displayDiv(document.getElementById("todoTitleDiv"));
            document.getElementById("loginForm").reset();
        document.querySelector("#logindiv").querySelectorAll("input").forEach(function(d){
            d.style.border = "1px solid white";
        });

         }
         

        }


    }

    

}

// ifLoginExit("andremugabo@yahoo.fr","123456");

function createList(title){
    list = {
        listTitle :{
            title : title,
        },
        
        todolist : []
    }
    return list;
}



/* ======================================================================
                     BACKEND FUNCTION END
========================================================================*/

 /**************************************************************************/ 

/*###################################################
                        EVENT FUNCTION
#####################################################*/
function event(){
    if(document.getElementById("signupB")){
      document.getElementById("signupB").addEventListener("click",signupEvent);  
    }
    if(document.getElementById("loginB")){
       document.getElementById("loginB").addEventListener("click",loginEvent);
    }
    if(document.getElementById("dashboardB")){
        document.getElementById("dashboardB").addEventListener("click",dashboardEvent);
    }
    if(TitleList.querySelectorAll("button")){
        let Allbutton = TitleList.querySelectorAll("button");

        Allbutton.forEach(function(but){
            // console.log(but);
            but.addEventListener("click",GoOnToDoListEvent);
        });

        
    }
    if(document.getElementById("settingB")){
        document.getElementById("settingB").addEventListener("click",settingEvent);
    }
    if(document.getElementById("logoutB")){
        document.getElementById("logoutB").addEventListener("click",logoutEvent);
    }
    /*SUBMIT EVENT*/
    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit",signupFormevent);
    }
    if(document.getElementById("loginForm")){
        document.getElementById("loginForm").addEventListener("submit",loginFormevent);
    }

}
event();
/*#####################################################
                      END  EVENT FUNCTION
######################################################*/

/***************************************************************************/ 

/* ===================================================
                        END MAIN
======================================================*/  
/* ====================================================
                        FOOTER
======================================================*/ 
const footer = document.querySelector("footer");
footer.innerHTML = ` <p>&copy; copyright andremugabo@yahoo.fr</p>`
/* ====================================================
                        END FOOTER
======================================================*/ 