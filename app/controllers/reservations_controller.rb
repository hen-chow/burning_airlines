class ReservationsController < ApplicationController

  def index
    render json: Reservation.all
  end

  def create
    if @current_user
      @reservation = Reservation.new(clean_params)
      if @reservation.save
        render json: @reservation
      else
        flash[:error] = "Fatal error."
      end
    else
      flash[:error] = "Please sign in"
      redirect_to login_path
    end
  end

  private

  def clean_params
    params.require(:reservation).permit(:user_id, :flight_id)
  end


end
