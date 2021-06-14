import React from "react";
import Preloader from "../components/common/Preloader/Preloader";


export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    return (props: WCP) => {
        return (
            <React.Suspense fallback={<div>📡Загрузка...</div>}>
                <WrappedComponent {...props}/>
            </React.Suspense>
        )
    }
}

