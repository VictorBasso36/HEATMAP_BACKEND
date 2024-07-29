import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HeatMapCreateManyInput } from './heat-map-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHeatMapArgs {

    @Field(() => [HeatMapCreateManyInput], {nullable:false})
    @Type(() => HeatMapCreateManyInput)
    data!: Array<HeatMapCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
