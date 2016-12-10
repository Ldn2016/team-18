var sqlite3 = require('sqlite3');
var mainDatabase = '/Users/annabanasik/Downloads/dbsqlite';


var db = new sqlite3.Database(mainDatabase);
var blank = [];

    db.serialize(function() {
        db.each("SELECT * FROM Donation", function(err, row){
        	blank.push({name: row.name});
        	//blank.push(row.id, row.info);
        });
    });

db.close(function() {
	console.log(blank);
})


