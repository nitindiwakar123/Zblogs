import React from 'react';

function SEO({
    title="",
    description="",
}) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Nitin Diwakar - Software Engineer" />
        </>
    )
}

export default SEO;