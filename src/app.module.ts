import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongo_config from './config/mongo_config';

@Module({
  imports: [MongooseModule.forRoot(mongo_config.mongo_url), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
