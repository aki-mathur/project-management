class UserPolicy < ApplicationPolicy
  def update?
    user.has_role?(:admin) or record.id = user.id
  end
end
