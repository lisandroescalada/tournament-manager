import { Test, TestingModule } from '@nestjs/testing';
import { GetOrganizationsController } from './get-organizations.controller';

describe('GetOrganizationsController', () => {
  let controller: GetOrganizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOrganizationsController],
    }).compile();

    controller = module.get<GetOrganizationsController>(GetOrganizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
