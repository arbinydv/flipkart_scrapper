class CrawlerJob
  include Sidekiq::Job

  def perform(*args)
    product = Product.find_by(id: args[0])
    return unless product

    Scraper::ProductScrapper.new(product.id).scrape_and_save!
  end
end