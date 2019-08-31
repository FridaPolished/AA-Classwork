class AlbumsController < ApplicationController

    def new 
        #how do I get all the bands from here???
        @album = Album.new
        render :new
    end
    
    def show
        @album = Album.find(params[:id])
        render :show
    end

    # ATTENTION: NEW is nested under Bands
    def create 
        @album = Album.new(album_params)

        if @album.save
            redirect_to album_url(@album)
        else
            flash.now[:errors] = @album.errors.full_messages
            render :new
        end            
    end

    def edit
        @album = Album.find(params[:id])
        render :edit
    end

    def update
        @album = Album.find(params[:id])
        
        if @album.update_attributes(album_params)
            redirect_to album_url(@album)
        else
            flash.now[:errors] = @album.errors.full_messages
            render :edit
        end
    end

    def destroy
        @album = Album.find(params[:id])
        @band.destroy
        redirect_to band_url(@album.band_id)
    end

    private

    def album_params
        params.require(:album).permit(:band_id, :title, :year, :live, :studio)
    end

end
