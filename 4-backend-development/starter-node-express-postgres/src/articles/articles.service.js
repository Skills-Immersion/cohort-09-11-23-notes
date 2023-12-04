const db = require("../db/connection");

function getAllArticles() {
    return db("articles").select("*")
}

function createArticle(newArticle) {
    return db("articles")
        .insert(newArticle)
        .returning("*")
        .then( rows => {
            console.log(rows);
            return rows[0];
        })
}

function readArticle(article_id) {
    return db("articles")
        .where({ article_id })
        .first(); // ensures we get one single article
}

function destroyArticle(articleId) {
    return db("articles")
        .where("article_id", article_id)
        .delete();
}

function updateArticle(article_id, updatedArticle) {
    return db("articles")
        .where({article_id})
        .update(updatedArticle, "*")
}

module.exports = {
    getAllArticles,
    createArticle,
    readArticle,
    destroyArticle,
    updateArticle
};


