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

Route.get("/", async ({ }) => {
  return "OK UTAMA"
});

Route.get("/login", "AuthController.loginPage");
Route.post("/login", "AuthController.login");

Route.get("/register", "AuthController.regisPage");
Route.post("/register", "AuthController.register");

Route.get("/home", "AuthController.homePage");


Route.get("/translator", "SmartTranslaterController.index");  


Route.get("/budget_management", "BudgetManagementController.index");  

Route.get("/travel_recomendation", "TravelRecomendationController.index");  
Route.get("/travel_recomendation/:category", "TravelRecomendationController.category");  

Route.get("/food_and_souvenier", "SmartTranslaterController.index");  

Route.get("/tourism_forum", "SmartTranslaterController.index");  



