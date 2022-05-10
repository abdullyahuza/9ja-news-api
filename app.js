const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const sites = require('./sites.js')

//initiate express
const app = express()

function returnUniqueNews(arr, key){
	const uniqueKeys = []

	const unique = arr.filter(item => {
	  const isDuplicate = uniqueKeys.includes(item[key].toLowerCase());

	  if (!isDuplicate) {
	    uniqueKeys.push(item[key].toLowerCase());
	    return true;
	  }
	  return false;
	});	

	return unique
}

const getNews = (sites, keyword) => {
	const news = []
	
	
	const keywordUpper = keyword.toUpperCase()
	const keywordLower = keyword.toLowerCase()

	let keywordFirst = keyword.split(" ");

	for (let i = 0; i < keywordFirst.length; i++) {
	    keywordFirst[i] = keywordFirst[i][0].toUpperCase() + keywordFirst[i].substr(1);
	}

	keywordFirst = keywordFirst.join(" ");

	const keywords = [keywordFirst, keywordUpper, keywordLower]

	sites.forEach(site => {
		axios.get(site.address)
			.then(response => {
				const html = response.data
				//pick elements
				const $ = cheerio.load(html)

				keywords.forEach( keyword => {
					$('a:contains("'+keyword+'")', html).each(function(){
						
						const title = $(this).text()
						const url = $(this).attr('href')

						//push the news into news array
						news.push( { title: title.replace(/\n/g, ''), url, source: site.name} )

					})
				})

			})
	})
	
	return {keyword: keywordFirst, news}
}

const news = getNews(sites, 'Buhari')

app.get('/', (req, res) => {
	res.send('<h1>9ja-news-api</h1>')
})

app.get('/news', (req, res) => {

	res.json(news)

})

module.exports = app;
