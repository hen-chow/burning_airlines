Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "flights#app"
  resources :flights, only: [:create, :index]
  resources :airplanes, only: [:create, :index]
  resources :reservations, only: [:create, :index]
  resources :users, only: [:create, :index]

  get "login", to: "sessions#new", as: "login"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy", as: "logout"

end
