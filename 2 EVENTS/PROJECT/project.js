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
/* ########################################################################################################################################## */

let DataBase = [];
let loggedEmail = null;
let name = null;
let buttonB = null;
let textnode = null;
// var error = false;

/*############################################################################################################################################# 
                                                                   INDEX
##############################################################################################################################################*/

const SignUpButton = document.getElementById("SignUp");
const LoginButton = document.getElementById("Login");
const SettingButton = document.getElementById("Setting");
const DashboardButton = document.getElementById("DashboardB");
const LogoutButton = document.getElementById("Logout");
const home = document.getElementById("home");
const SignUpDiv = document.getElementById("SignUpDiv");
const LoginDiv = document.getElementById("LoginDiv");

/* ############################################################################################################################################
                                                                SIGN UP FORM
###############################################################################################################################################*/

const Sign_Up = document.getElementById("Sign_Up");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const Checkbox = document.getElementById("Checkbox");

const FirstNameError = document.getElementById("FirstNameError");
const LastNameError = document.getElementById("LastNameError");
const EmailError = document.getElementById("EmailError");
const PasswordError = document.getElementById("PasswordError");
const CheckboxError = document.getElementById("CheckboxError");
const AllinputSignUp = SignUpDiv.querySelectorAll("input");

/* ############################################################################################################################################
                                                            LOGIN FORM
##############################################################################################################################################*/

const LoginF = document.getElementById("LoginF");
const LEmail = document.getElementById("LEmail");
const LPassword = document.getElementById("LPassword");

const LEmailError = document.getElementById("LEmailError");
const LPasswordError = document.getElementById("LPasswordError");

/* ###########################################################################################################################################
                                                            DASHBOARD
#############################################################################################################################################*/

const Dashboard = document.getElementById("Dashboard");
const left_DashboardHome = document.getElementById("left_DashboardHome");
const createTitleList = document.getElementById("createTitleList");
const DashboardHOme = document.getElementById("DashboardHOme");
const Title = document.getElementById("Title");
const TodoTitle = document.getElementById("TodoTitle");
const ButtonToAddTitle = document.getElementById("ButtonToAddTitle");
let displayToDoListTitleB = document.getElementById("displayToDoListTitleB");
const DashboardTodolist = document.getElementById("DashboardTodolist");

console.log(displayToDoListTitleB);

/*############################################################################################################################################
                                                                ERROR DIV
##############################################################################################################################################*/
const errorDiv = document.getElementById("errorDiv");
const closeErrorDiv = errorDiv.querySelector("button");

/* *****************************************************************************************************************************************
                                                                        FUNCTIONS
******************************************************************************************************************************************** */
/* ##########################################################################################################################################
                                                                    DISPLAY ERROR DIV
#############################################################################################################################################*/
function displayErrorDiv(message) {
  errorDiv.classList.add("errorDiv");
  errorDiv.classList.remove("hide");
  errorDiv.querySelector("p").innerHTML = message;
}

/* ########################################################################################################################################
                                                             DISPLAY SUCCESS (ERROR) DIV
 ##########################################################################################################################################*/

function displayErrorDivSuccess(message) {
  errorDiv.classList.add("errorDivSuccess");
  errorDiv.classList.remove("hide");
  errorDiv.querySelector("p").innerHTML = message;
}

/* ########################################################################################################################################
                                                            FUNCTION (HIDE & DISPLAY)
###########################################################################################################################################*/

function hide_flex(element) {
  element.classList.remove("display_flex");
  element.classList.add("hide");
}

function hide_grid(element) {
  element.classList.remove("display_grid");
  element.classList.add("hide");
}

function display_flex(element) {
  element.classList.remove("hide");
  element.classList.add("display_flex");
}

function display_grid(element) {
  element.classList.remove("hide");
  element.classList.add("display_grid");
}
/* ###########################################################################################################################################
                                                        FUNCTION CREATE USERACcOUNT
#############################################################################################################################################*/

function createUser(firstname, lastname, email, password) {
  let user = {
    useraccount: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    },
    list: [],
  };
  return user;
}
// console.log(createUser("m","k","k","909"));

/* ###########################################################################################################################################
                                                                       CREATE LIST
#############################################################################################################################################*/
function createList(title) {
  list = {
    listTitle: {
      title: title,
    },
    toDo: [],
  };
  return list;
}
// console.log(createList("market"));

