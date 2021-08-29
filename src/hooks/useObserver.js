import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback, addCondition) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, addCondition]);
}