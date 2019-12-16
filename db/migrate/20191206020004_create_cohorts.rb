class CreateCohorts < ActiveRecord::Migration[6.0]
  def change
    create_table :cohorts do |t|
      t.string :title
      t.boolean :full_time
      t.integer :number_of_students

      t.timestamps
    end
  end
end
