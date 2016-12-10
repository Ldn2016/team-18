var sqlite3 = require('sqlite3');
var mainDatabase = '/Users/annabanasik/Downloads/dbsqlite';




    var db = new sqlite3.Database(mainDatabase);

    db.serialize(function() {
        db.run("CREATE TABLE Donation (name TEXT)");
var stmt = db.prepare("INSERT INTO Donation (name) VALUES(?)");
 
stmt.run("Ipsum ");
  
stmt.finalize();

    });





db.close();