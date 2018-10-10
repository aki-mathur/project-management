class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description
      t.references :created_by, index: true, null: false
      t.references :updated_by, index: true, null: false
      t.timestamps
    end
  end
end
