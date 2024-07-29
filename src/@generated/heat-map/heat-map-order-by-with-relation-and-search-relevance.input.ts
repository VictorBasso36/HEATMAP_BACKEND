import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HeatMapOrderByRelevanceInput } from './heat-map-order-by-relevance.input';

@InputType()
export class HeatMapOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => HeatMapOrderByRelevanceInput, {nullable:true})
    _relevance?: HeatMapOrderByRelevanceInput;
}
