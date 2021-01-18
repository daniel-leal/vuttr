import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

interface IRequest {
  user_id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    title,
    link,
    description,
    tags,
    user_id,
  }: IRequest): Promise<Tool> {
    const checkToolExists = await this.toolsRepository.findByTitle(title);

    if (checkToolExists) throw new AppError('Tool already created');

    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
      user_id,
    });

    return tool;
  }
}

export default CreateToolService;
