import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tool';

interface IRequest {
  id: string;
}

@injectable()
class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Tool | undefined> {
    const checkToolExist = await this.toolsRepository.findById(id);

    if (checkToolExist) await this.toolsRepository.delete(checkToolExist);
    else throw new AppError('Tool not found');

    return checkToolExist;
  }
}

export default DeleteToolService;
