import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HeatMapAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    x?: number;

    @Field(() => Float, {nullable:true})
    y?: number;

    @Field(() => Float, {nullable:true})
    value?: number;
}
