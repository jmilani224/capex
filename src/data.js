export const propertyDetails = {
    propertyName: "Property 1",
    rent: 2000,
    mortgage: 1200,
    purchaseDate: null,
    expenses: [
        {
            name: "Roof",
            replacementCost: 5000,
            lifespan: 25,
            age: 0,
            showReplacementOptions: true,
            unit: "sq. ft.",
            replacementOptions: [
                { 
                    name: "Asphalt",
                    units: 1000,
                    unitCost: 10,
                    note: "There are typically about 30 sq. ft. of asphalt tiles per box. To determine the number of boxes you need, divide the square feet by 30 and round up."
                },
                { 
                    name: "Slate",
                    units: 1000,
                    unitCost: 25,
                    note: "Slate is pricer but looks great on older homes."
                },
                { 
                    name: "Terra Cotta",
                    units: 1000,
                    unitCost: 35,
                    note: "Get this tile and pretend you live in Italy."
                }
            ]
        },
        {
            name: "Water Heater",
            replacementCost: 600,
            lifespan: 10,
            age: 0,
            showReplacementOptions: true,
            unit: "water heater",
            replacementOptions: [
                { 
                    name: "55 Gallon",
                    units: 1,
                    unitCost: 500,
                    note: "A little bit of hot water, as a treat."
                },
                { 
                    name: "75 Gallon",
                    units: 1,
                    unitCost: 1000,
                    note: "Hotter, wetter, water."
                },
                { 
                    name: "Tankless",
                    units: 1,
                    unitCost: 1000,
                    note: "Hotter water faster."
                }
            ]
        },
        {
            name: "Appliances (all)",
            replacementCost: 1000,
            lifespan: 10,
            age: 0,
        },
        {
            name: "Driveway or Parking Lot",
            replacementCost: 5000,
            lifespan: 50,
            age: 0,
        },
        {
            name: "HVAC",
            replacementCost: 3000,
            lifespan: 20,
            age: 0,
        },
        {
            name: "Flooring",
            replacementCost: 2000,
            lifespan: 6,
            age: 0,
        },
        {
            name: "Plumbing",
            replacementCost: 3000,
            lifespan: 30,
            age: 0,
        },
        {
            name: "Windows",
            replacementCost: 5000,
            lifespan: 50,
            age: 0,
        },
        {
            name: "Paint",
            replacementCost: 2500,
            lifespan: 5,
            age: 0,
        },
        {
            name: "Cabinets and Counters",
            replacementCost: 3000,
            lifespan: 20,
            age: 0,
        },
        {
            name: "Structure (framing and foundation)",
            replacementCost: 10000,
            lifespan: 50,
            age: 0,
        },
        {
            name: "Components (garage door, etc.)",
            replacementCost: 1000,
            lifespan: 10,
            age: 0,
        },
        {
            name: "Landscaping",
            replacementCost: 1000,
            lifespan: 10,
            age: 0,
        },
    ],
}