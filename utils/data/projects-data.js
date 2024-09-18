import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';


export const projectsData = [
    {
        id: 1,
        name: 'Gpt4 Assistant for Chatbot',
        description: " ",
        tools: ['Nextjs', 'OpenAI API',],
        role: ' Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Fav places',
        description: ' A mobile app developed with expo react native ',
        tools: ['Expo', 'Google Maps'],
        role: 'React Native Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Expense tracker App',
        description: 'A mobile app developed with expo react native',
        tools: ['Expo'],
        role: 'React Native Developer',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Kadim Real Estate',
        description: "A real estate website that allows users to search for properties and contact the real estate agent.",
        tools: ['React', 'TailwindCSS '],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },