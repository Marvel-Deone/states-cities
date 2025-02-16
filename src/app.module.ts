import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationService } from './apis/location/location.service';
import { LocationController } from './apis/location/location.controller';
import { LocationModule } from './apis/location/location.module';

@Module({
  imports: [LocationModule],
  controllers: [AppController, LocationController],
  providers: [AppService, LocationService],
})
export class AppModule {}
