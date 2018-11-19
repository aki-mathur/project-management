class ProjectPolicy < ApplicationPolicy
  def update?
    user.has_role?(:project_manager)
  end
end
