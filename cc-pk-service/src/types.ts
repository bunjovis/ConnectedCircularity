// Typescript interfaces & type definitions

export interface Survey {
    id: string,
    status: string,
    type: string,
    startDate: Date,
    endDate: Date,
    metadata: {
      creatorId: string,
      createdAt: Date,
      lastModifierId: string,
      modifiedAt: Date
    }
}

export interface Item {
    reusableId: string,
    componentName: string,
    surveyId: string,
    streetAddress: string
}

export interface Error {
    status: number;
    message: string;
    error: string;
}

export interface PKItem {
    id: string,
    componentName: string,
    reusableMaterialId: string,
    usability: string,
    amount: number,
    unit: string,
    description: string,
    images: string,
    amountAsWaste: number,
    metadata: {
        creatorId: string,
        createdAt: string,
        lastModifierId: string,
        modifiedAt: string
    }
}