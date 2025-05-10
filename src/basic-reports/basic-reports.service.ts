import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Basic reports services');
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected Prisma DB');
  }

  helloWorld() {
    return this.employees.findMany();
  }
}
