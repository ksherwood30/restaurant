
const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json({extended: false}));
const indexRoutes =require("./routes/index");
const path = require('path')


// DB setup
// mongoose.connect(db_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to DB!'))
// .catch(error => console.log(error.message));


// app.use(bodyparser.urlencoded({extended: true}));
// Route Folders
app.use("/", indexRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/public'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
  }
  else{
    console.log("hello there")
  }
  
  const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));