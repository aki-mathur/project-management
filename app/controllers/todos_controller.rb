class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all
    render json: @todos
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    render json: @project
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params.merge!(created_by_id: current_user.id, updated_by_id: current_user.id))
    if @todo.save
       render json: @todo
     else
       render json: {errors: @todo.errors.full_messages}, status: 422
     end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    if @todo.update(todo_params.merge!(updated_by_id: current_user.id))
       render json: @todo
     else
       render json: {errors: @todo.errors.full_messages}, status: 422
     end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    render json: ["Deleted successfully."], status: :ok
  end

  def dashboard
    todos = Todo.dashboard
    render json: todos
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_params
      params.require(:todo).permit(:id, :name, :description, :status, :developer_id, :project_id)
    end
end
