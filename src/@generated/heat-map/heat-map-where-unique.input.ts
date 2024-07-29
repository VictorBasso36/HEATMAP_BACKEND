import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HeatMapWhereInput } from './heat-map-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class HeatMapWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [HeatMapWhereInput], {nullable:true})
    AND?: Array<HeatMapWhereInput>;

    @Field(() => [HeatMapWhereInput], {nullable:true})
    OR?: Array<HeatMapWhereInput>;

    @Field(() => [HeatMapWhereInput], {nullable:true})
    NOT?: Array<HeatMapWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    x?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    y?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    value?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    domain?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;
}
