import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get()
  async getAllProgress() {
    return this.progressService.getAllProgress();
  }

  @Get(':userId')
  async getUserProgress(@Param('userId') userId: string) {
    return this.progressService.getUserProgress(userId);
  }

  @Put(':userId/:courseId')
  async updateProgress(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
    @Body() data: any
  ) {
    return this.progressService.updateProgress(userId, courseId, data);
  }

  @Get(':userId/:courseId/completion')
  async getCompletion(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string
  ) {
    return this.progressService.calculateCompletion(userId, courseId);
  }
}
