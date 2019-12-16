Rails.application.routes.draw do
  namespace :api do
    resources :cohorts do
      resources :students
    end
  end
end
