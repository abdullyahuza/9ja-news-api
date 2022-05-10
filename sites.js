const { v4: uuidv4 } = require('uuid');
// https://blog.feedspot.com/nigeria_news_websites/
const newspapers = [
	{
		name: 'legit',
		address: 'https://www.legit.ng/'
	},
	{
		name: 'naijaloaded',
		address: 'https://www.naijaloaded.com.ng/'
	},
	{	
		name: 'nairaland',
		address: 'https://www.nairaland.com/'
	},
	{
		name:'punchng',
		address: 'https://punchng.com/'
	},
	{
		name: 'saharareporters',
		address: 'http://saharareporters.com/'
	},
	{
		name: 'thisdaylive',
		address: 'https://www.thisdaylive.com/'
	},
	{
		name: 'dailypost',
		address: 'https://dailypost.ng/'
	},
	{
		name: 'tribuneonlineng',
		address: 'https://tribuneonlineng.com/'
	},
	{
		name: 'leadership',
		address :'https://leadership.ng/'
	},
	{
		name: 'businessday',
		address: 'https://businessday.ng/'
	},
	{
		name: 'dailynigerian',
		address: 'https://dailynigerian.com/'
	},
	{
		name: 'nigerianeye',
		address: 'https://www.nigerianeye.com/'
	},
	{
		name: 'naijagists',
		address: 'https://naijagists.com/'
	},
	{
		name: 'informationng',
		address: 'https://www.informationng.com/'
	},
	{
		name: 'medianigeria',
		address: 'http://medianigeria.com/'
	}


]

const sites = newspapers.map(function(site){
	return {
		id: uuidv4(),
		...site
	}
})

module.exports = sites
