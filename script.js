const gameInfo={
    header:"Black Myth Wukong",
    bannerImage:{
        image:"https://cdn11.bigcommerce.com/s-uv3gptffbq/images/stencil/original/image-manager/black-myth-wukong-banner.png?t=1727769031",
        width:"100%",
        height:"400px",
        alt:"Black Myth Wukong Banner",
},
navigation:["Home","About","Gallery"],


}
const mythUpdate=(tag,parent,attributes={},content="")=>{
    const element=document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHTML=content;
    parent.appendChild(element);
    return element;
}

// Creating the Header Section
const header=mythUpdate("h1",document.body,{class:"game-header"}, gameInfo.header)

// Create the Banner Section
const banner=mythUpdate("banner",document.body,{class:"game-banner"})
mythUpdate('img',banner,{src:gameInfo.bannerImage.image, alt:gameInfo.bannerImage.alt, width:gameInfo.bannerImage.width,height:gameInfo.bannerImage.height})



// Creating the Nav Bar

const nav=mythUpdate("nav",document.body,{class:"game-nav"})
const ul =mythUpdate("ul",nav,{class:"list"})

gameInfo.navigation.forEach(link=>{
    mythUpdate("li",ul,{class:"text"},`<a href="#">${link}</a>`)
})

// Creating the Main Section
// const main=mythUpdate('main',document.body,{class:"game-main"})


// Creating the Gallery Section
const jungleMap=mythUpdate('jungleMap',document.body,{class:"game-jungleMap"})
gameInfo.Jungle.forEach(info=>{
    const article=mythUpdate('article',main,{class:"game-section"})
    mythUpdate('h2',article,{},info.title);
    mythUpdate('img',article,{src:info.img, alt:info.title});
    mythUpdate('p',article,{},info.description);
});
Jungle:[
    {
    title:"Combat",
    img:"https://platform.polygon.com/wp-content/uploads/sites/2/2024/08/black-myth-wukong-secret-ending-guide-6.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
    description:"Fighting with a God",
    },


   { title:"Armor",
    img:"https://www.blackjack.com.au/wp-content/uploads/2024/06/blackjack_rules.jpg",
    description:"Fighting in style",
},

{
    title:"BlackJack Be Smart",
    img:"https://crescent.edu/uploads/editor/images/Blackjack.png",
    description:"Make wise decisions",
}

]