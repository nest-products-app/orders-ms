import { PaginationDto } from 'src/common';
import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatus)
  @IsOptional()
  orderStatus: OrderStatus;
}
