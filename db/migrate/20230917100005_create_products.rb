class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :url
      t.string :title
      t.string :description
      t.string :price
      t.string :mobile_number
      t.string :size

      t.timestamps
    end
  end
end
