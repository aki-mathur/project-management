class TodoPolicy < ApplicationPolicy
  def update?
    user.has_role?(:project_manager) or record.developer_id = user.id
  end
end
