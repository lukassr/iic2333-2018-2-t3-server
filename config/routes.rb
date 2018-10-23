Rails.application.routes.draw do
  

  resources :groups
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/register", to: "registers#register"
  get "/power", to: "registers#power"
  get "/meme", to: "static#meme"

  root 'home#index'

end
