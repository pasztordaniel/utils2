import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from '@package/dto';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  getTest() {
    return this.testService.getTest();
  }

  @Post()
  dtoTest(@Body() dto: TestDto) {
    return this.dtoTest(dto);
  }
}
