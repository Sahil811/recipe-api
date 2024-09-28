import { Router } from 'express';
import RecipeController from '../controllers/recipeController';

const router = Router();

router.post('/recipes', RecipeController.createRecipe);
router.get('/recipes', RecipeController.getAllRecipes);
router.get('/recipes/:id', RecipeController.getRecipeById);
router.patch('/recipes/:id', RecipeController.updateRecipe);
router.delete('/recipes/:id', RecipeController.deleteRecipe);

export default router;
