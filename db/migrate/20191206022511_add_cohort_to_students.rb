class AddCohortToStudents < ActiveRecord::Migration[6.0]
  def change
    add_reference :students, :cohort, foreign_key: true
  end
end
