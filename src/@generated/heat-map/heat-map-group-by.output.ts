import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HeatMapCountAggregate } from './heat-map-count-aggregate.output';
import { HeatMapAvgAggregate } from './heat-map-avg-aggregate.output';
import { HeatMapSumAggregate } from './heat-map-sum-aggregate.output';
import { HeatMapMinAggregate } from './heat-map-min-aggregate.output';
import { HeatMapMaxAggregate } from './heat-map-max-aggregate.output';

@ObjectType()
export class HeatMapGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
    x!: number;

    @Field(() => Float, {nullable:false})
    y!: number;

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => HeatMapCountAggregate, {nullable:true})
    _count?: HeatMapCountAggregate;

    @Field(() => HeatMapAvgAggregate, {nullable:true})
    _avg?: HeatMapAvgAggregate;

    @Field(() => HeatMapSumAggregate, {nullable:true})
    _sum?: HeatMapSumAggregate;

    @Field(() => HeatMapMinAggregate, {nullable:true})
    _min?: HeatMapMinAggregate;

    @Field(() => HeatMapMaxAggregate, {nullable:true})
    _max?: HeatMapMaxAggregate;
}
