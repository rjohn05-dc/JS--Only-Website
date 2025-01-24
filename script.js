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

// Creating the Gallery Section

// const monkeyArmor=`
// header{text-align:center;}

// `
// mythUpdate("monkeyArmor",document.head,{},monkeyArmor)

