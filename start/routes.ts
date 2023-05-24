/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", "AuthController.loginPage");
Route.get("/login", "AuthController.loginPage");
Route.post("/login", "AuthController.login");
Route.get("/register", "AuthController.regisPage");
Route.post("/register", "AuthController.register");

Route.group(() => {
  Route.get("/home", "AuthController.homePage");

  Route.resource('/translator', 'SmartTranslaterController')

  Route.get("/budget_management", "BudgetManagementController.index");  
  Route.get("/travel_recomendation/:category?/:pref?", "TravelRecomendationController.index");
  Route.get("/food_and_souvenire", "FoodAndSouvenireController.index");  
  Route.get("/food_and_souvenire/:id", "FoodAndSouvenireController.detail");  
  Route.get("/tourist_forum", "TouristForumController.index");
}).middleware('auth')

  



