class ReservationsController < ApplicationControllers

  def index
    render json: Reservation.all
  end

  def create
    @reservation = Reservation.new(clean_params)
    if @reservation.save
      render json: @reservation
    else
      flash[:error] = "Fatal error."
    end
  end

  private

  def clean_params
    params.require(:reservation).permit(:user_id, :flight_id)
  end


end
