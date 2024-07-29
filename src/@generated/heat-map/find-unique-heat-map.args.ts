import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HeatMapWhereUniqueInput } from './heat-map-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHeatMapArgs {

    @Field(() => HeatMapWhereUniqueInput, {nullable:false})
    @Type(() => HeatMapWhereUniqueInput)
    where!: Prisma.AtLeast<HeatMapWhereUniqueInput, 'id'>;
}
