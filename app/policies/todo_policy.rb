class TodoPolicy < ApplicationPolicy
  def update?
    user.has_role?(:admin) or record.developer_id = user.id
  end
end
