var React = require('react');

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/assets/bootstrap.min.css" />
            </head>
            <body className='bg-light'>{props.children}</body>
        </html>
    );
}

module.exports = DefaultLayout;