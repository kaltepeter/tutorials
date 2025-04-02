class Shout < ApplicationRecord
  belongs_to :user
  belongs_to :content, polymorphic: true

  validates :user, presence: true

  delegate :username, to: :user

  searchable do
    text :content do
      case content
      when TextShout then content.body
      when PhotoShout then content.image_file_name
      end
    end
  end
end
