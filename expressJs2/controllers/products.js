const getAllProducts = async (req, res) =>{
      res.status(200).json({
        message: "I am getting all products"
      })
};

const getAllProductsTesting = async (req, res) =>{
    res.status(200).json({
      message: "I am getAllProductsTesting"
    })
}

module.exports = {getAllProducts, getAllProductsTesting}