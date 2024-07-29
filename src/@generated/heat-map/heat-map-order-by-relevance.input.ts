import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HeatMapOrderByRelevanceFieldEnum } from './heat-map-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HeatMapOrderByRelevanceInput {

    @Field(() => [HeatMapOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof HeatMapOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
