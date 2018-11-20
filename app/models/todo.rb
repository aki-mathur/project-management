class Todo < ApplicationRecord
  belongs_to :project
  belongs_to :developer, class_name: "User"
  enum status: [ :open, :done, :in_progress]
  validates :name, :description, presence: true


  def self.developer_wise_dashboard
    developer_ids = Todo.all.order(:created_at).pluck(:developer_id).uniq
    developers = []

    developer_ids.each do |developer_id|
      todos = Todo.includes(:developer).where(developer_id: developer_id).order(:created_at)
      developer_status_hash = Hash.new
      developer_status_hash[:name] = todos.first.developer.name
      developer_tasks = []
      tasks = todos.group_by {|t| t.status}

      open_task_hash = Hash.new
      open_task_hash[:status] = "open"
      open_task_hash[:tasks] = tasks["open"]
      developer_tasks.push(open_task_hash)

      in_progress_task_hash = Hash.new
      in_progress_task_hash[:status] = "in progress"
      in_progress_task_hash[:tasks] = tasks["in_progress"]
      developer_tasks.push(in_progress_task_hash)

      done_task_hash = Hash.new
      done_task_hash[:status] = "done"
      done_task_hash[:tasks] = tasks["done"]
      developer_tasks.push(done_task_hash)

      developer_status_hash[:status] = developer_tasks

      developers.push(developer_status_hash)
    end
    developers
  end


  def self.project_wise_dashboard
    project_ids = Todo.all.order(:created_at).pluck(:project_id).uniq
    projects = []

    project_ids.each do |project_id|
      todos = Todo.includes(:project).where(project_id: project_id).order(:created_at)
      project_status_hash = Hash.new
      project_status_hash[:name] = todos.first.project.name
      project_tasks = []
      tasks = todos.group_by {|t| t.status}

      open_task_hash = Hash.new
      open_task_hash[:status] = "open"
      open_task_hash[:tasks] = tasks["open"]
      project_tasks.push(open_task_hash)

      in_progress_task_hash = Hash.new
      in_progress_task_hash[:status] = "in progress"
      in_progress_task_hash[:tasks] = tasks["in_progress"]
      project_tasks.push(in_progress_task_hash)

      done_task_hash = Hash.new
      done_task_hash[:status] = "done"
      done_task_hash[:tasks] = tasks["done"]
      project_tasks.push(done_task_hash)

      project_status_hash[:status] = project_tasks

      projects.push(project_status_hash)
    end
    projects
  end


  def self.project_wise_charts
    project_ids = Todo.includes(:project).all.map {|t| [t.project_id,t.project.name]}.uniq
    projects = []
    project_ids.each do |project_id|
      project_tasks_hash = Hash.new
      todos = Todo.select('COUNT(id) as count,status').where(project_id: project_id[0]).group(:status)
      status_hash = Hash.new
      todos.each do |t|
        status_hash[t.status] = t.count
      end
      project_tasks_hash[:status] = status_hash
      project_tasks_hash[:name] = project_id[1]
      projects.push(project_tasks_hash)
    end
    projects
  end




end
