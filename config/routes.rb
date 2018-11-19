Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  resources :projects
  resources :todos
  devise_for :users, :controllers => {:registrations => "users/registrations"}


  get 'users', to: 'users#index'

  get 'dashboard', to: 'todos#dashboard'

  get 'charts', to: 'todos#charts'

  get 'developers', to: 'projects#developers'


  root "application#index"

end
