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
  import { TicketService } from './ticket.service';
  import { Ticket as TicketModel, Prisma } from '@prisma/client';
  
  @Controller('tickets')
  export class TicketController {
    constructor(private readonly ticketService: TicketService) {}
  
    @Post()
    async createTicket(
      @Body() ticketData: Prisma.TicketCreateInput,
    ): Promise<TicketModel> {
      return this.ticketService.createTicket(ticketData);
    }
  
    @Get()
    async findAll(@Query() query: any): Promise<TicketModel[]> {
      return this.ticketService.tickets(query);
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<TicketModel | null> {
      return this.ticketService.ticket(Number(id));
    }
  
    @Patch(':id')
    async updateTicket(
      @Param('id') id: string,
      @Body() ticketData: TicketModel,
    ): Promise<TicketModel> {
      return this.ticketService.updateTicket({
        where: { id: Number(id) },
        data: ticketData,
      });
    }
  
    @Delete(':id')
    async deleteTicket(@Param('id') id: string): Promise<TicketModel> {
      return this.ticketService.deleteTicket({ id: Number(id) });
    }
  }
  