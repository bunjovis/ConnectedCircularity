// types and interfaces 

export interface AdvertData {
    type: string,
    data: {
        title: string,
        expires: string,
        contactIsPublic: boolean,
        contact: {
            name: string,
            title?: string,
            phone?: string,
            email: string
        },
        materials: [
            {
                classification: string,
                subClassification?: string
                industry: string,
                ewcCode?: string,
                isWaste: boolean,
                useTsv?: boolean,
                type?: string,
                permanent: boolean,
                description?: string,
                quantity: {
                    amount: number,
                    unitOfMeasure: string,
                },
                continuity: string,
                amountDescription?: string,
                locationIsPublic: boolean,
                location: {
                    name?: string,
                    address?: string,
                    postalCode?: string,
                    city: string,
                    cityId: string,
                    region: string,
                    regionId: string,
                    countryCode: string,
                    coordinates?: [
                        {
                            type: string,
                            lat: number,
                            lon: number
                        }
                    ]
                },
                service?: {
                    serviceId: [
                        string
                    ],
                    requirements: string,
                    duration: string
                }
            }
        ],
        attachments: [
            string?
        ],
        regions: [
            string?
        ]
        
    }
}

export interface Error {
    message: string,
    statusCode: string
}