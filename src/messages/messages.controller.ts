import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'get messages';
  }

  @Post()
  createMessage() {
    return 'create message';
  }

  @Get('/:id')
  getMessage() {
    return 'get certain message';
  }
}
