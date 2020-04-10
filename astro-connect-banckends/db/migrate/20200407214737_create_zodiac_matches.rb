class CreateZodiacMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :zodiac_matches do |t|
      t.string :zodiac_one
      t.string :zodiac_two
      t.string :pro
      t.string :con
      t.string :maximize

      t.timestamps
    end
  end
end
