var React = require('react');

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>React</title>
            </head>
            <body>
                <div id="root"></div>
            </body>
            <script src="/react/bundle.min.js"></script>
        </html>
    );
}

module.exports = DefaultLayout;