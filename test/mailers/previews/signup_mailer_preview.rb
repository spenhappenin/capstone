class SignupMailerPreview < ActionMailer::Preview
  def new_signup_preview
    SignupMailer.new_signup(User.first)
  end
end
