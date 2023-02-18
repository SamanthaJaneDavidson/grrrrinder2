const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
    id: {
        type: DataTypes.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    dog_name: {
        type: DataTypes.STRING,
        required: true,
    },
    dog_breed: {
        type: DataTypes.STRING,
        required: true,
    },
    dog_gender: {
        type: DataTypes.STRING,
        required: true,
    },
    dog_size: {
        type: DataTypes.STRING,
        required: true,
    },
    dog_age: {
        type: DataTypes.STRING,
        required: true,
    },
    dog_vaccinations: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
    dog_neuter_spayed: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
    dog_temperment: {
        type: DataTypes.STRING,
        required: true,
    },
    dog_notes: {
        type: DataTypes.STRING,
        required: false,
    },
    dog_picture: {
        type: DataTypes.STRING,
        required: true,
    },
    preferred_days: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preferred_timeofday: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preferred_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // unsure if this is correct
    user_id: {
        type: DataTypes.INTEGER,
        ref: {
            model: "User",
            key: "id",
        },
    },

});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
