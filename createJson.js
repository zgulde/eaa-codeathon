const fs = require('fs');

// takes a csv string whose headings are the first line,
// and returns an array of objects where each object is a row
// whose keys are the headings
const parseCsvString = csvString => {
	const lines = csvString.split('\n');
	const headings = lines.shift().split(',');
	return lines.map(line => line.split(','))
		.map(line => line.reduce((acc, curr, i) => {
			return Object.assign(acc, {[headings[i]]: curr});
		}, {}));
}

const parseCsvFile = fileName => parseCsvString(fs.readFileSync(fileName).toString());

const files = 'bandera.csv,dhanis.csv,greenmountain.csv,kyle.csv,southfork.csv,uvalde.csv'.split(',');

// {
//   date: {
//      location_id: reading,
//      ...
//   },
//   ...
// }
const master = {};

files.forEach(file => {
	const lines = fs.readFileSync(file).toString().split('\n');
	const headings = lines.shift()
		  .split(',')
	      // fix heading formatting
	      .map(heading => {
			  return /^max\(/.test(heading) ?
			      heading.replace(/max\((.{5}).*/, '$1') :
				  heading;
		   });
	const rows = lines.map(line => line.split(','))
		.map(line => line.reduce((acc, curr, i) => {
			return Object.assign(acc, {[headings[i]]: curr});
		}, {}));
	rows.forEach(row => {
		if (typeof master[row.the_date] === 'undefined') {
			master[row.the_date] = {};
		}
		const data = {};
		Object.keys(row).forEach(key => {
			if (key === 'the_date') { return; }
			data[key] = row[key];
		})
		Object.assign(master[row.the_date], data);
	});
});

console.log(JSON.stringify(master));
