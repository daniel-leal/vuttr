// import AppError from '@shared/errors/AppError';

import FakeToolsRepository from '../repositories/fakes/FakeToolRepository';
// import CreateToolService from './CreateToolService';

import Tool from '../infra/typeorm/entities/Tool';

const tools: Tool[] = [];
let fakeToolsRepository: FakeToolsRepository;
// let createToolService: CreateToolService;

describe('ListTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    // createToolService = new CreateToolService(fakeToolsRepository);
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
      title: 'json-server',
      link: '"link": "https://github.com/typicode/json-server',
      description: 'ake REST API based on a json schema',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    tools.push(t1, t2);

    expect(tools).toEqual([t1, t2]);
  });
});
