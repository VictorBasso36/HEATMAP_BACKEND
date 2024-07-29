import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HeatMapWhereUniqueInput } from './heat-map-where-unique.input';
import { Type } from 'class-transformer';
import { HeatMapCreateInput } from './heat-map-create.input';
import { HeatMapUpdateInput } from './heat-map-update.input';

@ArgsType()
export class UpsertOneHeatMapArgs {

    @Field(() => HeatMapWhereUniqueInput, {nullable:false})
    @Type(() => HeatMapWhereUniqueInput)
    where!: Prisma.AtLeast<HeatMapWhereUniqueInput, 'id'>;

    @Field(() => HeatMapCreateInput, {nullable:false})
    @Type(() => HeatMapCreateInput)
    create!: HeatMapCreateInput;

    @Field(() => HeatMapUpdateInput, {nullable:false})
    @Type(() => HeatMapUpdateInput)
    update!: HeatMapUpdateInput;
}
