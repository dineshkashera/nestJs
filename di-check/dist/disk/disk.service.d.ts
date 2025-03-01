import { PowerService } from 'src/power/power.service';
export declare class DiskService {
    private readonly powerService;
    constructor(powerService: PowerService);
    getData(): string;
}
