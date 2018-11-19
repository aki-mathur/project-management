class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role
  has_many :projects

  def role
    object.roles[0].name
  end
end
