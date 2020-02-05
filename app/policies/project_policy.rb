class ProjectPolicy < ApplicationPolicy
  def update?
    user.has_role?(:admin)
  end
end
