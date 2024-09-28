import { DataTypes, Model } from 'sequelize';
import db from '../database/db';

class Recipe extends Model {
    public id!: number;
    public title!: string;
    public making_time!: string;
    public serves!: string;
    public ingredients!: string;
    public cost!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        making_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        serves: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        cost: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: 'Recipe',
        tableName: 'recipes',
        timestamps: true,
    }
);

export default Recipe;
