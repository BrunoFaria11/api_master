

import db from '../models';

const getPages = async (req: any, res: any) => {

    const page = await db.Pages.create({
        name: 'alice123',
      });
    console.log(db.Pages.findAll()); // true
    res.send("users")
}

module.exports = {
    getPages
}