require 'open-uri'
require 'nokogiri'

module Scraper
  class ProductScrapper
    attr_reader :scrapper

    def initialize(product_id)
      @product = Product.find_by_id(product_id)
      @scrapper = Nokogiri::HTML(URI.open(@product.url))
    end

    def scraped_data
      @scraped_data ||= scrape_data
    end

    def scrape_and_save!
      ## logic to handle product update and other things
      category = Category.find_or_create_by(name: scraped_data[:category])
      @product.categories << category
     
      scraped_data[:images].each do |image|
        downloaded_image = URI.parse(image).open
        @product.images.attach(io: downloaded_image, filename: scraped_data[:title])
      end;nil
      @product.update!(scraped_data.except(:category, :images))
    end

    private
    def scrape_data
      title = @scrapper.css('.B_NuCI').text
      category = @scrapper.css('._2whKao').map(&:text)[1]
      description = @scrapper.css('._1AN87F').text.presence || @scrapper.xpath('//p[//*[contains(text(), "Description")]]').text
      price = @scrapper.css('._30jeq3._16Jk6d').text
      size = @scrapper.css('._3Oikkn._3_ezix._2KarXJ._31hAvz').text
      images = @scrapper.css('._2FHWw4').css('img').map { |link| link['src'] }

      {
        description: description,
        category: category,
        title: title,
        price: price,
        size: size,
        images: images
      }
    end

  end
end
