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
  $('.main-page').css('display', 'block')
  $('.display-recipes').css('display', 'block')
  $('body').css('background-image', 'none')
}

const signOutSuccess = (responseData) => {
  $('form').trigger('reset')
  store.user = null
  $('.user-auth').css('display', 'block')
  $('.signin').css('display', 'none')
  $('.signup').css('display', 'block')
  $('.user-message').text('Successfully Signed Out')
  $('.main-page').css('display', 'none')
  $('.display-recipes').css('display', 'none')
  $('body').css('background-image', 'url(public/background.jpg)')
  setTimeout(() => {
    $('.user-message').text('')
  }, 3000)
}

const changePasswordSuccess = (responseData) => {
  $('form').trigger('reset')
  console.log('password changed')
}

const showRecipesSuccess = (responseData) => {
  console.log(responseData)
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
    // <p>Ingredients: ${recipe.ingredients}</p>
    // <p>Instructions: ${recipe.instructions}</p>
    // <textarea class="update-ingredient" rows="3" cols="50" style="display:none">${recipe.ingredients}</textarea>
    // <textarea class="update-instructions" rows="3" cols="50" style="display:none">${recipe.instructions}</textarea>
    $('.recipe-bar').css('display', 'block')
    $('.recipe-bar').append(recipeHtml)
  })
}

const getRecipeSuccess = (responseData) => {
  $('.add-bar').css('display', 'none')
  console.log(responseData)
  const recipeHtml = (`
    <section class="recipes" data-id=${responseData.recipe.id}>
    <h5>Name: ${responseData.recipe.recipe_name}</h5>
    <p>Category: ${responseData.recipe.category}</p>
    <form class="update-recipe">
    <textarea name="recipe[ingredients]" rows="3" cols="50">${responseData.recipe.ingredients}</textarea>
    <textarea name="recipe[instructions]" rows="3" cols="50">${responseData.recipe.instructions}</textarea>
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
  console.log(responseData)
  $('form').trigger('reset')
  $('.recipe-message').text('Successfully added Recipe!!')
}

const updateRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  getRecipeSuccess(responseData)
  console.log(responseData)
  console.log('updated Successfully')
}

const deleteRecipeSuccess = (responseData) => {
  console.log('deleted Successfully')
  $('form').trigger('reset')
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
  changePasswordSuccess,
  showRecipesSuccess,
  getRecipeSuccess,
  addRecipeSuccess,
  updateRecipeSuccess,
  deleteRecipeSuccess,
  recipeFailure
}
