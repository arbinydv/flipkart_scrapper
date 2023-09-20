class Product < ApplicationRecord
  has_and_belongs_to_many :categories
  before_save :scrape_data! 

  # save product images 
  def  images
  end
  
  def scrape_data!
    CrawlerJob.perform_async(self.url)
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
