import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';
export declare class ComputerController {
    private readonly diskService;
    private readonly cpuService;
    constructor(diskService: DiskService, cpuService: CpuService);
    run(): (string | number)[];
}
