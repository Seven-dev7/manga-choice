class CreateMangas < ActiveRecord::Migration[5.1]
  def change
    create_table :mangas do |t|
      t.string :name
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
