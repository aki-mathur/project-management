class Todo < ApplicationRecord
  belongs_to :project
  belongs_to :developer, class_name: "User"
  enum status: [ :open, :done, :in_progress]

  def self.dashboard
    todos = Todo.includes(:developer).group(:status)
    developer_status_hash = Hash.new
    todos.each do |todo|
      task_status_hash = Hash.new
      case todo.status
        when 'open'
          if task_status_hash.key?("open")
              task_status_hash.value.push(todo)
          else
              tasks = []
              task_status_hash["open"] = tasks.push(todo)
          end
        when 'in_progress'
          if task_status_hash.key?("in_progress")
              task_status_hash.value.push(todo)
          else
              tasks = []
              task_status_hash["in_progress"] = tasks.push(todo)
          end
        when "done"
          if task_status_hash.key?("done")
              task_status_hash.value.push(todo)
          else
              tasks = []
              task_status_hash["done"] = tasks.push(todo)
          end
        end
        developer_status_hash[todo.developer.name] = task_status_hash
      end
      developer_status_hash
  end

end
