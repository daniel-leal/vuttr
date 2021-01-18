// import AppError from '@shared/errors/AppError';

import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import ListToolsService from './ListToolsService';

let fakeToolsRepository: FakeToolsRepository;
let listToolsService: ListToolsService;

describe('ListTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    listToolsService = new ListToolsService(fakeToolsRepository);
  });

  it('should be able to list tools', async () => {
    const t1 = await fakeToolsRepository.create({
      user_id: 'user-id',
      title: 'json-server',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const t2 = await fakeToolsRepository.create({
      user_id: 'user-id',
      title: 'notion',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['notes'],
    });

    const tools = await listToolsService.execute({ tag: undefined });

    expect(tools).toEqual([t1, t2]);
  });

  it('should be able to list tools by tag', async () => {
    await fakeToolsRepository.create({
      user_id: 'user-id',
      title: 'json-server',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const t2 = await fakeToolsRepository.create({
      user_id: 'user-id',
      title: 'notion',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['notes'],
    });

    const tools = await listToolsService.execute({ tag: 'notes' });

    expect(tools).toEqual([t2]);
  });
});
