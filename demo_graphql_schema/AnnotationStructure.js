var annotations = [

    // Metadata annotation
    {
        id: url,
        origin: {
            type: ingest | linking | manual,
            creator: string
        },
        replaces: url,
        replacedBy: url,
        created: date,
        body: {
            id: "string",
            type: MetadataBody,
            confidence: int | null,
            relation: "rdfs:..." | "own_relation",
            value: string | float | boolean | date | array,
        },
        target: {
            type: ResourceTarget,
            source: string,
        }
    },

    //Resource annotation
    {
        id: url,
        origin: {
            type: manual | automatic | linking,
            creator: string
        },
        confidence: float,
        replaces: url,
        replacedBy: url,
        created: date,
        body: {
            id: "string",
            type: ResourceBody | PartBody,
            relation: "rdfs:..." | "own_relation",
            resource: "string",
        },
        target: {
            source: string,
            type: ResourceTarget | FragmentTarget,
            selector: {
                type: TextPositionSelector | TemporalFragmentSelector | etc,
                start: int | string,
                end: int | string
            },
        }
    }
]