// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const allHearts = document.getElementsByClassName('like-glyph')
for(element of allHearts) {
  element.addEventListener('click', (e) => handleClick(e))
}


function handleClick(e) {
  /* let heartStatus = e.target.textContent
 if (heartStatus === '♡') {
  console.log('Empty')
  e.target.textContent = '♥'
 } */

 mimicServerCall()
 .then(msg => {
    handleSuccess(msg, e)
    
 })
 .catch(error => handleFail(error))

}

function handleSuccess(msg, e) {
  console.log(msg)
  if (e.target.textContent === EMPTY_HEART) {
    e.target.textContent = FULL_HEART
    e.target.className = 'activated-heart'
  } else {
    e.target.textContent = EMPTY_HEART
    e.target.classList.remove('activated-heart')
  }
  
}


function handleFail(msg) {
  console.log(msg)
  const modal = document.querySelector('#modal')
  modal.classList.remove('hidden')
  document.getElementById('modal-message').innerText = msg
  setTimeout(() => modal.classList.add('hidden'), 3000)
  
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
