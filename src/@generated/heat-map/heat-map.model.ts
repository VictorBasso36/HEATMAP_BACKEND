import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HeatMap {

    @Field(() => ID, {nullable:false})
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
}
