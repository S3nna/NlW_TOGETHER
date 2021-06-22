import express from "express";

const app = express();

app.get("/test", (request, response) => {

 return response.send("Ola Nlw")

});

app.post("/test-post", (request, response) => {
 return response.send("Ola nLw metodo Post");
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running Nlw"));