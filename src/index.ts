import prisma from "../utils/prisma.js";

// CREATE
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

// READ
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

// UPDATE
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

//DELETE
async function supprimerLivre (id: number) {
    return prisma.livre.delete({
        where: {id},
    });
}

async function supprimerAnciens(avantAnnee: number) {
    return prisma.livre.deleteMany({
        where: {annee: {lt: avantAnnee}}, // lt -> lower than ?
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

    //console.log(await marquerIndisponible(1));
    //console.log(await corrigerAnnee(2,2024));

    //console.log(await supprimerLivre(4));
    //console.log(await supprimerAnciens(1940));

    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});