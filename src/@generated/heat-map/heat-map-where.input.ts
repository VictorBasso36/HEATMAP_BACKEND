import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class HeatMapWhereInput {

    @Field(() => [HeatMapWhereInput], {nullable:true})
    AND?: Array<HeatMapWhereInput>;

    @Field(() => [HeatMapWhereInput], {nullable:true})
    OR?: Array<HeatMapWhereInput>;

    @Field(() => [HeatMapWhereInput], {nullable:true})
    NOT?: Array<HeatMapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
