import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default function generateProduct (size) {
    const result = []
    for(let i = 0; i < size; i++) {
        result.push({
            id: uuidv4().toString(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.product(),
            category_description: faker.lorem.lines(),
            department: faker.commerce.department(),
            brand: faker.company.companyName(),
            model: faker.commerce.productAdjective(),
            price: faker.commerce.price(),
            quantity: faker.datatype.number({ min: 0, max: 1000, precision: 1}),
            image: faker.image.image(400, 200),
            technical_details: {
                height: (faker.datatype.float({ min: 0.1, max: 10})).toFixed(2),
                width: (faker.datatype.float({ min: 0.1, max: 10})).toFixed(2),
                depth: (faker.datatype.float({ min: 0.1, max: 10})).toFixed(2),
                adicional_data: faker.lorem.sentence()
            }
        })
    }
    return result
}
