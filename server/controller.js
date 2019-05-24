const Pet = require('./models');
var count=0;
module.exports = {

    AddPet: (req, res) => { 
        
        
        let pet = new Pet(req.body);
        console.log(req.body);
        pet.likes=0;
        console.log(pet);           
        pet.save().
        then(result => { return Pet.findByIdAndUpdate(result._id, {$push: {skills: {name: req.body.skill1} }});}).
        then(result => {return Pet.findByIdAndUpdate(result._id, {$push: {skills: {name: req.body.skill2} }});}).
        then(result => {return Pet.findByIdAndUpdate(result._id, {$push: {skills: {name: req.body.skill3} }});}).
        then(results => console.log(results))    
        .catch(err=>console.log(err));
    },

    RetreiveAllPets: (req, res) => {
        Pet.find()
        .then(results => res.json(results))
        .catch(err => console.log(err));        
    },

    RetrieveOnePet: (req, res) => {
        Pet.findById(req.params.id)
        .then(results => res.json(results))
        .catch(err => console.log(err));
    },

    DestroyPet: (req, res) => {
        Pet.findByIdAndRemove(req.params.id)
        .then(results => res.json(results))
        .catch(err => console.log(err));
    },

    DestroySkill: (req, res) => {
        Pet.findOneAndRemove({$pull : {skills: {name: req.params.id}}})
        .then(results => res.json(results))
        .catch(err => console.log(err));
    },

    AddSkill: (req, res) => {
        pet.findOneAndUpdate({name: req.params.pet}, {$push : {skills: {name: req.body.name}}})
        .then(results => res.json(results))
        .catch(err => console.log(err));
    },

    RetreiveSkills: (req, res) => {
        Pet.findOne({name: req.params.pet})
        .then(results => res.json(results.products))
        .catch(err => console.log(err));
    },

    RetreiveOneSkill: (req, res) => {
        console.log('search id' + req.params.id);
        Pet.findOne({'pets.skills': req.params.id})
        .then(results => console.log(results) || res.json(results))
        .catch(err => console.log(err));
    },

    UpdatePet: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);
        Pet.findByIdAndUpdate(req.params.id , req.body).
        then(result => { return Pet.findByIdAndUpdate(result._id, {$push: {skills: {name: req.body.skill1} }});}).
        then(result => {return Pet.findByIdAndUpdate(result._id, {$push: {skills: {name: req.body.skill2} }});}).
        then(result => {return Pet.findByIdAndUpdate(result._id, {$push: {skills: {name: req.body.skill3} }});}).
        then(results => res.json(results))
        .catch(err => console.log(err));
    },

    addLike: (req, res) => {
        Pet.findById(req.params.id).
        then(result => {
            console.log(" result" + result);
            count = result.likes+ 1;
            console.log(req.params.id, count);
            return Pet.findByIdAndUpdate(req.params.id, {likes: count})
            .then(results => res.json(results))
            .catch(err => console.log(err));
         });
    },
    RetrieveName: (req, res) => {
        Pet.find({name: req.params.name})
        .then(results => res.json(results))
        .catch(err => console.log(err));
    },

}