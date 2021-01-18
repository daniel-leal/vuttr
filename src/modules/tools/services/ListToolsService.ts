import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

interface IRequest {
  tag: string | undefined;
}

@injectable()
class ListToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ tag }: IRequest): Promise<Tool[]> {
    let tools: Tool[] = [];

    if (tag) tools = await this.toolsRepository.findByTag(tag);
    else tools = await this.toolsRepository.findAll();

    return tools;
  }
}

export default ListToolService;
