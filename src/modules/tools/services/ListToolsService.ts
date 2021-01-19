import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
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

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ tag }: IRequest): Promise<Tool[]> {
    let tools = await this.cacheProvider.recover<Tool[]>(`tools-list:${tag}`);

    if (!tools) {
      tools = tag
        ? await this.toolsRepository.findByTag(tag)
        : await this.toolsRepository.findAll();

      await this.cacheProvider.save(`tools-list:${tag}`, tools);
    }

    return tools;
  }
}

export default ListToolService;
