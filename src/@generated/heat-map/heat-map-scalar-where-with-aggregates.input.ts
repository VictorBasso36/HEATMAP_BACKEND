import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class HeatMapScalarWhereWithAggregatesInput {

    @Field(() => [HeatMapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HeatMapScalarWhereWithAggregatesInput>;

    @Field(() => [HeatMapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HeatMapScalarWhereWithAggregatesInput>;

    @Field(() => [HeatMapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HeatMapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    x?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    y?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    value?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    domain?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ip?: StringWithAggregatesFilter;
}
