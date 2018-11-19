class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.text :description
      t.integer :status
      t.references :project, index: false, null: false
      t.references :developer, null: false
      t.references :created_by, index: true, null: false
      t.references :updated_by, index: true, null: false
      t.timestamps
    end
    add_index :todos, [:project_id, :developer_id]
  end
end
