import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapCreateInput } from './heat-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHeatMapArgs {

    @Field(() => HeatMapCreateInput, {nullable:false})
    @Type(() => HeatMapCreateInput)
    data!: HeatMapCreateInput;
}
