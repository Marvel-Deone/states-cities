import { Injectable } from '@nestjs/common';
import * as statesData from '../../utils/states.json';

@Injectable()
export class LocationService {
    getAllStates() {
        return statesData.map(state => ({ state: state.state, code: state.code }));
    }

    getCitiesByState(stateName: string) {
        const state = statesData.find(s => s.state.toLowerCase() === stateName.toLowerCase());
        return state ? state.cities : [];
    }
}
