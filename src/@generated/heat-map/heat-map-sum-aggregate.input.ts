import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HeatMapSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    x?: true;

    @Field(() => Boolean, {nullable:true})
    y?: true;

    @Field(() => Boolean, {nullable:true})
    value?: true;
}
