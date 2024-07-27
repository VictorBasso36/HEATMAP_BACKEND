import { Field, ObjectType } from "@nestjs/graphql"
import { User } from "src/@generated/user/user.model"
import { PageInfo } from "src/common/pagination/page-info.model"

@ObjectType()
export class UsersPaginatedModel {
  @Field(() => PageInfo, {nullable: true})
  pageInfo: PageInfo;

  @Field(() => [User])
  nodes: [User];
}
