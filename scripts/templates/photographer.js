function photographerTemplate(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `./assets/images/photographers/${portrait}`;

    const photographerLink = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const a = document.createElement( 'a' );
        a.setAttribute("href", photographerLink);
        a.appendChild(img);
        a.appendChild(h2);

        const h3 = document.createElement( 'h3' );
        h3.setAttribute("class", "margin-small font-size-small");
        h3.textContent = city + ", " + country;

        const description = document.createElement( 'p' );
        description.setAttribute("class", "margin-small font-size-small");
        description.textContent = tagline;

        const pricing = document.createElement( 'p' );
        pricing.setAttribute("class", "margin-small font-size-small princing");
        pricing.textContent = price + "€/jour";
        
        article.appendChild(a);
        article.appendChild(h3);
        article.appendChild(description);
        article.appendChild(pricing);
        return (article);
    }

    function getUserProfileDOM(){
        const div = document.createElement( 'div' );
        div.setAttribute('class', "infosProfile");

        const h1 = document.createElement( 'h1' );
        h1.textContent = name;

        const town = document.createElement( 'p' );
        town.setAttribute("class", "city");
        town.textContent = city + ", " + country;

        const description = document.createElement( 'p' );
        description.setAttribute("class", "description");
        description.textContent = tagline;
        
        div.appendChild(h1);
        div.appendChild(town);
        div.appendChild(description);
        return (div);
    }

    function getUserImageDOM(){
        image = document.createElement( 'img' );
        image.setAttribute("src", picture);
        image.setAttribute("alt", "image de profile");
        return image;
    }
    
    return { name, picture, getUserCardDOM, getUserProfileDOM, getUserImageDOM}
}