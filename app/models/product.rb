class Product < ApplicationRecord


  # save product images 
  def  images
  end 

  # logic to scrape data 
  def scrape  
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
