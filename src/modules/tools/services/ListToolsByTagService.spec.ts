// import AppError from '@shared/errors/AppError';

import FakeToolsRepository from '../repositories/fakes/FakeToolRepository';
import ListToolsByTagService from './ListToolsByTagService';

let fakeToolsRepository: FakeToolsRepository;
let listToolsByTagService: ListToolsByTagService;

describe('ListTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    listToolsByTagService = new ListToolsByTagService(fakeToolsRepository);
  });

  it('should be able to list tools by tag', async () => {
    const t1 = await fakeToolsRepository.create({
      user_id: 'user-id',
      title: 'json-server',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const tools = await listToolsByTagService.execute({ tag: 'api' });

    expect(tools).toEqual([t1]);
  });

  it('should be empty with non existing tag', async () => {
    const t1 = await fakeToolsRepository.create({
      user_id: 'user-id',
      title: 'json-server',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const tools = await listToolsByTagService.execute({ tag: 'test' });

    expect(tools).toEqual([]);
  });
});
