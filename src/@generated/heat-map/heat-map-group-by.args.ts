import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapWhereInput } from './heat-map-where.input';
import { Type } from 'class-transformer';
import { HeatMapOrderByWithAggregationInput } from './heat-map-order-by-with-aggregation.input';
import { HeatMapScalarFieldEnum } from './heat-map-scalar-field.enum';
import { HeatMapScalarWhereWithAggregatesInput } from './heat-map-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HeatMapCountAggregateInput } from './heat-map-count-aggregate.input';
import { HeatMapAvgAggregateInput } from './heat-map-avg-aggregate.input';
import { HeatMapSumAggregateInput } from './heat-map-sum-aggregate.input';
import { HeatMapMinAggregateInput } from './heat-map-min-aggregate.input';
import { HeatMapMaxAggregateInput } from './heat-map-max-aggregate.input';

@ArgsType()
export class HeatMapGroupByArgs {

    @Field(() => HeatMapWhereInput, {nullable:true})
    @Type(() => HeatMapWhereInput)
    where?: HeatMapWhereInput;

    @Field(() => [HeatMapOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HeatMapOrderByWithAggregationInput>;

    @Field(() => [HeatMapScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HeatMapScalarFieldEnum>;

    @Field(() => HeatMapScalarWhereWithAggregatesInput, {nullable:true})
    having?: HeatMapScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HeatMapCountAggregateInput, {nullable:true})
    _count?: HeatMapCountAggregateInput;

    @Field(() => HeatMapAvgAggregateInput, {nullable:true})
    _avg?: HeatMapAvgAggregateInput;

    @Field(() => HeatMapSumAggregateInput, {nullable:true})
    _sum?: HeatMapSumAggregateInput;

    @Field(() => HeatMapMinAggregateInput, {nullable:true})
    _min?: HeatMapMinAggregateInput;

    @Field(() => HeatMapMaxAggregateInput, {nullable:true})
    _max?: HeatMapMaxAggregateInput;
}
