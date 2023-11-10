const model = require('../models/expensedb');

//get categories

async function get_Categories(req, res) {
    let datas = await model.Categories.find();
    let filter = await datas.map(data => { Object.assign({}, { type: data.type, color: data.color }) });
    return res.json(filter)

}

//post categories

async function create_Categories(req, res) {
    const Create = new model.Categories({
        type: "Investment",
        color: '#FFC234'
    })

    await Create.save()
        .then(res.json(Create))
        .catch((err) => res.json({ message: `Error while adding Categories ${err}` }))


}

module.exports = {
    create_Categories,
    get_Categories
}