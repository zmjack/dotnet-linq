const fs = require("fs");
const path = require("path");

function getEntry(dir, filter, recursive) {

    var testFiles = [
        // If you want to test some apps, define app name here:
        // For example: "MainApp"
    ];

    var ret = {};
    function search(_dir) {
        var files = fs.readdirSync(_dir);
        files.forEach((v, i) => {
            if (v.startsWith("~")) return;

            var targetPath = path.join(_dir, v);
            var stat = fs.statSync(targetPath);

            if (stat.isDirectory() && recursive) search(targetPath);
            if (stat.isFile() && filter.test(targetPath)) {
                var match = filter.exec(targetPath);
                var name = match[1] !== undefined ? match[1] : match[0];

                if (testFiles.length > 0) {
                    if (testFiles.indexOf(name) > -1)
                        ret[name] = `.\\${targetPath}`;
                }
                else ret[name] = `.\\${targetPath}`;
            }
        });
    }
    search(dir);
    return ret;
}

module.exports = {

    entry: getEntry("./dotnet-linq/build", /^(?:.+\\)*(.+)\.tsx?$/, true),

    output: {
        path: path.join(__dirname, "/dotnet-linq/dist/"),
        filename: "[name].js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader"
            }, {
                loader: "ts-loader",
            }]
        }]
    }
};