/* ##########################################################################################################################################
                                                                PUSH USER INTO THE DATABSE
#############################################################################################################################################*/
function pushUserIntoDataBase(createdUser) {
  DataBase.push(createdUser);
}

/* ###########################################################################################################################################
                                                            UPDATE LOCAL STORAGE 
#############################################################################################################################################*/

function upDateLocalstorage() {
  const userMail = loggedEmail;
  const txtUserMail = JSON.stringify(userMail);
  const txt = JSON.stringify(DataBase);
  localStorage.setItem("mylocal", txt);
  localStorage.setItem("loggedUser", txtUserMail);
}

/* ###########################################################################################################################################
                                                            READ LOCAL STORAGE 
#############################################################################################################################################*/

function readLocalstorage() {
  let txt = localStorage.getItem("mylocal");
  let array = JSON.parse(txt);
  return array;
}
// console.log(readLocalstorage());

/* #############################################################################################################################################
                                                                CHECK USER 
################################################################################################################################################*/

function checkUser(useraccount, userLoggedEmail) {
  let array = readLocalstorage();

  if (array === null) {
    pushUserIntoDataBase(useraccount);
    // DataBase.push(useraccount)

    upDateLocalstorage();
    displayLoggedUser();
    // displayToDoListTitle();

    hide_flex(SignUp);
    hide_flex(Login);
    display_flex(Setting);
    display_flex(DashboardB);
    display_flex(Logout);
    display_flex(Dashboard);
    hide_flex(SignUpDiv);

    return;
  } else {
    for (let user of array) {
      if (user.useraccount.email === userLoggedEmail) {
        displayErrorDiv("THIS EMAIL IS REGITERED");
        return;
      }
    }
    // DataBase.push(useraccount)
    pushUserIntoDataBase(useraccount);
    upDateLocalstorage();
    // displayLoggedUser();
    // displayToDoListTitle();
    hide_flex(SignUp);
    hide_flex(Login);
    display_flex(Setting);
    display_flex(DashboardB);
    display_flex(Logout);
    display_flex(Dashboard);
    hide_flex(SignUpDiv);
  }
}

/* ############################################################################################################################################
                                                          FUNCTION (SIGN UP & LOGIN ) SUBMIT
##############################################################################################################################################*/

function errorTrue(element, error) {
  error.classList.remove("hide");
  error.classList.add("display_flex");
  element.style.border = "1px solid red";
}

function errorFalse(element, error) {
  error.classList.remove("display_flex");
  error.classList.add("hide");
  element.style.border = "1px solid green";
}

function checkSignUpErrors() {
  if (FirstName.value == "") {
    errorTrue(FirstName, FirstNameError);
  } else {
    errorFalse(FirstName, FirstNameError);
  }

  if (LastName.value == "") {
    errorTrue(LastName, LastNameError);
  } else {
    errorFalse(LastName, LastNameError);
  }

  if (Email.value == "") {
    errorTrue(Email, EmailError);
  } else {
    errorFalse(Email, EmailError);
  }

  if (Password.value == "") {
    errorTrue(Password, PasswordError);
  } else {
    errorFalse(Password, PasswordError);
  }

  if (Checkbox.checked === false) {
    errorTrue(Checkbox, CheckboxError);
  } else {
    errorFalse(Checkbox, CheckboxError);
  }
}
/* #########################################################################################################################################
                                                                CHECH LOGIN ERRORS
#############################################################################################################################################*/

function checkLoginErrors() {
  if (LEmail.value === "") {
    errorTrue(LEmail, LEmailError);
  } else {
    errorFalse(LEmail, LEmailError);
  }

  if (LPassword.value === "") {
    errorTrue(LPassword, LPasswordError);
  } else {
    errorFalse(LPassword, LPasswordError);
  }
}
/* #########################################################################################################################################
                                                            CHECK LOGIN USER
#############################################################################################################################################*/

function checkloginUser(userEmail, userPassword) {
  let array = JSON.parse(localStorage.getItem("mylocal"));
  // console.log(array[1].useraccount.firstname);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].useraccount.email === userEmail &&
      array[i].useraccount.password === userPassword
    ) {
      LoginUpdateLoggedUser(LEmail.value);
      // displayToDoListTitle();
      displayLoggedUser();
      hide_flex(SignUp);
      hide_flex(Login);
      display_flex(Setting);
      display_flex(DashboardB);
      display_flex(Logout);
      display_flex(Dashboard);
      display_grid(DashboardHOme);
      hide_flex(LoginDiv);
      LoginF.reset();
    }
  }
}

