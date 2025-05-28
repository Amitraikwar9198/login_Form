let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signinbtn.addEventListener('click',()=>{
  namefield.style.maxHeight = '0';
  title.innerHTML='Sign in';
  text.innerHTML='Forget Password';
  signupbtn.classList.add('disable');
  signinbtn.classList.remove('disable');
  underline.style.transform = 'translatex(35px)'
})

signupbtn.addEventListener('click',()=>{
  namefield.style.maxHeight = '60px';
  title.innerHTML='Sign Up';
  text.innerHTML='Password Suggestions';
  signupbtn.classList.remove('disable');
  signinbtn.classList.add('disable');
  underline.style.transform = 'translatex(0)'
})
