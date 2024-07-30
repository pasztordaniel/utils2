import { Injectable } from '@nestjs/common';
import { TestDto } from '@package/dto';

@Injectable()
export class TestService {
  getTest() {
    return { test: 'test api works' };
  }

  dtoTest(dto: TestDto) {
    return dto;
  }
}
