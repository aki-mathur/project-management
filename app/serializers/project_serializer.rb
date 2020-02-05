class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :can_create, :can_update

  has_many :developers

  def can_create
    current_user.has_role?(:admin)
  end

  def can_update
    current_user.has_role?(:admin)
  end
end
