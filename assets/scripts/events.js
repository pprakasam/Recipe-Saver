const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.authFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.authFailure)
}

const onChangePassword = (event) => {
  console.log('in change password')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.authFailure)
}

const onShowRecipes = (event) => {
  console.log('In show block')
  event.preventDefault()
  api.showRecipes()
    .then(ui.showRecipesSuccess)
    .catch(ui.recipeFailure)
}

const onGetRecipe = (event) => {
  console.log('In get block')
  const recipeId = $(event.target).closest('section').data('id')
  console.log(recipeId)
  event.preventDefault()
  api.getRecipe(recipeId)
    .then(ui.getRecipeSuccess)
    .catch(ui.recipeFailure)
}

const onAddRecipe = (event) => {
  console.log('in add block')
  $('.add-bar').css('display', 'block')
  $('.add-bar').on('submit', '.add-recipe', (event) => {
    event.preventDefault()
    const form = event.target
    const formData = getFormFields(form)
    console.log(formData.recipe)
    api.addRecipe(formData.recipe)
      .then(ui.addRecipeSuccess)
      .catch(ui.recipeFailure)
  })
}

const onUpdateRecipe = (event) => {
  console.log('in update block')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.recipe.id = $(event.target).closest('section').data('id')
  console.log(formData.recipe)
  api.updateRecipe(formData.recipe)
    .then(ui.updateRecipeSuccess)
    .catch(ui.recipeFailure)
}

const onDeleteRecipe = (event) => {
  console.log('in delete block')
  const recipeId = $(event.target).closest('section').data('id')
  event.preventDefault()
  api.deleteRecipe(recipeId)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.recipeFailure)
  api.showRecipes()
    .then(ui.showRecipesSuccess)
    .catch(ui.recipeFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onShowRecipes,
  onGetRecipe,
  onAddRecipe,
  onUpdateRecipe,
  onDeleteRecipe
}
