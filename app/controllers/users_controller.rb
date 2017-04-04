class UsersControllers < ApplicationControllers

  def new
    @user = User.new
  end

  def create
    @user = User.create(clean_params)
    if @user.save
      session[:user_id] = @user.id # auto login for new sign up
      redirect_to user_path(@user.id) # redirect to their new profile page
    else
      render :new
    end
  end

  private

  def clean_params
    params.require(:user).permit(:email, :password, :name, :reservation_id)
  end

end
