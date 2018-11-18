Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :show, :destroy]
    resource :user, only: [:create]
    resources :questions, only: [:index, :create, :show, :update, :destroy]
    resources :answers, only: [:index, :create, :update, :destroy]
  end
end
