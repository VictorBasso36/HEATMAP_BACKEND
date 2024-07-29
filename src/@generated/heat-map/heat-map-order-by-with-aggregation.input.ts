import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HeatMapCountOrderByAggregateInput } from './heat-map-count-order-by-aggregate.input';
import { HeatMapAvgOrderByAggregateInput } from './heat-map-avg-order-by-aggregate.input';
import { HeatMapMaxOrderByAggregateInput } from './heat-map-max-order-by-aggregate.input';
import { HeatMapMinOrderByAggregateInput } from './heat-map-min-order-by-aggregate.input';
import { HeatMapSumOrderByAggregateInput } from './heat-map-sum-order-by-aggregate.input';

@InputType()
export class HeatMapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    x?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    y?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domain?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => HeatMapCountOrderByAggregateInput, {nullable:true})
    _count?: HeatMapCountOrderByAggregateInput;

    @Field(() => HeatMapAvgOrderByAggregateInput, {nullable:true})
    _avg?: HeatMapAvgOrderByAggregateInput;

    @Field(() => HeatMapMaxOrderByAggregateInput, {nullable:true})
    _max?: HeatMapMaxOrderByAggregateInput;

    @Field(() => HeatMapMinOrderByAggregateInput, {nullable:true})
    _min?: HeatMapMinOrderByAggregateInput;

    @Field(() => HeatMapSumOrderByAggregateInput, {nullable:true})
    _sum?: HeatMapSumOrderByAggregateInput;
}
