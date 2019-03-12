const store = require('./store.js')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('.user-message').text('Successfully Signed Up')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
}

const authFailure = () => {
  $('form').trigger('reset')
  $('.user-message').text('Error. Something went wrong!!')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('.user-auth').css('display', 'none')
}

const signOutSuccess = (responseData) => {
  $('form').trigger('reset')
  store.user = null
  $('.user-auth').css('display', 'block')
  $('.user-message').text('Successfully Signed Out')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  authFailure
}
