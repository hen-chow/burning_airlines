class AdminController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def index_airplanes
    @airplanes = Airplane.all
  end

  def create_airplanes
    @airplane = Airplane.new(clean_params)
    if @airplane.save
      redirect_to index_airplanes_path
      flash[:success] = "An airplane is created."
    else
      redirect_to index_airplanes_path
      flash[:error] = "Fatal error."
    end
  end

  def clean_params
    params.permit(:name, :row, :column)
  end

  # def index_flights
  #   render json: Flight.all
  # end
  #
  # def create_flights
  #   flight = Flight.create(number: params[:number], date: params[:date], arrival: params[:arrival], departure: params[:departure], airplane_id: params[:airplane_id])
  #
  #   render json: flight
  # end

end
