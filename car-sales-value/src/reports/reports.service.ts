import { Injectable } from '@nestjs/common';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>){}

  create(reportDto: CreateReportDto, user: User){
    const report = this.repo.create(reportDto);
    report.user = <User>{'id':1, 'email':'test@one.com'};  //Added static, can be dynamic when we set the user session

    return this.repo.save(report);
  }
}
