import React from "react";

const classes = (...args: any[]) => args.filter(Boolean).join(" ");

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => (
    <div className={classes("w-full mx-auto align-middle p-4", className)}>
        {children}
    </div>
)

export default Container; 