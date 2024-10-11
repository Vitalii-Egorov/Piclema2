interface Pet {
    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: "available" | "pending" | "sold";
}

async function fetchPets() {
    const url = "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available";

    try {
        const response = await fetch(url);
        const pets: Pet[] = await response.json();

        console.log("Pets:", pets);
    } catch (error) {
        console.error("Error fetching pets:", error);
    }
}

fetchPets();