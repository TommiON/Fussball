import { randomizer } from "../../utils/randomizer";

export class Name {
    value: string;

    constructor() {
        const firstName = randomizer(this.possibleFirstNames);
        const lastName = randomizer(this.possibleLastNames);
        this.value = firstName + ' ' + lastName;
    }

    possibleFirstNames = ['Tommi', 'Hannu', 'Orlando', 'Peter', 'Pauli', 'Otso', 'Kauko', 'Kaspar', 'Juho', 'Jyrki',
        'Panu', 'Jarkko', 'Tuomas', 'Krister', 'Jaakko', 'Iivari', 'Lauri'
    ];
    possibleLastNames = ['Niittymies', 'Ström', 'Gyllenbögel', 'Virtanen', 'Lahtinen', 'Alm', 'Kafka', 'Heiskanen',
        'Paananen', 'Lifländer', 'Piilonen', 'de Fresnes', 'Tuunala', 'Alavirta', 'Yrjölä', 'Mäkinen', 'Laakso'
    ]
}

