import React from 'react';
import NewsCard from "./NewsCard";

const NewsList = (props) => {
    const { news } = props;

    return news.map((x, idx) => (
        <NewsCard
            key={idx}
            style={{ marginBottom: 2, height: 450 }}
            id={x.uuid}
            img={
                <img
                alt={"News"}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
                src={x.thread.main_image}
                />
            }
            title={x.title}
            description={x.text}
            published={x.published}
        />
    ))
}

export default NewsList;