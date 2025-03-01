import { Controller, Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';
@Controller('computer')
export class ComputerController {
  constructor(private readonly diskService:DiskService , private readonly cpuService:CpuService){}

  @Get()
  run(){
    return [
      this.cpuService.compute(10,10),
      this.diskService.getData()
    ]
  }
}
