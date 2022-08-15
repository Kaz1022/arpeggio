class Event < ApplicationRecord
  include OrderableByTimestamp
  
  belongs_to :user
  has_one_attached :event_image
  has_many :event_instruments
  has_many :instruments, through: :event_instruments
  has_many :attendees, through: :event_instruments
  has_many :user_favourites, dependent: :destroy

  def event_image_data
    event_image.attached? ? Rails.application.routes.url_helpers.polymorphic_url(event_image, { host: 'http://localhost:3000'}) : nil
  end
end
