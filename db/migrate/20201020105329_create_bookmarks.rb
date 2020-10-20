class CreateBookmarks < ActiveRecord::Migration[6.0]
  def change
    create_table :bookmarks do |t|
      t.text :body
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
