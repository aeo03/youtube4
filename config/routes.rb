Rails.application.routes.draw do


  devise_for :users
  resources :videos do 
    post 'comments', to: 'comments#create'
  end

  root to: 'videos#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
