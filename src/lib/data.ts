export interface Vehicle {
    id: string;
    name: string;
    brand: string;
    category: "Motorcycle" | "Car";
    type: "Sport" | "Cruiser" | "Cafe Racer" | "Adventure" | "Sedan" | "SUV" | "Coupe" | "Truck";
    price: number;
    year: number;
    mileage: number;
    image: string;
    description: string;
    specs: {
        engine: string;
        power: string;
        weight: string;
        transmission?: string; // Added for cars
        seats?: number; // Added for cars
    };
}

const baseVehicles: Vehicle[] = [
    // Motorcycles
    {
        id: "1",
        name: "Bonneville T120",
        brand: "Triumph",
        category: "Motorcycle",
        type: "Cafe Racer",
        price: 12500,
        year: 2022,
        mileage: 1200,
        image: "https://placehold.co/600x400/png?text=Triumph+T120",
        description: "A timeless icon, beautifully evolved. The Bonneville T120 brings the original silhouette into the modern era.",
        specs: {
            engine: "1200cc Parallel Twin",
            power: "80 HP",
            weight: "236 kg",
        },
    },
    {
        id: "2",
        name: "Iron 883",
        brand: "Harley-Davidson",
        category: "Motorcycle",
        type: "Cruiser",
        price: 9800,
        year: 2021,
        mileage: 3500,
        image: "https://placehold.co/600x400/png?text=Iron+883",
        description: "Aggressive throwback styling. No-nonsense, raw, stripped-down custom style.",
        specs: {
            engine: "883cc V-Twin",
            power: "54 HP",
            weight: "256 kg",
        },
    },
    {
        id: "3",
        name: "YZF-R6",
        brand: "Yamaha",
        category: "Motorcycle",
        type: "Sport",
        price: 14200,
        year: 2023,
        mileage: 500,
        image: "https://placehold.co/600x400/png?text=Yamaha+R6",
        description: "Born on the track. The R6 is a legend in the supersport world, offering razor-sharp handling.",
        specs: {
            engine: "599cc Inline-4",
            power: "117 HP",
            weight: "190 kg",
        },
    },
    // Cars
    {
        id: "c1",
        name: "Mustang GT",
        brand: "Ford",
        category: "Car",
        type: "Coupe",
        price: 45000,
        year: 2023,
        mileage: 5000,
        image: "https://placehold.co/600x400/png?text=Mustang+GT",
        description: "American muscle at its finest. The Mustang GT delivers raw power and an iconic design.",
        specs: {
            engine: "5.0L V8",
            power: "450 HP",
            weight: "1700 kg",
            transmission: "Manual",
            seats: 4
        },
    },
    {
        id: "c2",
        name: "Model 3",
        brand: "Tesla",
        category: "Car",
        type: "Sedan",
        price: 42000,
        year: 2024,
        mileage: 1000,
        image: "https://placehold.co/600x400/png?text=Tesla+Model+3",
        description: "The future of driving. Electric performance, minimalist design, and advanced technology.",
        specs: {
            engine: "Electric Dual Motor",
            power: "450 HP",
            weight: "1800 kg",
            transmission: "Automatic",
            seats: 5
        },
    },
    {
        id: "c3",
        name: "911 Carrera",
        brand: "Porsche",
        category: "Car",
        type: "Coupe",
        price: 115000,
        year: 2022,
        mileage: 8000,
        image: "https://placehold.co/600x400/png?text=Porsche+911",
        description: "The quintessential sports car. Precision engineering and timeless design.",
        specs: {
            engine: "3.0L Twin-Turbo Flat-6",
            power: "379 HP",
            weight: "1500 kg",
            transmission: "PDK",
            seats: 4
        },
    },
    {
        id: "c4",
        name: "Wrangler Rubicon",
        brand: "Jeep",
        category: "Car",
        type: "SUV",
        price: 55000,
        year: 2023,
        mileage: 12000,
        image: "https://placehold.co/600x400/png?text=Jeep+Wrangler",
        description: "Go anywhere, do anything. The ultimate off-road vehicle for adventure seekers.",
        specs: {
            engine: "3.6L V6",
            power: "285 HP",
            weight: "2000 kg",
            transmission: "Automatic",
            seats: 5
        },
    }
];

// Generate items by repeating and modifying the base list
export const vehicles: Vehicle[] = Array.from({ length: 60 }, (_, i) => {
    const baseVehicle = baseVehicles[i % baseVehicles.length];
    const variation = Math.floor(i / baseVehicles.length);

    return {
        ...baseVehicle,
        id: `${baseVehicle.category === 'Car' ? 'c' : ''}${i + 1}`,
        name: `${baseVehicle.name} ${variation > 0 ? `Mk${variation + 1}` : ''}`,
        price: baseVehicle.price + (variation * 500) - (Math.random() * 200),
        year: baseVehicle.year - Math.floor(Math.random() * 3),
        mileage: baseVehicle.mileage + (variation * 1000) + Math.floor(Math.random() * 500),
    };
});
