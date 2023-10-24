class RemoveUniqueConstraintFromProductsUrl < ActiveRecord::Migration[7.0]
  def change
    remove_index :products, :url
  end
end
