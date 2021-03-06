Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :create, :update, :destroy] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end
    
  

  resources :artwork_shares, only: [:index, :create, :destroy]

  # get 'users', to: 'users#index'
  # get 'users/:id', to: 'users#show'
  # post 'users', to: 'users#create'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'

  resources :artworks, only: [:show, :create, :update, :destroy] do
    resources :comments, only: [:index]
    member do 
    post 'like', to: 'artworks#like'
    end
  end

  resources :comments, only: [:create, :destroy] do 
    member do 
      post 'like', to: 'comments#like' 
    end 
  end
    
 



  

end
