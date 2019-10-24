class AddAverageToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :average, :integer
  end
end
