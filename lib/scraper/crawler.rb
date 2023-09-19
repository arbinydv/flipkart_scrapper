module Scraper
  class Crawler < Base
    attr_reader :scraped_data

    def scrape!
      title = scrapper.css('.B_NuCI').text
      category = scrapper.css('._2whKao').map(&:text)[1]
      description = scrapper.css('._1AN87F').text.presence || scrapper.xpath('//p[//*[contains(text(), "Description")]]').text
      price = scrapper.css('._30jeq3._16Jk6d').text
      size = scrapper.css('._1fGeJ5.PP89tw._2UVyXR._31hAvz').text
      images = scrapper.css('._2FHWw4').css('img').map { |link| link['src'] }
      @scraped_data = { description: description, category: category, title: title,
                        price: price, size: size, images: images }
    end
  end
end