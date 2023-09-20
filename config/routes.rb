Rails.application.routes.draw do

  root "home#index"

  get 'products', to: 'home#index'   ### react to get products
  get 'product_list', to: 'home#index' ## to show product list 

  namespace :api do
    resources :products    ### rails..to get the seed data
  end   
end
