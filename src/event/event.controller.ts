import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
  } from '@nestjs/common';
  import { EventService } from './event.service';
  import { Event as EventModel } from '@prisma/client';
  
  @Controller('events')
  export class EventController {
    constructor(private readonly eventService: EventService) {}
  
    @Post()
    async createEvent(@Body() eventData: EventModel): Promise<EventModel> {
      return this.eventService.createEvent(eventData);
    }
  
    @Get()
    async findAll(@Query() query: any): Promise<EventModel[]> {
      return this.eventService.events(query);
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<EventModel | null> {
      return this.eventService.event(Number(id));
    }
  
    @Patch(':id')
    async updateEvent(
      @Param('id') id: string,
      @Body() eventData: EventModel,
    ): Promise<EventModel> {
      return this.eventService.updateEvent({
        where: { id: Number(id) },
        data: eventData,
      });
    }
  
    @Delete(':id')
    async deleteEvent(@Param('id') id: string): Promise<EventModel> {
      return this.eventService.deleteEvent({ id: Number(id) });
    }
  }
  