// checkloginUser("nicoleumubyeyi@gmail.com","123456");
/* ########################################################################################################################################
                                                            DISPLAY LOGGED USER
##########################################################################################################################################*/

function displayLoggedUser() {
  let array = readLocalstorage();
  let txt = localStorage.getItem("loggedUser");
  let LoggedEmail = JSON.parse(localStorage.getItem("loggedUser"));
  for (let user of array) {
    if (LoggedEmail == user.useraccount.email) {
      name = user.useraccount.firstname + " " + user.useraccount.lastname;
    }
  }
  return (document.getElementById("h").innerHTML = name);
}
// console.log(displayLoggedUser());

/* #######################################################################################################################################
                                                            UPDATE LOGGED USER
##########################################################################################################################################*/

function LogoutUpDateLoggedUser() {
  loggedEmail = null;
  let txt = JSON.stringify(loggedEmail);
  localStorage.setItem("loggedUser", txt);
}
/* ########################################################################################################################################
                                                            UPDATE LOGGED USER ON LOGIN
###########################################################################################################################################*/

function LoginUpdateLoggedUser(LoginEmail) {
  loggedEmail = LoginEmail;
  let txt = JSON.stringify(loggedEmail);
  localStorage.setItem("loggedUser", txt);
}

/* ########################################################################################################################################
                                                                CREATE LIST TITLE
##########################################################################################################################################*/

function createListTitle(listTitle) {
  let array = readLocalstorage();
  let txtMail = localStorage.getItem("loggedUser");
  let userEmail = JSON.parse(txtMail);
  console.log(array);
  let List = createList(listTitle);
  for (let i = 0; i < array.length; i++) {
    if (array[i].useraccount.email === userEmail) {
      array[i].list.push(List);
      const txt = JSON.stringify(array);
      localStorage.setItem("mylocal", txt);
    }
  }
}
// createListTitle("Market");

/* ########################################################################################################################################
                                                                CHECK LIST TITLE
##########################################################################################################################################*/

function checkListTitle(checkedListTitle) {
  let array = readLocalstorage();
  let txtMail = localStorage.getItem("loggedUser");
  let userEmail = JSON.parse(txtMail);

  for (let i = 0; i < array.length; i++) {
    if (array[i].useraccount.email === userEmail) {
      for (let Title of array[i].list) {
        if (Title.listTitle.title !== checkedListTitle) {
          // createListTitle(checkedListTitle);
          console.log(Title.listTitle.title);
        } else {
          displayErrorDiv(
            "FIND ANOTHER TITLE <br> THERE IS ANOTHER TITLE <br> WITH THE SAME NAME"
          );
          return;
        }
      }
      createListTitle(checkedListTitle);
      setTimeout(function () {
        displayErrorDivSuccess("TITLE REGISTERED");
      }, 1000);
    }
  }
}
// checkListTitle("OMO");HANNO
/* #######################################################################################################################################
                                                            DISPLAY LIST TITLE
##########################################################################################################################################*/

function displayToDoListTitle() {
  let array = readLocalstorage();
  let txtMail = localStorage.getItem("loggedUser");
  let userEmail = JSON.parse(txtMail);

  for (let i = 0; i < array.length; i++) {
    if (array[i].useraccount.email === userEmail && array[i].list.length > 0) {
      console.log(array[i].list + "  " + userEmail);
      for (let j = 0; j < array[i].list.length; j++) {
        console.log(
          array[i].list[j].listTitle.title +
            "  " +
            userEmail +
            " " +
            i +
            " " +
            j +
            "  " +
            array[i].list[j].listTitle
        );

        buttonB = document.createElement("BUTTON");
        buttonB.innerHTML += array[i].list[j].listTitle.title;
        // textnode = document.createTextNode(array[i].list[j].listTitle.title);
        // buttonB.appendChild(textnode);
        // console.log(buttonB);

        displayToDoListTitleB.appendChild(buttonB);
      }
    }
  }
}
// displayToDoListTitle()
/* ****************************************************************************************************************************************
                                                                      EVENTS
********************************************************************************************************************************************/

/* ########################################################################################################################################
                                                    EVENTS SIGN UP & LOGIN  BUTTON 
########################################################################################################################################### */

