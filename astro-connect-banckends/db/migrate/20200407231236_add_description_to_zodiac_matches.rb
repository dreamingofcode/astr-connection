class AddDescriptionToZodiacMatches < ActiveRecord::Migration[6.0]
  def change
    add_column :zodiac_matches, :description, :string
  end
end
