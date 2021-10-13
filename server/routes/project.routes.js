const ProjectController = require('../controllers/project.controller');



module.exports= function(app){
    app.get("/api/health",ProjectController.index );
    app.post("/api/project", ProjectController.createAuthor);
    app.get("/api/project", ProjectController.getAllAuthors);
    app.get("/api/project/:id", ProjectController.getOne);
    app.put("/api/project/:id", ProjectController.updateOne);
    app.delete("/api/project/:id", ProjectController.deleteOne);


}