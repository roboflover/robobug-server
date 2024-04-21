import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Ticket, Prisma } from '@prisma/client';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async ticket(id: number): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({
      where: { id },
      include: { event: true, user: true },
    });
  }

  async tickets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TicketWhereUniqueInput;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput;
  }): Promise<Ticket[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ticket.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { event: true, user: true },
    });
  }

  async createTicket(data: Prisma.TicketCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({
      data,
      include: { event: true, user: true },
    });
  }

  async updateTicket(params: {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.TicketUpdateInput;
  }): Promise<Ticket> {
    const { where, data } = params;
    return this.prisma.ticket.update({
      data,
      where,
      include: { event: true, user: true },
    });
  }

  async deleteTicket(where: Prisma.TicketWhereUniqueInput): Promise<Ticket> {
    return this.prisma.ticket.delete({
      where,
    });
  }
}
