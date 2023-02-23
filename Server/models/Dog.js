const { Schema, model } = require('mongoose');

const dogSchema = new Schema({

    //Per session with tutor- We may not need the id, because Mongoose provides an id already. When running the seed data the forloop (for the username reference) is throwing an error. 
    id: {
        type: Number,
        required: true,
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

    //Might need to convert these to arrays to match the typedef 
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

    references: 
        { type: Schema.Types.ObjectId, ref: 'User' }

});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
