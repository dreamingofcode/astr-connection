class AddMatchIdToZodiacMatches < ActiveRecord::Migration[6.0]
  def change
    add_column :zodiac_matches, :match_id, :integer
  end
end
