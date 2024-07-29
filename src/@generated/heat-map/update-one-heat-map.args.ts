import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapUpdateInput } from './heat-map-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HeatMapWhereUniqueInput } from './heat-map-where-unique.input';

@ArgsType()
export class UpdateOneHeatMapArgs {

    @Field(() => HeatMapUpdateInput, {nullable:false})
    @Type(() => HeatMapUpdateInput)
    data!: HeatMapUpdateInput;

    @Field(() => HeatMapWhereUniqueInput, {nullable:false})
    @Type(() => HeatMapWhereUniqueInput)
    where!: Prisma.AtLeast<HeatMapWhereUniqueInput, 'id'>;
}
