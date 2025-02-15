const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    img:'https://fr.web.img6.acsta.net/c_310_420/pictures/18/05/14/12/19/5676009.jpg',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    img:'https://fr.web.img6.acsta.net/c_310_420/pictures/18/05/04/13/15/4943524.jpg',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    img:'https://fr.web.img5.acsta.net/c_310_420/pictures/18/04/13/15/09/0323902.jpg',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    img:'https://fr.web.img6.acsta.net/c_310_420/pictures/18/03/22/16/48/2454348.jpg',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    img:'https://fr.web.img6.acsta.net/c_310_420/pictures/18/11/27/14/25/1451897.jpg',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    img:'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    img:'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    img:'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/91/33/19255605.jpg',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    img:'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    img:'https://fr.web.img3.acsta.net/c_310_420/pictures/14/09/11/17/05/508784.jpg',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
