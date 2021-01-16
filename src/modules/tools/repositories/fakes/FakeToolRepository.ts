import { v4 as uuid_v4 } from 'uuid';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '../../infra/typeorm/entities/Tool';

class FakeToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async findById(id: string): Promise<Tool | undefined> {
    const findTool = this.tools.find(tool => tool.id === id);

    return findTool;
  }

  public async findByTag(tag: string): Promise<Tool | undefined> {
    const findTool = this.tools.find(tool =>
      tool.tags.filter(tg => tg === tag),
    );

    return findTool;
  }

  public async create(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid_v4() }, toolData);

    this.tools.push(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    const findIndex = this.tools.findIndex(findTool => findTool.id === tool.id);

    this.tools[findIndex] = tool;

    return tool;
  }
}

export default FakeToolsRepository;
