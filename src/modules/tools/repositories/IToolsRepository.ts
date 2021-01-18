import ICreateToolDTO from '../dtos/ICreateToolDTO';
import Tool from '../infra/typeorm/entities/Tool';

export default interface IToolsRepository {
  findAll(): Promise<Tool[]>;

  findById(id: string): Promise<Tool | undefined>;

  findByTag(tag: string): Promise<Tool[]>;

  findByTitle(title: string): Promise<Tool | undefined>;

  create(data: ICreateToolDTO): Promise<Tool>;

  save(tool: Tool): Promise<Tool>;
}
