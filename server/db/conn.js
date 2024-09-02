const mongoose = require ("mongoose");

const DB = 
"mongodb+srv://ahmed:ahmed@cluster0.pqg3iui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect (DB,{
   useNewUrlParser:true,
   useUnifiedTopology:true
}).then(()=> console.log("connected to database")).catch ((error) => console.log(error.message));