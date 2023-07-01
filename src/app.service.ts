import { Injectable, Logger } from '@nestjs/common';
import { Cron,CronExpression  } from '@nestjs/schedule';
@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.debug('Called when the current second is 45');
    return 'Hello World!';
  }


  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.logger.debug('Called when the current second is 5');
  }
}
