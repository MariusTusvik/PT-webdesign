import React from "react";

const classes = (...args: any[]) => args.filter(Boolean).join(" ");

const Container2 = ({children, className}: {children: React.ReactNode, className?: string}) => (
    <div className={classes("max-w-screen-md w-full mx-auto", className)}>
        {children}
    </div>
)

export default Container2;