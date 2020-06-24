module Api
    module V1
        class ReviewsController < ApplicationController
            def create
                review = Review.create(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            def destroy
                review = Review.find(params[:id])

                if review.destroy
                    head :no_content
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            private

            def review_params
                params.require(:reviews).permit(:title, :description, :score, :manga_id)
            end
        end
    end
end