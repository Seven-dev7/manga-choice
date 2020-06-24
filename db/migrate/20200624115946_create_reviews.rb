class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :description
      t.integer :score
      t.belongs_to :manga, null: false, foreign_key: true

      t.timestamps
    end
  end
end
