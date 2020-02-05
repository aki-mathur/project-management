# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
u = User.new(email: 'admin1@gmail.com', name: 'Admin 1', created_by_id: 0, updated_by_id: 0, password: 'admin#123', password_confirmation: 'admin#123')
u.skip_confirmation!
u.save
u.add_role(:admin)

u = User.new(email: 'admin2@gmail.com', name: 'Admin 2', created_by_id: 0, updated_by_id: 0, password: 'admin#123', password_confirmation: 'admin#123')
u.skip_confirmation!
u.save
u.add_role(:admin)


dev1 = User.new(email: 'dev1@gmail.com', name: 'Developer 1', created_by_id: 0, updated_by_id: 0, password: 'dev#123', password_confirmation: 'dev#123')
dev1.skip_confirmation!
dev1.save
dev1.add_role(:developer)


dev2 = User.new(email: 'dev2@gmail.com', name: 'Developer 2', created_by_id: 0, updated_by_id: 0, password: 'dev#123', password_confirmation: 'dev#123')
dev2.skip_confirmation!
dev2.save
dev2.add_role(:developer)


dev3 = User.new(email: 'dev3@gmail.com', name: 'Developer 3', created_by_id: 0, updated_by_id: 0, password: 'dev#123', password_confirmation: 'dev#123')
dev3.skip_confirmation!
dev3.save
dev3.add_role(:developer)


project1 = Project.new(name: 'Cloud Data Backup', description: 'Cloud backup, or cloud computer backup, refers to backing up data to a remote, cloud-based server. As a form of cloud storage, cloud backup data is stored in and accessible from multiple distributed and connected resources that comprise a cloud', created_by_id: 1, updated_by_id: 1, developer_ids: [dev1.id,dev2.id,dev3.id])
project1.save!



project2 = Project.new(name: 'Remote Monitoring & Management', description: 'Remote monitoring and management (RMM), also known as network management or remote monitoring software, is a type of software designed to help managed IT service providers (MSPs) remotely and proactively monitor client endpoints, networks and computers. This is also now known as or referred to as remote IT management.', created_by_id: 1, updated_by_id: 1, developer_ids: [dev1.id,dev2.id,dev3.id])
project2.save!




