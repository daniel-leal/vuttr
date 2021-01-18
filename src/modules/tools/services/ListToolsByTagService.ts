import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

interface IRequest {
  tag: string;
}

@injectable()
class ListToolsByTagService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ tag }: IRequest): Promise<Tool[]> {
    const tools = await this.toolsRepository.findByTag(tag);

    return tools;
  }
}

export default ListToolsByTagService;
