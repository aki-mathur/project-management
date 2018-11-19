class UserPolicy < ApplicationPolicy
  def update?
    user.has_role?(:project_manager) or record.id = user.id
  end
end
