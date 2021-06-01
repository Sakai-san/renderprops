import React, { FunctionComponent } from 'react';

interface ImageProps {
    src: string;
    alt?: string;
}

const Image: FunctionComponent<ImageProps> = ({ src, alt }) => {
    return <img src={src} alt={alt || ''} />;
}

export default Image;