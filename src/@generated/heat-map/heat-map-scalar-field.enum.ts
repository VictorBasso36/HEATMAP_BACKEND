import { registerEnumType } from '@nestjs/graphql';

export enum HeatMapScalarFieldEnum {
    id = "id",
    x = "x",
    y = "y",
    value = "value",
    domain = "domain",
    ip = "ip"
}


registerEnumType(HeatMapScalarFieldEnum, { name: 'HeatMapScalarFieldEnum', description: undefined })
