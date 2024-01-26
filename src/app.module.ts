import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { ProductModule } from './product/product.module';
import { PurchaseModule } from './purchase/purchase.module';
import { KickbackModule } from './kickback/kickback.module';
import { KickbackGeneratedModule } from './kickback-generated/kickback-generated.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
        driver: require("mysql"),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ProductModule,
    PurchaseModule,
    KickbackModule,
    KickbackGeneratedModule,
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
