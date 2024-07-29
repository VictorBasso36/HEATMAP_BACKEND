import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HeatMapCountAggregate } from './heat-map-count-aggregate.output';
import { HeatMapAvgAggregate } from './heat-map-avg-aggregate.output';
import { HeatMapSumAggregate } from './heat-map-sum-aggregate.output';
import { HeatMapMinAggregate } from './heat-map-min-aggregate.output';
import { HeatMapMaxAggregate } from './heat-map-max-aggregate.output';

@ObjectType()
export class AggregateHeatMap {

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
