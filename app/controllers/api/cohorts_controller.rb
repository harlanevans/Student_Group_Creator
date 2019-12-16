class Api::CohortsController < ApplicationController
  before_action :set_cohort, only: [:destroy, :update]

  def index
    render json: Cohort.all
  end

  def create
    @cohort = Cohort.new(cohort_params)
    if @cohort.save
      render json: @cohort
    else
      render json: { errors: stat.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @cohort.update(cohort_params)
      render json: @cohort
    else
      render json: { errors: stat.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @cohort.destroy
  end

  private

  def set_cohort
    @cohort = Cohort.find(params[:id])
  end

  def cohort_params
    params.require(:cohort).permit(:title, :full_time, :number_of_students)
  end
end
