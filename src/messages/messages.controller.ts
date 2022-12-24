import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'get messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('my body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('my id', id);
    return 'get certain message';
  }
}
