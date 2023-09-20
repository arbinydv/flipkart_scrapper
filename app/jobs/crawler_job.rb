class CrawlerJob
  include Sidekiq::Job

  def perform(url)
    Scraper::ProductScrapper.new(url).scrape_and_save!
  end
end