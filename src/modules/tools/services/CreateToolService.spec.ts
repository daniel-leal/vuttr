import AppError from '@shared/errors/AppError';

import FakeToolsRepository from '../repositories/fakes/FakeToolRepository';
import CreateToolService from './CreateToolService';

let fakeToolsRepository: FakeToolsRepository;
let createToolService: CreateToolService;

describe('CreateTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    createToolService = new CreateToolService(fakeToolsRepository);
  });

  it('should be able to create a new tool', async () => {
    const tool = await createToolService.execute({
      user_id: 'user-id',
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    expect(tool).toHaveProperty('id');
  });

  it('should not be able to create existing tool (same title)', async () => {
    await createToolService.execute({
      user_id: 'user-id',
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    await expect(
      createToolService.execute({
        user_id: 'user-id',
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
