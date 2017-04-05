Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "flights#app"
  resources :flights, only: [:create, :index]
  resources :airplanes, only: [:create, :index]
  resources :reservations, only: [:create, :index]
  resources :users, only: [:new, :create]

  get "/admin/airplanes", to: "admin#index_airplanes", as: "index_airplanes"
  post "/admin/airplanes", to: "admin#create_airplanes", as: "create_airplanes"
  get "/admin/flights", to: "admin#index_flights", as: "index_flights"
  post "/admin/flights", to: "admin#create_flights", as: "create_flights"

  get "login", to: "sessions#new", as: "login"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy", as: "logout"

end
