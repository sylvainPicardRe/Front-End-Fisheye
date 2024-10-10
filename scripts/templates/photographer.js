function photographerTemplate(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    const photographerLink = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "image de profile");

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
    return { name, picture, getUserCardDOM }
}