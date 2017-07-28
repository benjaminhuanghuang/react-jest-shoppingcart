var config = {
    port: process.env.PORT || 9527,
    db: process.env.MONGOLAB_URI || "mongodb://localhost/todoapi",
    test_port: 3721,
    test_db: "mongodb://localhost/todoapi_test"
}
module.exports = config;