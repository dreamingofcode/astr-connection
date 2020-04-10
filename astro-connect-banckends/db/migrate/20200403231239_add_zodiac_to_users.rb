class AddZodiacToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :zodiac, :string
  end
end
