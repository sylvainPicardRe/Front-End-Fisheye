function mediaTemplate(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const picture = `./assets/images/medias/${image}`;
    const videoSource = `./assets/images/medias/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        if(image){
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            article.appendChild(img);
        } else if(video) {
            const video = document.createElement( 'video' );
            video.setAttribute("src", videoSource);
            video.setAttribute("controls", "");
            article.appendChild(video);
        }
        const h3 = document.createElement( 'h3' );
        h3.textContent = title;

        const p = document.createElement( 'p' );
        p.textContent = likes;

        const i = document.createElement( 'i' );
        i.setAttribute("class", "fa-solid fa-heart");

        const div = document.createElement( 'div' );
        div.setAttribute("class", "card-description");

        const like = document.createElement( 'div' );
        like.setAttribute("class", "like");
        
        like.appendChild(p);
        like.appendChild(i);

        div.appendChild(h3);
        div.appendChild(like);

        article.appendChild(div);

        return (article);
    }

    return { picture, videoSource, getMediaCardDOM }

}