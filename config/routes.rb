Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :projects
  resources :todos

  get 'dashboard', to: 'todos#dashboard'

  root "application#index"

end
