const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:1M0wqF3ROQ7K19JU@cluster0.3tkog.mongodb.net/retroStore?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Conexión correcta");
    }
  }
);

module.exports = mongoose;
