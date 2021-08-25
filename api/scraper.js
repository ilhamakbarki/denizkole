const _ = require('lodash');
const Apify = require('apify');

async function startScraper() {

	return new Promise((resolve) => {
		Apify.main(async () => {
			const requestList = await Apify.openRequestList('start-urls', ['https://www.lieferando.de']);

			const crawler = new Apify.PuppeteerCrawler({
				requestList,
				launchContext: {
					useChrome: true,
					stealth: true,
					launchOptions: {
						headless: true,
					},
				},
				handlePageFunction: async ({page}) => {
					resolve(await page.title())
				},
			});

			await crawler.run();
		});
	})
}

module.exports = startScraper;
