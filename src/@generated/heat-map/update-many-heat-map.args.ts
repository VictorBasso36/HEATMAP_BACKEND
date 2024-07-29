import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapUpdateManyMutationInput } from './heat-map-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HeatMapWhereInput } from './heat-map-where.input';

@ArgsType()
export class UpdateManyHeatMapArgs {

    @Field(() => HeatMapUpdateManyMutationInput, {nullable:false})
    @Type(() => HeatMapUpdateManyMutationInput)
    data!: HeatMapUpdateManyMutationInput;

    @Field(() => HeatMapWhereInput, {nullable:true})
    @Type(() => HeatMapWhereInput)
    where?: HeatMapWhereInput;
}
