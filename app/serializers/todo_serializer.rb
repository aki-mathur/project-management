class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :description, :developer_id, :project_id

  belongs_to :developer
  belongs_to :project
end
