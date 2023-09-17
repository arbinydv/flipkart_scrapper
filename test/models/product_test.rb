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
require "test_helper"

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
