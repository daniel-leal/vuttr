import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import Tool from '../entities/Tool';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async findAll(): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    return tools;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne(id);

    return tool;
  }

  public async findByTag(tag: string): Promise<Tool[]> {
    const tools = await this.ormRepository
      .createQueryBuilder('tools')
      .where('tools.tags like :tag', { tag: `%${tag}%` })
      .getMany();

    return tools;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne({
      where: { title },
    });

    return tool;
  }

  public async create(data: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create(data);

    this.ormRepository.save(tool);

    return tool;
  }

  public async delete(tool: Tool): Promise<void> {
    await this.ormRepository.remove(tool);
  }

  public async save(tool: Tool): Promise<Tool> {
    return this.ormRepository.save(tool);
  }
}

export default ToolsRepository;
