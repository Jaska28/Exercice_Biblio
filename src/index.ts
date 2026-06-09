import prisma from "../utils/prisma.js";

async function seed() {
    const livres = await prisma.livre.createMany({
        data: [
        {
            titre: "Le Petit Prince",
            auteur: "Antoine de Saint-Exupéry",
            annee: 1943,
            disponible: true,
        },
        {
            titre: "1984",
            auteur: "George Orwell",
            annee: 1949,
            disponible: true,
        },
        {
            titre: "Le Comte de Monte-Cristo",
            auteur: "Alexandre Dumas",
            annee: 1844,
            disponible: true,
        },
        {
            titre: "L'Étranger",
            auteur: "Albert Camus",
            annee: 1942,
            disponible: false,
        },
        {
            titre: "Les Misérables",
            auteur: "Victor Hugo",
            annee: 1862,
            disponible: true,
        },
    ]
    });
}

async function getTousLesLivres() {
    return prisma.livre.findMany();
}

async function getLivresDisponibles() {
    return prisma.livre.findMany({
        where: {disponible: true}
    })
}

async function getLivreParId(id: number) {
    return prisma.livre.findUnique({
        where: {id},    
    });
}

async function chercherParAuteur(motCle: string) {
    return prisma.livre.findMany({
        where: {
            auteur: {contains:motCle, mode:"insensitive"},
        },
    });
}

async function marquerIndisponible(id : number) {
    return prisma.livre.update({
        where: {id},
        data: {disponible: false},
    });
}

async function corrigerAnnee(id: number, nouvelleAnnee: number) {
    return prisma.livre.update({
        where: {id},
        data: {annee:nouvelleAnnee},
    });
}

async function main() {
    //await seed();
    //console.log("\n--- Tous les livres ---");
    //console.log(await getTousLesLivres());

    //console.log("\n--- Livres disponibles ---");
    //console.log(await getLivresDisponibles());

    //console.log("\n--- Livre #1 ---");
    //console.log(await getLivreParId(1));

    //console.log("\n--- Recherche: saint ---");
    //console.log(await chercherParAuteur("saint"))

    console.log(await marquerIndisponible(1));
    console.log(await corrigerAnnee(2,2024));

    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});