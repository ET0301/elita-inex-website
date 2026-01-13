const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const services = [
        { name: 'Consultation', durationMinutes: 30, priceNok: 500 },
        { name: 'Installation', durationMinutes: 60, priceNok: 1200 },
        { name: 'Premium Service', durationMinutes: 90, priceNok: 2000 },
    ]

    for (const service of services) {
        const existing = await prisma.service.findFirst({
            where: { name: service.name }
        })

        if (!existing) {
            await prisma.service.create({
                data: service
            })
            console.log(`Created service: ${service.name}`)
        }
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
