import { Test, TestingModule } from '@nestjs/testing';
import { ProvinceService } from './province.service';
import { HelperModule } from 'src/helper/helper.module';
import { PrismaService } from 'src/prisma.service';
import { ProvinceController } from './province.controller';

describe('ProvinceService', () => {
  let service: ProvinceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HelperModule],
      controllers: [ProvinceController],
      providers: [PrismaService, ProvinceService],
    }).compile();

    service = module.get<ProvinceService>(ProvinceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
