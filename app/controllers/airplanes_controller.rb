class AirplanesController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def index
    render json: Airplane.all
  end

  def create
    airplane = Airplane.create(name: params[:name], row: params[:row], column: params[:column])
    render json: airplane
  end
end
