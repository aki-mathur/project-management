class Project < ApplicationRecord
  has_and_belongs_to_many :developers, class_name: "User"
end