SignUpButton.addEventListener("click", function (e) {
  hide_flex(home);
  hide_flex(LoginDiv);
  display_flex(SignUpDiv);
});

LoginButton.addEventListener("click", function (e) {
  hide_flex(home);
  hide_flex(SignUpDiv);
  display_flex(LoginDiv);
});

/* ###########################################################################################################################################
                                                         SUBMIT (SIGN UP & LOGIN)
#############################################################################################################################################*/

/* #############################################
                SIGN UP EVENT
###############################################*/

Sign_Up.addEventListener("submit", function (e) {
  e.preventDefault();
  // CHECK INPUTS

  checkSignUpErrors();
  loggedEmail = Email.value;
  let user = createUser(
    FirstName.value,
    LastName.value,
    Email.value,
    Password.value
  );

  if (
    FirstName.value.length >= 3 &&
    LastName.value.length >= 3 &&
    Email.value.length >= 5 &&
    Password.value.length >= 6 &&
    Checkbox.checked === true
  ) {
    document.getElementById("h").innerHTML =
      FirstName.value + "  " + LastName.value;

    checkUser(user, loggedEmail);

    setTimeout(function () {
      AllinputSignUp.forEach(function (d) {
        d.style.border = "1px solid white";
      });
      Sign_Up.reset();
    }, 2000);
  } else {
    displayErrorDiv(
      "WRONG CREDENTIAL <br> FirstName: AT LEAST 3 CHARACTERS <br> LastName: AT LEAST 4 CHARACTERS <br> Email: AT LEAST 5 CHARACTRES <br> Password: AT LEAST 6 CHARACTERS <br> AGREE TERMS OF USE"
    );
    AllinputSignUp.forEach(function (d) {
      d.style.border = "1px solid white";
      Sign_Up.reset();
    });
  }
});

/* #######################################
                LOGIN EVENT
##########################################*/

LoginF.addEventListener("submit", (e) => {
  e.preventDefault();

  checkLoginErrors();
  checkloginUser(LEmail.value, LPassword.value);
  // displayErrorDiv("WRONG CREDENTIAL");
});
/* ########################################################################################################################################
                                                            CREATE NEW LIST TITLE EVENT
###########################################################################################################################################*/

createTitleList.addEventListener("click", function () {
  Title.value = "NEW LIST";
  TodoTitle.innerText = Title.value;
  display_flex(DashboardTodolist);

  hide_grid(DashboardHOme);
  DashboardTodolist.classList.remove("hide");
});
/* ########################################################################################################################################
                                                        ENTER NEW TITLE IN THE DATABASE
###########################################################################################################################################*/

ButtonToAddTitle.addEventListener("click", function () {
  let NewTitle = Title.value;
  checkListTitle(NewTitle);
  NewTitle = "";
});

/* #########################################################################################################################################
                                                                LOGOUT EVENT
###########################################################################################################################################*/

LogoutButton.addEventListener("click", function () {
  LogoutUpDateLoggedUser();
  // document.getElementById("h").innerHTML="";
  display_flex(home);
  display_flex(SignUp);
  display_flex(Login);
  hide_flex(Dashboard);
  hide_flex(Setting);
  hide_flex(DashboardB);
  hide_flex(Logout);
  hide_flex(DashboardTodolist);
});
/* #########################################################################################################################################
                                                            DISPLAY DASHBOARD EVENT
###########################################################################################################################################*/

DashboardB.addEventListener("click", function () {
  display_flex(Dashboard);
  hide_flex(DashboardTodolist);
  hide_flex(DashboardTodolistp);
});
/* #########################################################################################################################################
                                                        DISPLAY TO DO TITLE EVENT 
###########################################################################################################################################*/
document.addEventListener("DOMContentLoaded", displayToDoListTitle());
/* #########################################################################################################################################
                                                            CLOSE ERROR DIV EVENT
###########################################################################################################################################*/

closeErrorDiv.addEventListener("click", function () {
  // let target = e.target;

  errorDiv.classList.remove("errorDiv");
  errorDiv.classList.add("hide");
});

/* ########################################################################################################################################
                                                        CLOSE SUCCES (ERROR) DIV EVENT
###########################################################################################################################################*/

closeErrorDiv.addEventListener("click", function () {
  // let target = e.target;

  errorDiv.classList.remove("errorDivSuccess");
  errorDiv.classList.add("hide");
});
