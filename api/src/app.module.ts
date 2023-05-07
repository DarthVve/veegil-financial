import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './user/user.module';
import { User } from './user/user.entity';
import { TransactionModule } from './transaction/transaction.module';

const MONGO_URI = process.env.MONGO_URI;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: MONGO_URI,
      database: 'veegil',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        User
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { };
