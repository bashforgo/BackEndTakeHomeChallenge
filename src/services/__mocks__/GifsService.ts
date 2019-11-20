import IGif from '../../models/IGif'

const mockData = [
  {
    title: 'Sea Otter Good Job GIF by Justin',
    url:
      'https://media1.giphy.com/media/ely3apij36BJhoZ234/giphy-downsized-large.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy-downsized-large.gif',
  },
  {
    title: 'Yes GIF by Brittany Broski',
    url:
      'https://media2.giphy.com/media/lnOG1o6Cdc3kKjuray/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Spongebob Squarepant GIF by The SpongeBob Movie: Sponge On The Run',
    url:
      'https://media1.giphy.com/media/PnUatAYWMEMvmiwsyx/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'happy dog GIF by TikTok',
    url:
      'https://media3.giphy.com/media/1BGQQpzJ0N8K99RgzB/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Ashley Graham Lol GIF by Lifetime',
    url:
      'https://media0.giphy.com/media/3qsz090iknpyrnIXrX/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'everybody wants to be a cat happy dance GIF',
    url:
      'https://media2.giphy.com/media/EkPicGgIeyNAQ/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Season 4 GIF by Rick and Morty',
    url:
      'https://media2.giphy.com/media/PlTd840Mkz4BaiUw05/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'trippy processing GIF',
    url:
      'https://media2.giphy.com/media/ExYQhwnfUzgLm/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'freaks and geeks dancing GIF by Justin',
    url:
      'https://media0.giphy.com/media/l4Ep6Ee5dBpOB44SI/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'funny baby GIF',
    url:
      'https://media1.giphy.com/media/YAXXp5UguFaQQIJzPH/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'the fresh prince of bel air dancing GIF',
    url:
      'https://media3.giphy.com/media/pa37AAGzKXoek/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'doubt GIF by Samm Henshaw',
    url:
      'https://media0.giphy.com/media/1d5WSz56LVnDtyb0Go/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Minnesota Timberwolves Reaction GIF by Milwaukee Bucks',
    url:
      'https://media2.giphy.com/media/gjHKcCYscYE14o7rUU/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Come On Reaction GIF by WWE',
    url:
      'https://media0.giphy.com/media/jUKvCSdBaaLD9saKHT/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Star Wars Baby Yoda GIF by melbduran',
    url:
      'https://media0.giphy.com/media/ZFi2wFRs3lBvYNglWk/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Happy Clapping GIF by Originals',
    url:
      'https://media3.giphy.com/media/l0K4m0mzkJDAIdhHW/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Trail Blazers No GIF by Twitter',
    url:
      'https://media2.giphy.com/media/iddDVZCrCDRva83r1b/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: '',
    url:
      'https://media1.giphy.com/media/iIe5ficubsfcYj0mxo/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'give valentines day GIF by Originals',
    url:
      'https://media3.giphy.com/media/XHxW40d07qdxsf6U52/giphy-downsized-large.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy-downsized-large.gif',
  },
  {
    title: 'feel better get well soon GIF',
    url:
      'https://media2.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'steal yo girl GIF by Portland Trail Blazers',
    url:
      'https://media3.giphy.com/media/26uf4CdbJ2uPxFjMI/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'GIF by NBA',
    url:
      'https://media2.giphy.com/media/TKGOR4RxYlFgqZRui1/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Cat Shoulder Touch GIF by Nebraska Humane Society',
    url:
      'https://media0.giphy.com/media/S857VNxM6HwlZuYXrU/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'GIF by NBA',
    url:
      'https://media2.giphy.com/media/QBwPwGhGIqWUGBNEUq/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
  {
    title: 'Shocked Laura Dern GIF by Big Little Lies',
    url:
      'https://media3.giphy.com/media/UokMtxPBdBn2Da3Xzs/giphy.gif?cid=f1afa41d1726315b8ee94c63848d339c6679d5e17adafa12&rid=giphy.gif',
  },
]

export default class MockGifsService {
  async getTrending(): Promise<IGif[]> {
    return mockData.map(o => ({ toObject: () => o }))
  }
}
