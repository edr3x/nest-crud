import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { HealthCheckController } from './healthcheck.controller';
import { ItemModule } from './items/items.module';

@Module({
    imports: [ItemModule, MongooseModule.forRoot(config.mongoURI)],
    controllers: [HealthCheckController],
    providers: [],
})
export class AppModule {}
