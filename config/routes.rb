Rails.application.routes.draw do

  root "home#index"

  get 'products', to: 'home#index'   ### react to get products 

  namespace :api do
    resources :products    ### rails..to get the seed data
  end   
end
