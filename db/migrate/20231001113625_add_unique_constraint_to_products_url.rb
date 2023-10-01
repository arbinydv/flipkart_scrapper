class AddUniqueConstraintToProductsUrl < ActiveRecord::Migration[7.0]
  def change
    add_index :products, :url, unique: true
  end
end
