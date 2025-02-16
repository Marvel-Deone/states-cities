import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Get('states')
    getAllStates() {
        return this.locationService.getAllStates();
    }

    @Get('cities/:state')
    getCitiesByState(@Param('state') state: string) {
        return this.locationService.getCitiesByState(state);
    }
}
