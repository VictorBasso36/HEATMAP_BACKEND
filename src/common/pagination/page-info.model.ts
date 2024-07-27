import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => Boolean)
  hasNextPage: boolean;

  @Field(() => Boolean)
  hasPreviousPage: boolean;

  @Field(() => Number)
  totalPages: number;

  @Field(() => Number)
  totalItems: number;

  @Field(() => Number, { nullable: true })
  skip?: number;
}
