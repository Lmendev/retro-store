const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/retroStore",
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
