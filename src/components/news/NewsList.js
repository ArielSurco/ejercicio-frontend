import React from 'react';
import NewsCard from "./NewsCard";
import { NewsCardStyles } from './newsStyles';

const NewsList = (props) => {
    const { news } = props;

    return news.map((currentNew, index) => (
        <NewsCard
            key={index}
            style={{ marginBottom: 2, height: 450 }}
            id={currentNew.uuid}
            img={
                <img
                alt="News"
                style={NewsCardStyles.image}
                src={currentNew.thread.main_image}
                />
            }
            title={currentNew.title}
            description={currentNew.text}
            published={currentNew.published}
        />
    ))
}

export default NewsList;