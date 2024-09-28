import { Request, Response } from 'express';
import RecipeService from '../services/recipeService';

class RecipeController {
    async createRecipe(req: Request, res: Response) {
        const { title, making_time, serves, ingredients, cost } = req.body;
        if (!title || !making_time || !serves || !ingredients || !cost) {
            return res.status(400).json({
                message: 'Recipe creation failed!',
                required: 'title, making_time, serves, ingredients, cost',
            });
        }
        try {
            const recipe = await RecipeService.createRecipe({
                title,
                making_time,
                serves,
                ingredients,
                cost,
            });
            return res.status(200).json({
                message: 'Recipe successfully created!',
                recipe,
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Recipe creation failed!',
                required: 'title, making_time, serves, ingredients, cost',
            });
        }
    }

    async getAllRecipes(req: Request, res: Response) {
        const recipes = await RecipeService.getAllRecipes();
        return res.status(200).json({ recipes });
    }

    async getRecipeById(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        const recipe = await RecipeService.getRecipeById(id);
        if (recipe) {
            return res.status(200).json({ recipe: [recipe] });
        }
        return res.status(404).json({ message: 'No recipe found' });
    }

    async updateRecipe(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        const updatedData = req.body;
        const updatedRecipe = await RecipeService.updateRecipe(id, updatedData);
        if (updatedRecipe) {
            return res.status(200).json({
                message: 'Recipe successfully updated!',
                recipe: updatedRecipe,
            });
        }
        return res.status(404).json({ message: 'No recipe found' });
    }

    async deleteRecipe(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        const result = await RecipeService.deleteRecipe(id);
        if (result) {
            return res
                .status(200)
                .json({ message: 'Recipe successfully removed!' });
        }
        return res.status(404).json({ message: 'No recipe found' });
    }
}

export default new RecipeController();
