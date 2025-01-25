const gameInfo={
    header:"Black Myth Wukong",
    bannerImage:{
        image:"https://cdn11.bigcommerce.com/s-uv3gptffbq/images/stencil/original/image-manager/black-myth-wukong-banner.png?t=1727769031",
        width:"100%",
        height:"400px",
        alt:"Black Myth Wukong Banner",
},
navigation:["Home","About","Gallery"],
Jungle:[
    {
    title:"Combat",
    img:"https://platform.polygon.com/wp-content/uploads/sites/2/2024/08/black-myth-wukong-secret-ending-guide-6.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100 width:30%",
    description:"Fighting with a God",
    },


   { title:"Armor",
    img:"https://i.pinimg.com/736x/98/4a/b8/984ab8e41d3cd3e75d25aa277df93396.jpg",
    description:"Fighting in style",
},

{
    title:"Character",
    img:"https://cdn2.steamgriddb.com/grid/2ca75ceab906c68edbc6a3998fd6996b.png",
    description:"Wise Immortal Monkey King",
},
],
footer:"Game Science © 2024"



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

gameInfo.navigation.forEach(link => {
    const li = mythUpdate("li", ul, { class: "nav-item" });
    mythUpdate("a", li, { href: "#" }, link);
});

// Creating the Main Section
const main = mythUpdate("main", document.body, { class: "game-main" });
mythUpdate("h2", main, {}, "Black Myth Wukong Description");
mythUpdate("p", main, {}, "Black Myth: Wukong is an action role-playing game (RPG) developed by the Chinese studio Game Science, inspired by the classic Chinese novel Journey to the West.Players assume the role of Sun Wukong, a powerful monkey-like warrior, as he battles mythical creatures and uncovers the truth about his destiny.This game is suitable for teens because it has a nice mix of action and combat.");




// const monkeyArmor=`
// game-header{text-align: center; border: solid; border-color:black;background-color:silver;}
// game-nav{padding: 0 1rem;display: flex;justify-content:center;list-style: none;}
// list {list-style-type: none;margin: 0;padding: 0;overflow: hidden;border:solid;border-color: black;background-color: silver;}
// nav-item{float:left;}
// nav-item a {display: block;color: black;text-align: center;padding: 14px 16px;text-decoration: none;}
// nav-item a:hover {background-color:darkgreen;}
// footer{background-color:#C0C0C0,color:#fff; text-align:center;padding:1rem; border:solid;}
// `
// mythUpdate("monkeyArmor",document.head,{},monkeyArmor)

// Creating the Gallery Section
const gallery = mythUpdate("section", document.body, { class: "game-gallery" });
mythUpdate("h2", gallery, {}, "Gallery");

gameInfo.Jungle.forEach(item => {
    const card = mythUpdate("div", gallery, { class: "gallery-card" });
    mythUpdate("h3", card, {}, item.title);
    mythUpdate("img", card, { src: item.img, alt: item.title });
    mythUpdate("p", card, {}, item.description);
});

// Creating the footer
const footer = mythUpdate('footer', document.body, { class: "game-footer" });
mythUpdate('p',footer,{},gameInfo.footer);
