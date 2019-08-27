class ArtworksController < ApplicationController
  # before_action :set_artwork, only: [:show, :edit, :update, :destroy]

  # GET /artworks
  # GET /artworks.json
  def index
  
    user_id = params[:user_id]
    all_work = Artwork.all_artwork_for_user(user_id)
    render json: all_work
    
  end

  # GET /artworks/1
  # GET /artworks/1.json
  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end



  # POST /artworks
  # POST /artworks.json
  def create
    artwork = Artwork.new(artwork_params)

      if artwork.save
        render json: artwork 
      else
       render json: artwork.errors.full_messages, status: :unprocessable_entity 
      end
  end

  # PATCH/PUT /artworks/1
  # PATCH/PUT /artworks/1.json
  def update
    artwork = Artwork.find(params[:id])
      if artwork.update(artwork_params)
        render json: artwork
      else
        render json: artwork.errors.full_messages, status: :unprocessable_entity 
      end
  end

  # DELETE /artworks/1
  # DELETE /artworks/1.json
  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  def like 
    # debugger
    like = Like.new(likable_type: :Artwork, likable_id: params[:id], user_id: params[:user_id])
    if like.save
    render json: like 
    else  
      render json: like.errors.full_messages, status: 418
    end
  end 

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_artwork
    #   @artwork = Artwork.find(params[:id])
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def artwork_params
      params.require(:artwork).permit(:title, :img_url, :artist_id)
    end
end
