import { registerEnumType } from '@nestjs/graphql';

export enum HeatMapOrderByRelevanceFieldEnum {
    domain = "domain",
    ip = "ip"
}


registerEnumType(HeatMapOrderByRelevanceFieldEnum, { name: 'HeatMapOrderByRelevanceFieldEnum', description: undefined })
