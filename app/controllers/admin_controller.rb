class AdminController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def app
  end

  def index_airplanes
    render json: Airplane.all
  end

  def create_airplanes
    airplane = Airplane.create(name: params[:name], row: params[:row], column: params[:column])
    render json: airplane
  end

  def index_flights
    render json: Flight.all
  end

  def create_flights
    flight = Flight.create(number: params[:number], date: params[:date], arrival: params[:arrival], departure: params[:departure], airplane_id: params[:airplane_id])

    render json: flight
  end

end
