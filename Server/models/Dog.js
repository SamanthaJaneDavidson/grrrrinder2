const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
    id: {
        type: Number,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    dog_name: {
        type: String,
        required: true,
    },
    dog_breed: {
        type: String,
        required: true,
    },
    dog_gender: {
        type: String,
        required: true,
    },
    dog_size: {
        type: String,
        required: true,
    },
    dog_age: {
        type: String,
        required: true,
    },
    dog_vaccinations: {
        type: Boolean, 
        required: true,
    },
    dog_neuter_spayed: {
        type: Boolean, 
        required: true,
    },
    dog_temperment: {
        type: String,
        required: true,
    },
    dog_notes: {
        type: String,
        required: false,
    },
    dog_picture: {
        type: String,
        required: true,
    },
    preferred_days: {
        type: String,
        allowNull: false,
    },
    preferred_timeofday: {
        type: String,
        allowNull: false,
    },
    preferred_location: {
        type: String,
        allowNull: false,
    },

    // unsure if this is correct
    user_id: {
        type: Number,
        ref: {
            model: "User",
            key: "id",
        },
    },

});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
