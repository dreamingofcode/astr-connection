class Api::V1::ZodiacMatchesController < ApplicationController
    def index 
        @zodiac_matches= ZodiacMatch.all 
        render json: @zodiac_matches
    end

    def show
        match= ZodiacMatch.find_by(match_id: params[:id])
        render json: match
    end

    def create
       
    end

end
