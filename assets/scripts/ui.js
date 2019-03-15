const store = require('./store.js')

const signUpSuccess = (responseData) => {
  $('form').trigger('reset')
  $('.user-message').text('Successfully Signed Up')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
}

const authFailure = () => {
  $('form').trigger('reset')
  $('.user-message').text('Error. Something went wrong!!')
  $('.password-msg').text('Unsuccessful. Try Again!!')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
  setTimeout(() => {
    $('.failure-msg').text('')
  }, 3000)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('.user-auth').css('display', 'none')
  $('.main-page').css('display', 'block')
  $('.display-recipes').css('display', 'block')
  $('.recipe-bar').html('')
  $('.details-bar').html('')
  $('body').css('background-image', 'url(public/main-bg.jpg)')
}

const signOutSuccess = (responseData) => {
  $('form').trigger('reset')
  store.user = null
  $('.user-auth').css('display', 'block')
  $('.password-div').css('display', 'none')
  $('.signup').css('display', 'block')
  $('.signin').css('display', 'none')
  $('.user-message').text('Successfully Signed Out')
  $('.main-page').css('display', 'none')
  $('.display-recipes').css('display', 'none')
  $('body').css('background-image', 'url(public/background.jpg)')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
}

const updatePasswordSuccess = (responseData) => {
  $('form').trigger('reset')
  $('.password-msg').text('Password changed!!')
  setTimeout(() => {
    $('.password-msg').text('')
  }, 3000)
  console.log('password changed')
}

const showRecipesSuccess = (responseData) => {
  $('.recipe-bar').html('')
  $('.add-bar').css('display', 'none')
  responseData.recipes.forEach(recipe => {
    const recipeHtml = (`
    <section class="recipes" data-id=${recipe.id}>
    <h5>Name: ${recipe.recipe_name}</h5>
    <p>Category: ${recipe.category}</p>
    <p><button type="submit" class="get-recipe">Get Recipe</button></p>
    </section>
    `)
    $('.recipe-bar').css('display', 'block')
    $('.recipe-bar').append(recipeHtml)
  })
}

const getRecipeSuccess = (responseData) => {
  $('.add-bar').css('display', 'none')
  const recipeHtml = (`
    <section class="recipes" data-id=${responseData.recipe.id}>
    <h5>Name: ${responseData.recipe.recipe_name}</h5>
    <p>Category: ${responseData.recipe.category}</p>
    <form class="update-recipe">
    <textarea name="recipe[ingredients]" rows="5" cols="50">${responseData.recipe.ingredients}</textarea>
    <textarea name="recipe[instructions]" rows="5" cols="50">${responseData.recipe.instructions}</textarea>
    <p><input type="submit" value="Update Recipe"></p>
    </form>
    <form class="delete-recipe">
      <input type="submit" value="Delete Recipe">
    </form>
    </section>
    `)
  $('.details-bar').css('display', 'block')
  $('.details-bar').html(recipeHtml)
}

const addRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
}

const updateRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  getRecipeSuccess(responseData)
  const updateMessage = (`<p>Successfully Updated the Recipe</p>`)
  $('.details-bar').append(updateMessage)
}

const deleteRecipeSuccess = (responseData) => {
  $('.details-bar').html('')
}

const recipeFailure = () => {
  $('form').trigger('reset')
  $('.recipe-message').text('Error. Something went wrong!!')
  setTimeout(() => {
    $('.recipe-message').text('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  authFailure,
  updatePasswordSuccess,
  showRecipesSuccess,
  getRecipeSuccess,
  addRecipeSuccess,
  updateRecipeSuccess,
  deleteRecipeSuccess,
  recipeFailure
}
