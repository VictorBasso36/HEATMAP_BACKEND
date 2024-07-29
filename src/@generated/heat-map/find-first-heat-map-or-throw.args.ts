import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapWhereInput } from './heat-map-where.input';
import { Type } from 'class-transformer';
import { HeatMapOrderByWithRelationAndSearchRelevanceInput } from './heat-map-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { HeatMapWhereUniqueInput } from './heat-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HeatMapScalarFieldEnum } from './heat-map-scalar-field.enum';

@ArgsType()
export class FindFirstHeatMapOrThrowArgs {

    @Field(() => HeatMapWhereInput, {nullable:true})
    @Type(() => HeatMapWhereInput)
    where?: HeatMapWhereInput;

    @Field(() => [HeatMapOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<HeatMapOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => HeatMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HeatMapWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HeatMapScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HeatMapScalarFieldEnum>;
}
