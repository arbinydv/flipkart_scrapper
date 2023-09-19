require 'open-url'
require 'nokogiri'

module Scraper

  class Base
    product_url : 'https://www.flipkart.com/srpm-wayfarer-sunglasses/p/itmaf19ae5820c06'

    def scrape_product_data(url)
      @scrapper = Nokogiri::HTML(URI.open(url))
      scrape!
    end 

    def save_to_db
      product = Product.create!(scraped_data.except(:category, :images)) ## creates product on db and add all hash values excpet category and images 
      category = Category.find_or_create_by(name: scraped_data[:category])  ## if categroy exists then okay else make new

      ## many to many assocations

      product.categories << category
    end
  end 

emd 