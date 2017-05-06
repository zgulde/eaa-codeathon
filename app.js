

const dateSelect = document.querySelector('#dates');
const icons = {
	light: '/icons/light.png',
	medium: '/icons/medium.png',
	dark: '/icons/dark.png',
	none: '/icons/none.png'
}
let rainData;
const markers = {};
const mapOptions = {
	// Set the zoom level
	zoom: 8,

	// This sets the center of the map at our location
	center: {
		lat:  29.426791,
		lng: -98.489602
	}
};
const map = new google.maps.Map(document.getElementById('map'), mapOptions);

const onSelectChange = e => {
	const date = e.target.value;
	const day = rainData[date];
	const data = Object.keys(day).map(id => parseFloat(day[id]));
	const numDays = data.filter(datum => datum > 0).length;
	const avg = data.filter(datum => datum > 0).reduce((sum, current) => sum + current, 0) / numDays;
	console.log(data);
	Object.keys(markers).forEach(id => {
		let icon = parseFloat(day[id]) > avg ? icons.dark : icons.light;
		if (day[id] == 0) { icon = icons.none; }
		markers[id].setIcon(icon);
	});
};

const main = (data, lookup) => {
	rainData = data;
	// build the date select
	const dates = Object.keys(data);
	dates.forEach(date => {
		const option = document.createElement('option');
		option.innerText = date;
		dateSelect.appendChild(option);
	});

	// create markers
	Object.keys(lookup).forEach(id => {
		const place = lookup[id];
		markers[id] = new google.maps.Marker({
			map,
			icon: icons.none,
			position: {lat: parseFloat(place.lat), lng: parseFloat(place.lng)},
		});
	});
};

dateSelect.addEventListener('change', onSelectChange);
// this feels gross, but we're working quickly...
fetch('data.json')
	.then(data => data.json())
	.then(data => {
		fetch('lookup.json').then(lookup => lookup.json())
		    .then(lookup => {
				main(data, lookup);
			});
	});
