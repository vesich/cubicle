function preloadCube() {
    return async (req, res, next) => {
        req.data = req.data || {};


        try {
            const cube = await req.storage.getById(req.params.id);

            if (cube) {
                req.data.cube = cube;
            }
        } catch (error) {
            console.error('Database error', error.message);
        }


        next();
    }
}

module.exports = {
    preloadCube
};