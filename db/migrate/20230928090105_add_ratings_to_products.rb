class AddRatingsToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :ratings, :string
    add_column :products, :reviews, :string
    add_column :products, :total_rating, :string
  end
end
