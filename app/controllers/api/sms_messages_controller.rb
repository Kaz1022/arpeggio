require 'twilio-ruby'

class Api::SmsMessagesController < ApplicationController
  def create 

    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    twilio_number = ENV['TWILIO_NUMBER']
    
    client = Twilio::REST::Client.new account_sid, auth_token
   
    message = client.messages.create(
        from: twilio_number, 
        to: sms_message_params[:mobile_number],
        body: sms_message_params[:message]
        )
    
    # render_to_string message.inspect
  end

  private

  def sms_message_params
      params.require(:sms_message).permit(:mobile_number, :message)
  end

end
