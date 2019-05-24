const controller = require('./controller');

module.exports = app => {

    app.delete('/pets/:id', controller.DestroyPet);
    app.get('/pets/:id', controller.RetrieveOnePet);
    app.get('/pets/name/:name', controller.RetrieveName);
    app.get('/pets', controller.RetreiveAllPets);   
    app.put('/pets/:id', controller.UpdatePet); 
    app.post('/pets', controller.AddPet);       
    app.get('/pets/like/:id', controller.addLike);    
    app.post('/pets/:skill', controller.AddSkill);    
    app.delete('/pets/:id', controller.DestroyPet);



};