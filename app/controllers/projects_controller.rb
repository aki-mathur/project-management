class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy, :developers]

  # GET /projects
  # GET /projects.json
  def index
    if(current_user.has_role?(:developer))
      @projects = Project.joins(:developers).where("users.id= #{current_user.id}")
    else
      @projects = Project.all
    end
    render json: @projects
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    authorize @project
    render json: @project
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params.merge!(created_by_id: current_user.id, updated_by_id: current_user.id))
    authorize @project
    if @project.save
       render json: @project
     else
       render json: {errors: @project.errors.full_messages}, status: 422
     end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    authorize @project
    if @project.update(project_params.merge!(updated_by_id: current_user.id))
       render json: @project
     else
       render json: {errors: @project.errors.full_messages}, status: 422
     end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    authorize @project
    @project.destroy
    render json: ["Deleted successfully."], status: :ok
  end

  def developers
    render json: @project.developers
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.permit(:id, :name, :description, developer_ids: [])
    end
end
