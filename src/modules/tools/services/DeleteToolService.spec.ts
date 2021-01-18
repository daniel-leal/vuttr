// import AppError from '@shared/errors/AppError';

import AppError from '@shared/errors/AppError';

import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import ListToolsService from './ListToolsService';
import DeleteToolService from './DeleteToolService';

let fakeToolsRepository: FakeToolsRepository;
let deleteToolService: DeleteToolService;
let createToolService: CreateToolService;
let listToolsService: ListToolsService;

describe('DeleteTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    deleteToolService = new DeleteToolService(fakeToolsRepository);
    createToolService = new CreateToolService(fakeToolsRepository);
    listToolsService = new ListToolsService(fakeToolsRepository);
  });

  it('should be able to delete a tool', async () => {
    const t1 = await createToolService.execute({
      user_id: 'user-id',
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const t2 = await createToolService.execute({
      user_id: 'user-id',
      title: 'notion',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: [
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar',
      ],
    });

    await deleteToolService.execute({ id: t1.id });

    const tools = await listToolsService.execute({ tag: undefined });

    expect(tools).toEqual([t2]);
  });

  it('should not be able to delete a non existent tool', async () => {
    await createToolService.execute({
      user_id: 'user-id',
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    await expect(
      deleteToolService.execute({ id: 'id-invalido' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
