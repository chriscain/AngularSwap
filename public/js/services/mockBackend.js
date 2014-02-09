myApp.service('mockBackend', function() {


	var pages = ["login", "schedule", "confirm", "dashboard"];

	var businesses = [
		{
			business: 'Chipotle',
			distance: '0.5',
			startHour: '9',
			endHour: '5',
			logo: 'http://images.forbes.com/media/lists/companies/chipotle-mexican-grill_200x200.jpg'
		},
		{
			business: 'Pizza House',
			distance: '0.8',
			startHour: '10',
			endHour: '2',
			logo: 'http://www.a2southu.com/wp-content/uploads/pizza-house-logo.jpg'
		},
		{
			business: 'Pancheros',
			distance: '1.1',
			startHour: '2',
			endHour: '6',
			logo: 'http://restaurantnews.com/wp-content/uploads/2012/02/Pancheros-Mexican-Grill-Launches-Brand-Evolution.jpg'
		},
		{
			business: 'Espresso Royale',
			distance: '0.8',
			startHour: '8',
			endHour: '5',
			logo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhc3z8cK36hxIlTGvjBUZLLvIR1OOEHVm-3R3-LyOoqLUkNX2CGg'
		},
		{
			business: 'Subway',
			distance: '0.3',
			startHour: '1',
			endHour: '5',
			logo: 'http://images.forbes.com/media/lists/companies/subway_200x200.jpg'
		},
		{
			business: 'Jimmie Johns',
			distance: '0.4',
			startHour: '1',
			endHour: '5',
			logo: 'http://2.bp.blogspot.com/_WoGeH_T337c/S73f-JoOSSI/AAAAAAAABVs/-iQJ20jaCYE/s320/jimmy-johns-200x200.jpg'
		},
		{
			business: 'Chipotle',
			distance: '0.5',
			startHour: '9',
			endHour: '5',
			logo: 'http://images.forbes.com/media/lists/companies/chipotle-mexican-grill_200x200.jpg'
		},
		{
			business: 'Jimmie Johns',
			distance: '0.8',
			startHour: '10',
			logo: 'http://2.bp.blogspot.com/_WoGeH_T337c/S73f-JoOSSI/AAAAAAAABVs/-iQJ20jaCYE/s320/jimmy-johns-200x200.jpg'
		},
		{
			business: 'Stucchi',
			distance: '1.1',
			startHour: '2',
			endHour: '6',
			logo: 'http://stucchisicecream.com/files/4312/7672/2255/Small_Stucchis_Logo.jpg'
		}
	];


	var days = [{
		day: {
			which: 'monday',
			leftPercent: '10'
		},
		next: 'tuesday'
	},
	{
		prev: 'monday',
		day: {
			which: 'tuesday',
			leftPercent: '20'
		},
		next: 'wednesday'
	},
	{
		prev: 'tuesday',
		day: {
			which: 'wednesday',
			leftPercent: '10'
		},
		next: 'thursday'
	},
	{
		prev: 'wednesday',
		day: {
			which: 'thursday',
			leftPercent: '25'
		},
		next: 'friday'
	},
	{
		prev: 'thursday',
		day: {
			which: 'friday',
			leftPercent: '30'
		},
		next: 'saturday'
	},
	{
		prev: 'friday',
		day: {
			which: 'saturday',
			leftPercent: '15'
		},
		next: 'sunday'
	},
	{
		prev: 'saturday',
		day: {
			which: 'sunday',
			leftPercent: '25'
		},
	}];

	return {
		pages: pages,
		daysOfTheWeek: days,
		businesses: businesses
	};
});