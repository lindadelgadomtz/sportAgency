import { useRef } from 'react';

const useInView = () => {
    return [useRef(null), true] as const;
};

export default useInView;
