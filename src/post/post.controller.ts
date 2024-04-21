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
  import { PostService } from './post.service';
  import { Post as PostModel } from '@prisma/client';
  
  @Controller('posts')
  export class PostController {
    constructor(private readonly postService: PostService) {}
  
    @Post()
    async createPost(@Body() postData: PostModel): Promise<PostModel> {
      return this.postService.createPost(postData);
    }
  
    @Get()
    async findAll(@Query() query: any): Promise<PostModel[]> {
      return this.postService.posts(query);
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<PostModel | null> {
      return this.postService.post(Number(id));
    }
  
    @Patch(':id')
    async updatePost(
      @Param('id') id: string,
      @Body() postData: PostModel,
    ): Promise<PostModel> {
      return this.postService.updatePost({
        where: { id: Number(id) },
        data: postData,
      });
    }
  
    @Delete(':id')
    async deletePost(@Param('id') id: string): Promise<PostModel> {
      return this.postService.deletePost({ id: Number(id) });
    }
  }
  