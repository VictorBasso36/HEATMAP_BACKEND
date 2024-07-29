import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class HeatMapCreateInput {

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
