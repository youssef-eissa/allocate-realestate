export type apiData = {
    agency: {
        active: boolean,
        commercialNumber: number | null,
        createdAt: string,
        externalID: string,
        id: number,
        licenses: {
            authority: string,
            number:string
        }[]
        logo: {
            url: string,
            id:number
        }
        name: string,
        name_l1: string,
        name_l2: string,
        name_l3: string,
        objectID: number,
        performanceCohort: string,
        product: string,
        productScore: number,
        roles: any[],
        shortNumber: number | null,
        slug: string,
        slug_l1: string,
        slug_l2: string,
        slug_l3: string,
        tier: number,
        tr:number
    }
    amenities: string[]
    amenities_l1:string[]
    amenities_l2:string[]
    amenities_l3: string[]
    area: number
    baths: number
    category: {
        externalID: string
        id: number
        level: number
        name: string
        nameSingular: string
        nameSingular_l1:string
        nameSingular_l2:string
        nameSingular_l3: string
        name_l1:string
        name_l2:string
        name_l3: string
        slug: string
        slug_l1:string
        slug_l2:string
        slug_l3:string
    }[]
    cityLevelScore: number
    completionStatus: string
    contactName: string
    coverPhoto: {
        externalID:string
        id: number
        main: boolean
        nimaScore: number
        orderIndex: number
        title:string | null
        url: string
    }
    createdAt: number
    externalID: string
    geography: {
        lat: number
        lng:number
    }[]
    hasMatchingFloorPlans: boolean
    hash: string
    hidePrice: boolean
    id: number
    indyScore: number
    indyScore_l1: number
    indyScore_l2: number
    indyScore_l3: number
    isVerified: boolean
    keywords: string[]
    location: {
        externalID: string
        id: number
        level: number
        name: string
        name_l1:string
        name_l2:string
        name_l3: string
        slug: string
        slug_l1:string
        slug_l2:string
        slug_l3:string
    }[]
    locationPurposeTier: number
    objectID: string
    ownerAgent: {
        externalID: string
        isTruBroker: boolean
        name: string
        name_l1:string
        name_l2:string
        name_l3: string
        user_image: string
        user_image_id: number
    }
    ownerID: number
    panoramaCount: number
    permitNumber: string
    phoneNumber: {
        mobile: string
        mobileNumbers: string[]
        proxyMobile: string
        whatsapp:string
    }
    photoCount: number
    photoIDs: number[]
    plotArea: any
    price: number
    product: string
    productLabel: string
    productScore: number
    projectNumber: any
    purpose: string
    randBoostScore: number
    randBoostScore_l1: number
    randBoostScore_l2: number
    randBoostScore_l3: number
    reactivatedAt: number
    referenceNumber: string
    rentFrequency: any
    rooms: number
    score: number
    score_l1: number
    score_l2: number
    score_l3: number
    slug: string
    slug_l1:string
    slug_l2:string
    slug_l3: string
    sourceID: number
    state: string
    title: string
    title_l1:string
    title_l2:string
    title_l3: string
    type: string
    updatedAt: number
    userExternalID: string
    verification: {
        eligible: boolean
        status: string
        trucheckedAt: number
        updatedAt: number
        verifiedAt: number
    }
    verifiedScore: number
    videoCount: number
    _geoloc: {
        lat: number
        lng: number
    }
    _highlightResults: any


}

