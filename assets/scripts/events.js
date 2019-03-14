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
const onShowChangePassword = () => {
  $('.password-div').css('display', 'block')
}

const onUpdatePassword = (event) => {
  console.log('in change password')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updatePassword(formData)
    .then(ui.updatePasswordSuccess)
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

const onShowAddRecipe = () => {
  $('.recipe-bar').css('display', 'block')
  $('.recipe-bar').html('')
  $('.details-bar').html('')
  const addRecipeHtml = (`
    <div class="add-bar">
      <form class="add-recipe">
        <div class="form-group">
          <label for="recipeName">Recipe Name</label>
          <input name="recipe[recipe_name]" type="text">
        </div>
        <div class="form-group">
          <label for="recipeCategory">Category</label>
          <input name="recipe[category]" type="text">
        </div>
        <div class="form-group">
          <label for="recipeIngredients">Ingredients</label>
          <input name="recipe[ingredients]" type="text" >
        </div>
        <div class="form-group">
          <label for="recipeInstructions">Instructions</label>
          <input name="recipe[instructions]" type="text">
        </div>
        <div class="form-group">
          <input type="Submit" value="Add Recipe">
        </div>
      </form>
    </div>
    `)
  $('.recipe-bar').append(addRecipeHtml)
}

const onAddRecipe = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData.recipe)
  api.addRecipe(formData.recipe)
    .then(ui.addRecipeSuccess)
    .catch(ui.recipeFailure)
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
  onShowChangePassword,
  onUpdatePassword,
  onShowRecipes,
  onGetRecipe,
  onShowAddRecipe,
  onAddRecipe,
  onUpdateRecipe,
  onDeleteRecipe
}
