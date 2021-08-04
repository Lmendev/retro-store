const mongoose = require("mongoose");

const urlDB =
  "mongodb+srv://admin:CYRdOfdzrJKCjKSB@cluster0.3tkog.mongodb.net/retroStore?retryWrites=true&w=majority";
mongoose.connect(
  urlDB,
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
