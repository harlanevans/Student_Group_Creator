class Api::StudentsController < ApplicationController
  before_action :set_student, only: [:destroy, :update]

  def index
    render json: Student.all.order(:first_name)
  end

  def create
    @student = Student.new(student_parms)
    if @student.save
      render json: @student
    else
      render json: { errors: stat.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @student.update(student_parms)
      render json: @student
    else
      render json: { errors: stat.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @student.destroy
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def student_parms
    params.require(:student).permit(:first_name, :last_name, :full_time, :technical, :soft, :effort, :average)
  end
end
