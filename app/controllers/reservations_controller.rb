class ReservationsController < ApplicationController

  def index
    render json: Reservation.all
  end

  def create
    if @current_user
      user_id = @current_user.id
      new_reservation = Reservation.new(flight_id: params[:flight_id], row: params[:row], column: params[:column], user_id: user_id)
      if new_reservation.save
        render json: new_reservation
      else
        flash[:error] = "Sorry there was a problem with your seat reservation"
      end
    else
      flash[:error] = "Please sign in"
      redirect_to login_path
    end
  end

  private

  def clean_params
    params.require(:reservation).permit(:user_id, :flight_id, :row, :column)
  end


end
