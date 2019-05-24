const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Pets', {useNewUrlParser:true}).then(console.log('Mongoose Conected'));

var SkillsSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3}},    
    {timestamps: true});

var PetSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    type: {type: String, required: true, minlength: 3},
    desc: {type: String, required: true, minlength:3 },
    likes: {type: Number},
    skills: [SkillsSchema]},
    {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);
