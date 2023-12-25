// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Tommaso',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Buongiorno!',
	greetingAfternoon: 'Buon pomeriggio,',
	greetingEvening: 'Buona sera,',
	greetingNight: 'Vai a dormire!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '288752458e9b0130f398aa44af330a02', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'it', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '45.053366183808',
	defaultLongitude: '9.693005630758337',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Mastodon',
			icon: 'mastodon',
			link: 'https://mastodon.uno/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com/',
		},
		{
			id: '3',
			name: 'Video',
			icon: 'youtube',
			link: 'https://invidious.private.coffee',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Free Music Archive',
			icon: 'music',
			link: 'https://freemusicarchive.org',
		},
		{
			id: '6',
			name: 'WFMU',
			icon: 'radio',
			link: 'https://wfmu.org/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Spotify',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'News',
			icon: 'news',
			link: 'https://news.google.com/',
		},
		{
			id: '3',
			name: 'Drive',
			icon: 'drive',
			link: 'https://drive.google.com',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.it/',
		},
		{
			id: '5',
			name: 'TommasoCroce.eu',
			icon: 'web',
			link: 'https://tommasocroce.eu/',
		},
		{
			id: '6',
			name: 'Flickr',
			icon: 'flickr',
			link: 'https://flickr.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'BoC',
					link: 'https://inv.vern.cc/playlist?list=PLBAF-gQw1eB-Odosh4tIRJU8SMbHRz3d6',
				},
				{
					name: 'Tycho',
					link: 'https://inv.vern.cc/playlist?list=PLF333AB8AE1483E46',
				},
				{
					name: 'AFX',
					link: 'https://inv.vern.cc/playlist?list=PLt4WEFLBaIMAgKzOi76bZYrFZPCSZ-yIC',
				},
				{
					name: 'KGATLW',
					link: 'https://inv.vern.cc/playlist?list=PLquS-Ow7u33iXC_uyWW16H_AtFU40z86W',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Bitwig Guide',
					link: 'https://www.bitwig.com/userguide/',
				},
				{
					name: 'Flickr',
					link: 'https://www.flickr.com',
				},
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'UnixPorn',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/ryuJin25',
				},
			],
		},
	],
};
