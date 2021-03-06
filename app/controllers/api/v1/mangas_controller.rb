module Api
    module V1
        class MangasController < ApplicationController
            protect_from_forgery with: :null_session
            
            def index
                mangas = Manga.all
                render json: MangaSerializer.new(mangas, options).serialized_json
            end

            def show
                manga = Manga.find_by(slug: params[:slug])

                render json: MangaSerializer.new(manga, options).serialized_json                
            end

            def create
                manga = Manga.create(manga_params)

                if manga.save
                    render json: MangaSerializer.new(manga).serialized_json
                else
                    render json: { error: manga.errors.messages }, status: 422
                end
            end

            def update
                manga = Manga.find_by(slug: params[:slug])

                if manga.update(manga_params)
                    render json: MangaSerializer.new(manga, options).serialized_json
                else
                    render json: { error: manga.errors.messages }, status: 422
                end
            end

            def destroy
                manga = Manga.find_by(slug: params[:slug])

                if manga.destroy
                    head :no_content
                else
                    render json: { error: manga.errors.messages }, status: 422
                end
            end


            private

            def manga_params
                params.require(:manga).permit(:name, :image_url)
            end

            def options
                @options ||= { include: %i[reviews] }
            end
        end
    end
end