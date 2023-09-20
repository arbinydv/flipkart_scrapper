class Product < ApplicationRecord
  has_and_belongs_to_many :categories
  has_many_attached :images, dependent: :destroy   ## attach product images 
  after_commit :trigger_scraping_if_url_changed
  
  # save product images 
  def image_urls
    images.map { |image| Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true) }
  end

  def trigger_scraping_if_url_changed
    if persisted? && previous_changes.key?('url')
      scrape_data!
    elsif new_record?
      scrape_data!
    end
  end
  
  
  def scrape_data!
    CrawlerJob.perform_in(3.seconds, id)
  end


end




# == Schema Information
#
# Table name: products
#
#  id            :bigint           not null, primary key
#  url           :string
#  title         :string
#  description   :string
#  price         :string
#  mobile_number :string
#  size          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
