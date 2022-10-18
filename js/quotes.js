const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison'
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman'
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly'
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga'
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin'
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn'
    },
    {
        quote: '누군가가 어떤 사람인지 알고 싶다면, 그가 자신과 동등한 사람이 아니라 아랫사람을 어떻게 대하는지 봐.',
        author: 'Sirius Black, Harry Potter and the Goblet of Fire, Chapter 27'
    },
    {
        quote: '꿈에 집중한다고 해서 삶을 잊는 건 잊을 수 없는 일이다. ',
        author: 'Albus Dumbledore, Harry Potter and the Sorcerer\'s Stone, Chapter 12'
    },
    {
        quote: '그냥 앉아서 걱정하는 건 쓸모없어. 일어날 일은 어차피 일어나고, 그 일이 일어날 때 우리는 그걸 겪게 되는 거야.',
        author: 'Rubeus Hagrid, Harry Potter and the Goblet of Fire, Chapter 37'
    },
    {
        quote: '지혜로운 사람에게 죽음은 그저 또 다른 훌륭한 모험에 불과하다.',
        author: 'Albus Dumbledore, Harry Potter and the Sorcerer\'s Stone, Chapter 17'
    },
    {
        quote: '해리, 우리의 선택은 우리가 진정으로 어떤 사람인지를 우리의 능력보다 훨씬 더 잘보여준단다.',
        author: 'Albus Dumbledore, Harry Potter and the Chamber of Secrets, Chapter 18'
    },
    {
        quote: '우리가 죽음과 어둠을 맞이할 때 두려워하는 것은 단지 불확실성일 뿐 그 이상도 이하도 아니다.',
        author: 'Albus Dumbledore, Harry Potter and the Half-Blood Prince, Chapter 26'
    },
    {
        quote: '해리, 이러한 괴로움은 네가 아직 사람이라는 뜻이란다! 이 고통은 사람의 일부야.',
        author: ' Albus Dumbledore, Harry Potter and the Order of the Phoenix, Chapter 37'
    },
    {
        quote: '우리를 사랑하는 사람들은 절대로 진짜 우리를 떠나지 않아. 그들을 이곳에서 항상 찾을 수 있지.',
        author: 'Sirius Black, Harry Potter and the Prisoner of Azkaban'
    },
    {
        quote: '우리를 사랑하는 사람들은 절대로 진짜 우리를 떠나지 않아. 그들을 이곳에서 항상 찾을 수 있지.',
        author: 'Sirius Black, Harry Potter and the Prisoner of Azkaban'
    },
    {
        quote: '우리가 사랑했던 사람들이 세상을 떠나면 정말 우리를 떠난다고 생각하니? 큰 어려움이 닥쳤을 때 그들이 더욱 생생하게 기억나지 않니?',
        author: 'Albus Dumbledore, Harry Potter and the Prisoner of Azkaban'
    },
    {
        quote: '곧이어 우리는 옳은 일과 쉬운 일 사이에서 선택을 하게 될 거야.',
        author: 'Albus Dumbledore, Harry Potter and the Goblet of Fire'
    },
    {
        quote: '빛을 밝히는 것만 기억한다면 행복은 가장 어두운 시기에도 찾을 수 있어.',
        author: 'Albus Dumbledore, Harry Potter and the Prisoner of Azkaban'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;