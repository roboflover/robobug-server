import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { PostModule } from './post/post.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { EventController } from './event/event.controller';
import { PostController } from './post/post.controller';
import { TicketController } from './ticket/ticket.controller';
import { UserController } from './user/user.controller';
import { EventService } from './event/event.service';
import { PostService } from './post/post.service';
import { TicketService } from './ticket/ticket.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ EventModule, PostModule, TicketModule, UserModule ],
  controllers: [ EventController, PostController, TicketController, UserController ],
  providers: [ EventService,  PostService, TicketService, UserService, PrismaService ],
})
export class AppModule {}
