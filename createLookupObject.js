const fs = require('fs');

const lines = fs.readFileSync('lookup.csv')
	  .toString()
	  .split('\n')
      .filter(line => line !== '');

const headings = lines.shift().split(',');

const lookupObject = lines.map(line => line.split(','))
      // turn each row into an object whose key names are column names
      .map(line => line.reduce((acc, curr, i) => Object.assign(acc, {[headings[i]]: curr}), {}))
      // this table has a bunch of cruft, we just want the stuff that maps ids to places
      .filter(row => {
		  return /[A-Z]{2}-\d{3}/.test(row.RainGaugeID);
	  })
	  // fix the formatting for location ids
	  .map(row => {
	  	  row.RainGaugeID = row.RainGaugeID.replace('-', '');
		  return row;
	  })
      // now turn it into an object whose keys are location ids, instead of an array of objects
      .reduce((obj, row) => {
		  const data = {
			  lat: row.Latitude,
			  lng: row.Longitude,
			  county: row.County,
			  city: row.City,
			  description: row.Location,
		  };
		  return Object.assign(obj, {[row.RainGaugeID]: data});
	  }, {});

console.log(JSON.stringify(lookupObject));
