Rails.application.routes.draw do

  root to: redirect('/categories')  ## redirect to dashboard

  get 'products', to: 'home#index'   ### react to get products scrapper

  get 'categories', to: 'home#index'
  get 'categories/:id', to: 'home#index'
  namespace :api do
    resources :products
    resources :categories
  end   
end
