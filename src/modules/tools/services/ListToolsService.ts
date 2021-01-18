import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class ListToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(): Promise<Tool[]> {
    const tools = this.toolsRepository.findAll();

    return tools;
  }
}

export default ListToolService;
