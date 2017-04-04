class FlightsController < ApplicationController

  def index
    render json: = Flight.all
  end

  def create
    flight = Flight.create(number: params[:number], date: params[:date], arrival: params[:arrival], departure: params[:departure], plane_id: params[:plane_id])
    
    render json: flight
  end

end
