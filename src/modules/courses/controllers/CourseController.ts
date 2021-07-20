import { Request, Response } from 'express';
import { CreateCourseService } from '../services/CreateCourseService';
import { UpdateCourseService } from '../services/UpdateCourseService';

class CourseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const create = new CreateCourseService();

    const course = await create.execute({ name, description });

    return response.status(200).json(course);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const update = new UpdateCourseService();

    const course = await update.execute({ id, name, description });

    return response.status(200).json(course);
  }
}

export { CourseController };