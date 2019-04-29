import ava from'../images/ava.jpg';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';

export const cardData = [
    {   
        id: 1,
        photo: ava,
        name: 'Наталья Полянская',
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        images: ['http://localhost:3000/images/1.jpg', 
                 'http://localhost:3000/images/2.jpg', 
                 'http://localhost:3000/images/3.jpg', 
                 'http://localhost:3000/images/3.jpg',
                 ],
        time: "год",
        commentCount: 9,
        likeCount: 9
    },
    {
        id: 2,
        photo: ava,
        name: 'Вета Покровская',
        text: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только ',
        images: ['http://localhost:3000/images/1.jpg', 
                 'http://localhost:3000/images/2.jpg', 
                 'http://localhost:3000/images/3.jpg', 
                 'http://localhost:3000/images/3.jpg',
                 'http://localhost:3000/images/1.jpg',
                 'http://localhost:3000/images/3.jpg', 
                 'http://localhost:3000/images/3.jpg',],
        time: "5 мес",
        commentCount: 3,
        likeCount: 6
    },
    {
        id: 3,
        photo: ava,
        name: 'Наталья Полянская',
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        images: ['http://localhost:3000/images/1.jpg', 
                 'http://localhost:3000/images/2.jpg', 
                 'http://localhost:3000/images/3.jpg', 
                 'http://localhost:3000/images/3.jpg',
                 'http://localhost:3000/images/1.jpg'],
        time: "год",
        commentCount: 9,
        likeCount: 9
    },
    {
        id: 4,
        photo: ava,
        name: 'Вета Покровская',
        text: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только ',
        images: ['http://localhost:3000/images/1.jpg', 
                 'http://localhost:3000/images/2.jpg', 
                 'http://localhost:3000/images/3.jpg', 
                 'http://localhost:3000/images/3.jpg',
                 'http://localhost:3000/images/1.jpg'],
        time: "5 мес",
        commentCount: 3,
        likeCount: 6
    },
    {
        id: 5,
        photo: ava,
        name: 'Наталья Полянская',
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        images: [one, two, three, three],
        time: "год",
        commentCount: 9,
        likeCount: 9
    },
    {
        id: 6,
        photo: ava,
        name: 'Вета Покровская',
        text: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только ',
        images: ['http://localhost:3000/images/1.jpg', 
                 'http://localhost:3000/images/2.jpg', 
                 'http://localhost:3000/images/3.jpg', 
                 'http://localhost:3000/images/3.jpg',
                 'http://localhost:3000/images/1.jpg'],
        time: "5 мес",
        commentCount: 3,
        likeCount: 6
    }
];

