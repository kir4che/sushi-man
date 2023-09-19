AOS.init({
	duration: 1000,
	offset: 100,
})

const popularFoodsCatalogue = document.querySelector('.popular-foods_catalogue')

const cards = [
	{
		imgSrc: '/public/assets/sushi-12.png',
		alt: 'sushi-12',
		title: 'たまご寿司',
		rating: '4.9',
		price: '¥100',
	},
	{
		imgSrc: '/public/assets/sushi-11.png',
		alt: 'sushi-11',
		title: 'サーモン寿司',
		rating: '5.0',
		price: '¥100',
		active: true,
	},
	{
		imgSrc: '/public/assets/sushi-10.png',
		alt: 'sushi-10',
		title: '豚骨ラーメン',
		rating: '4.6',
		price: '¥790',
	},
]

cards.forEach((cardData) => {
	const article = document.createElement('article')
	article.classList.add('popular-foods_card')

	if (cardData.active) article.classList.add('active-card')

	const img = document.createElement('img')
	img.classList.add('popular-foods_card-image')
	img.src = cardData.imgSrc
	img.alt = cardData.alt

	const h4 = document.createElement('h4')
	h4.classList.add('popular-foods_card-title')
	h4.textContent = cardData.title

	const divDetails = document.createElement('div')
	divDetails.classList.add('popular-foods_card-details', 'flex-between')

	const divRating = document.createElement('div')
	divRating.classList.add('popular-foods_card-rating')
	const imgStar = document.createElement('img')
	imgStar.src = '/public/assets/star.svg'
	imgStar.alt = 'star'
	const pRating = document.createElement('p')
	pRating.textContent = cardData.rating
	divRating.appendChild(imgStar)
	divRating.appendChild(pRating)

	const pPrice = document.createElement('p')
	pPrice.classList.add('popular-foods_card-price')
	pPrice.textContent = cardData.price

	divDetails.appendChild(divRating)
	divDetails.appendChild(pPrice)

	article.appendChild(img)
	article.appendChild(h4)
	article.appendChild(divDetails)

	popularFoodsCatalogue.appendChild(article)
})

const trendingSushiList = document.querySelector('.trending_list.sushi')
const trendingDrinkList = document.querySelector('.trending_list.drinks')

const createListItemElement = (itemName) => {
	const listItem = document.createElement('li')
	listItem.innerHTML = `
    <div class="trending_icon flex-center">
      <img src="/public/assets/check.svg" alt="check" />
    </div>
    <p>${itemName}</p>
  `
	return listItem
}

const trendingSushis = ['寿司を作る', '押し寿司', '裏巻き寿司', '握り寿司', '手巻き寿司', '稲荷寿司']

trendingSushis.forEach((sushi) => {
	const sushiItem = createListItemElement(sushi)
	trendingSushiList.appendChild(sushiItem)
})

const trendingDrinks = ['お茶', '桜のお茶', '青汁', 'おふく茶', '昆布茶', '麦茶']

trendingDrinks.forEach((drink) => {
	const drinkItem = createListItemElement(drink)
	trendingDrinkList.appendChild(drinkItem)
})
