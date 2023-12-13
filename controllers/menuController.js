const { Menu } = require("../models"); //Import Sequelize to apply create, update, findAll, findOne, delete method
// const menu = require("../models/menu");

class Controller {
    static async addMenu(req, res) {
        const body = req.body;
        const { namaMenu, kategori, harga, image } = body;

        try {
            const Menus = await Menu.create({
                namaMenu,
                kategori,
                harga,
                image,
            });

            res.status(201).json(Menus);
        } catch (error) {
            console.log(`Error menambahkan Menu! ${error}`);
            res.status(500).json(error);
        }
    }

    static async getMenu(req, res) {
        try {
            const Menus = await Menu.findAll();
            res.status(200).json(Menus);
        } catch (error) {
            console.log(`Error menampilkan Menu! ${error}`);
            res.status(500).json(error);
        }
    }

    static async getMenuId(req, res) {
        const id = Number(req.params['id']);
        let response;
        try {
            const Menus = await Menu.findOne({
                where: {
                    id: id,
                },
            });

            response = Menus;
        } catch (error) {
            console.log(`Error menampilkan Menu ID! ${error}`);
            response = JSON.stringify(error);
        }

        res.status(200).json(response);
    }


}

module.exports = Controller;
