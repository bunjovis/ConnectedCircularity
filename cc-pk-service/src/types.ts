// Typescript interfaces & type definitions

// PK service's Item object
export interface Item {
    reusableId: string,
    componentName: string,
    surveyId: string,
    streetAddress: string
}

// Object that is used to display errors
export interface Error {
    status: number;
    message: string;
}

// PK API's item, object that has more information about items
export interface ItemInfo {
    id: string,
    componentName: string,
    reusableMaterialId: string,
    usability: string,
    amount?: number,
    unit?: string,
    description?: string,
    images?: string,
    amountAsWaste?: number,
    metadata: {
        creatorId: string,
        createdAt: string,
        lastModifierId: string,
        modifiedAt: string
    }
}

// TYPES USED TO TYPECHECK DATA, BUT AREN'T IN OPENAPI.YAML

// Object that is used to typecheck collected survey data
export interface Survey {
    id: string,
    status: string,
    type: string,
    startDate?: Date,
    endDate?: Date,
    metadata: {
      creatorId: string,
      createdAt: Date,
      lastModifierId: string,
      modifiedAt: Date
    }
}

// Object that is used to typecheck collected building data
export interface Building {
    id: string,
    surveyId: string,
    propertyId?: string,
    buildingId?: string,
    buildingTypeId?: string,
    constructionYear?: number,
    space?: number,
    volume?: number,
    floors?: string,
    basements?: number,
    foundation?: string,
    supportingStructure?: string,
    facadeMaterial?: string,
    roofType?: string,
    address: {
        streetAddress: string,
        city: string,
        postCode: string
    },
    otherStructures?: {
        name: string,
        description?: string
    },
    metadata: {
        creatorId: string,
        createdAt: string,
        lastModifierId:string,
        modifiedAt:string
    }
}