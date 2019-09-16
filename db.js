const mongoose = require("mongoose");

const URL = {
  mongoAtlas:
    "mongodb+mongodb+srv://leina:yonomelase@cluster0-rjpak.mongodb.net/test?retryWrites=true&w=majoritysrv://leina:<password>@cluster0-rjpak.mongodb.net/test?retryWrites=true&w=majority"
};

mongoose
  .connect(URL.mongoAtlas, {
    useNewUrlParser: true
  })

  .then(db => console.log(`DB is connected`))
  .catch(err => console.error(err));
