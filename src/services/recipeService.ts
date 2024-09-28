import Recipe from '../models/recipeModel';

class RecipeService {
    async createRecipe(data: any) {
        return await Recipe.create(data);
    }

    async getAllRecipes() {
        return await Recipe.findAll();
    }

    async getRecipeById(id: number) {
        return await Recipe.findByPk(id);
    }

    async updateRecipe(id: number, data: any) {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            return await recipe.update(data);
        }
        return null;
    }

    async deleteRecipe(id: number) {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            await recipe.destroy();
            return true;
        }
        return false;
    }
}

export default new RecipeService();
