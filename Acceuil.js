
 // handling scroll up arrow event
const scrollUp = document.getElementById("return-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}


// handling events of diff elements
const signIn = document.querySelector('.Connexion');
const signUp = document.querySelector('.Register');
const cont =document.querySelector('.backG');
const signInSpace =document.querySelector('.signIn');
const signUpSpace =document.querySelector('.signUp');
const joinUs = document.getElementById('JoinUs');
const logIn = document.getElementById('LogIn');

signIn.addEventListener('click', displaySignIn);
signUp.addEventListener('click', displaySignUp );

joinUs.addEventListener('click',showSignUp);
logIn.addEventListener('click', showSignIn);


function displaySignIn(){
  cont.style.display='block';
  signUpSpace.style.display='none';
  signInSpace.style.cssText='-webkit-animation: none; animation:none;';
  signInSpace.style.display='block';

  document.addEventListener('mouseup', function(e) {
    var container = document.querySelector('.container');

    if (!container.contains(e.target)) {
        document.querySelector('.backG').style.display = 'none';
    }
});
}

function displaySignUp(){
    cont.style.display='block';
    signInSpace.style.display='none';
    signUpSpace.style.cssText='-webkit-animation: none; animation:none;';
    signUpSpace.style.display='block';
    document.addEventListener('mouseup', function(e) {
        var container = document.querySelector('.container');
    
        if (!container.contains(e.target)) {
            document.querySelector('.backG').style.display = 'none';
        }
    });
  }

  function showSignUp(){
    signInSpace.style.display='none';
    signInSpace.style.cssText='-webkit-animation: none; animation:none;';
    signUpSpace.style.cssText=' -webkit-animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;  animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both';
      signUpSpace.style.display='block';
  }

  function showSignIn(){
    signUpSpace.style.display='none';
    signUpSpace.style.cssText='-webkit-animation: none; animation:none;';
    signInSpace.style.cssText='-webkit-animation: swing-in-left-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both; animation: swing-in-left-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;';
    signInSpace.style.display='block';
   }
