import React from "react";
import config from "../config.json";

export default function filmPage({ data }) {
    const { images } = config;
    const { base_url } = images;
    const { logo_sizes } = images;

    let title, img, img2, homepageUrl, overview, release_date;
    if (data) {
        console.log("data", data);
        title = data.original_title;

        img = `${base_url}${logo_sizes[5]}${data.backdrop_path}`;
        // img = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        img2 = `${base_url}${logo_sizes[3]}${data.poster_path}`;

        overview = data.overview;
        homepageUrl = data.homepage;
        release_date = data.release_date;
    }
    return (
        <div>
            <p>filmPage </p>
            <p> {title}</p>
            <p>release date : {release_date}</p>
            {/* <img src={img} alt={title} /> */}
            <img src={img2} alt={title} />
            <a href={homepageUrl}> Hier Klicken</a>

            <p>{overview}</p>
        </div>
    );
}
