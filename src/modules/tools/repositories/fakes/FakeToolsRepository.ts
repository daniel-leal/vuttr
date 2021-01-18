import { v4 as uuid_v4 } from 'uuid';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '../IToolsRepository';

class FakeToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async findAll(): Promise<Tool[]> {
    return this.tools;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const findTool = this.tools.find(tool => tool.id === id);

    return findTool;
  }

  public async findByTag(tag: string): Promise<Tool[]> {
    const findTools = this.tools.filter(tool => tool.tags.includes(tag));

    return findTools;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    const findTool = this.tools.find(tool => tool.title === title);

    return findTool;
  }

  public async create(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid_v4() }, toolData);

    this.tools.push(tool);

    return tool;
  }

  public async delete(tool: Tool): Promise<void> {
    this.tools = this.tools.filter(t => t !== tool);
  }

  public async save(tool: Tool): Promise<Tool> {
    const findIndex = this.tools.findIndex(findTool => findTool.id === tool.id);

    this.tools[findIndex] = tool;

    return tool;
  }
}

export default FakeToolsRepository;
