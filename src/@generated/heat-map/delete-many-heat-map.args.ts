import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapWhereInput } from './heat-map-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHeatMapArgs {

    @Field(() => HeatMapWhereInput, {nullable:true})
    @Type(() => HeatMapWhereInput)
    where?: HeatMapWhereInput;
}
