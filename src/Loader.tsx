import { FunctionComponent, useState } from 'react';
import './Loader.css';


interface LoaderProps {
    children: (onLoad: () => void) => React.ReactElement,
}

const Loader: FunctionComponent<LoaderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const onLoad = () => {
        setIsLoading(false);
    }

    return (
        <div className="Wrapper">
            {isLoading && <div className="Loading">L O A D I N G ...</div>}
            {children(onLoad)}
        </div>
    )
}

export default Loader;
