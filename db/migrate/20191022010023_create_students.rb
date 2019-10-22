class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :full_time
      t.integer :technical
      t.integer :soft
      t.integer :effort

      t.timestamps
    end
  end
end
