let get_home_page = (request, response) => {
    return response.render("home_page.ejs")

}

module.exports = {
    get_home_page: get_home_page,
}