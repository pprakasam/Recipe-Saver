'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  // your JS code goes here
  $('.signup').on('submit', events.onSignUp)
  $('.show-signin').on('click', () => {
    $('.signin').css('display', 'block')
    $('.signup').css('display', 'none')
    $('form').trigger('reset')
  })
  $('.show-signup').on('click', () => {
    $('.signin').css('display', 'none')
    $('.signup').css('display', 'block')
    $('form').trigger('reset')
  })
  $('.signin').on('submit', events.onSignIn)
  $('.signout').on('submit', events.onSignOut)
  $('#modal-form').on('submit', events.onUpdatePassword)
  $('.modal-close').on('click', function () {
    $('#modal-form').trigger('reset')
  })
  $('.show-recipes').on('click', events.onShowRecipes)
  $('.add-btn').on('click', events.onShowAddRecipe)
  $('.recipe-bar').on('submit', '.add-recipe', events.onAddRecipe)
  $('.recipe-bar').on('click', '.get-recipe', events.onGetRecipe)
  $('.details-bar').on('submit', '.update-recipe', events.onUpdateRecipe)
  $('.details-bar').on('submit', '.delete-recipe', events.onDeleteRecipe)
})
