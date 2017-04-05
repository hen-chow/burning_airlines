class AdminController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def index_airplanes
    @airplanes = Airplane.all
  end

  def create_airplanes
    @airplane = Airplane.new(clean_params_airplane)
    if @airplane.save
      redirect_to index_airplanes_path
      flash[:success] = "An airplane is created."
    else
      redirect_to index_airplanes_path
      flash[:error] = "Fatal error."
    end
  end

  def index_flights
    @flights = Flight.all
    @airplanes = Airplane.all
  end

  def create_flights
    @flight = Flight.new(clean_params_flight)
    if @flight.save
      redirect_to index_flights_path
      flash[:success] = "A flight is created."
    else
      redirect_to index_flights_path
      flash[:error] = "Fatal error."
    end
  end

  private

  def clean_params_airplane
    params.permit(:name, :row, :column)
  end

  def clean_params_flight
    params.permit(:number, :date, :arrival, :departure, :airplane_id)
  end

end
