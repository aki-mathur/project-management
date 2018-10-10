class Todo < ApplicationRecord
  belongs_to :project
  belongs_to :developer, class_name: "User"
  enum status: [ :open, :done, :in_progress]
end
