var annotations = [

    // Metadata annotation
    {
        id: "string",
        origin: {
            type: ingest | linking | manual,
            confidence: int | null,
        },
        body: {
            id: "string",
            type: MetadataBody,
            relation: "rdfs:..." | "own_relation",
            value: "string" | list,
        },
        target: {
            type: ResourceTarget,
            source: "string",
        }
    },

    //Resource annotation
    {
        id: "string",
        origin: {
            type: manual | automatic | linking,
            confidence: int | null,
            replaces: "string" | null,
        },
        body: {
            id: "string",
            type: ResourceBody | PartBody,
            relation: "rdfs:..." | "own_relation",
            value: "string",
        },
        target: {
            source: "string",
            type: ResourceTarget | FragmentTarget,
            selector: {
                type: TextPositionSelector | TemporalFragmentSelector,
                start: int | "string",
                end: int | "string"
            },
        }
    }
]