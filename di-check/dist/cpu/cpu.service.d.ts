import { PowerService } from 'src/power/power.service';
export declare class CpuService {
    private readonly powerService;
    constructor(powerService: PowerService);
    compute(a: number, b: number): number;
}
