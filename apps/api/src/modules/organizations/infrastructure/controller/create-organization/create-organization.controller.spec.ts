import { Test, TestingModule } from '@nestjs/testing';
import { CreateOrganizationController } from './create-organization.controller';

describe('CreateOrganizationController', () => {
  let controller: CreateOrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateOrganizationController],
    }).compile();

    controller = module.get<CreateOrganizationController>(CreateOrganizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
