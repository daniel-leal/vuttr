import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateToolService from '@modules/tools/services/CreateToolService';
import ListToolsService from '@modules/tools/services/ListToolsService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { title, description, link, tags } = request.body;

    const createTool = container.resolve(CreateToolService);

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
      user_id,
    });

    return response.json(classToClass(tool));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTools = container.resolve(ListToolsService);

    const tools = await listTools.execute();

    return response.json(tools);
  }
}
