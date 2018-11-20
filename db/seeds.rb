# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.new(name: 'Joe', email: 'admin@gmail.com', password: 'admin#123', password_confirmation: 'admin#123', created_by_id: 0, updated_by_id: 0)
u.save!
u.add_role(:project_manager)


u = User.new(name: 'Sammy', email: 'dev1@gmail.com', password: 'admin#123', password_confirmation: 'admin#123', created_by_id: 0, updated_by_id: 0)
u.save!
u.add_role(:developer)


u = User.new(name: 'Harry', email: 'dev2@gmail.com', password: 'admin#123', password_confirmation: 'admin#123', created_by_id: 0, updated_by_id: 0)
u.save!
u.add_role(:developer)


u = User.new(name: 'John', email: 'dev3@gmail.com', password: 'admin#123', password_confirmation: 'admin#123', created_by_id: 0, updated_by_id: 0)
u.save!
u.add_role(:developer)

p = Project.new(name: 'Cloud Platform Management', description: '', developer_ids: [2,3], created_by_id: 1, updated_by_id: 1)
p.save!


p = Project.new(name: 'Hotel Management', description: '', developer_ids: [2,3], created_by_id: 1, updated_by_id: 1)
p.save!

t = Todo.new(name: 'Document and Analysis', project_id: 1, developer_id: 2, status: 0, created_by_id: 1, updated_by_id: 1)
t.save

t = Todo.new(name: 'Database migrations', project_id: 1, developer_id: 2, status: 0, created_by_id: 1, updated_by_id: 1)
t.save


t = Todo.new(name: 'UI Design', project_id: 1, developer_id: 4, status: 0, created_by_id: 1, updated_by_id: 1)
t.save
