
exports.traer_todos = (req, res, next) => {
    var find = {};
  
    if (req.query.find) {
     find = JSON.parse(req.query.find);
    }
  
    if (req.query.sort) {
      var sortOrder = JSON.parse(req.query.sort);
    }
  
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      select: req.query.select || '',
      sort: sortOrder,
      populate: req.query.populate,
      pagination: req.query.pagination !== 'false'
    };
  
    const Model = req.Model; 
    
    Model.paginate(find, options )
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(400).json(error);
    });
  };
  
  exports.objeto_get_id = (req, res, next) => {
  
    const objetoId = req.params.objetoId;
    const Model = req.Model;
    const getConsulta = Model.findById( objetoId );
  
    if (req.query.select) {
      getConsulta.select(req.query.select);
    }
  
    if (req.query.populate) {
      getConsulta.populate(req.query.populate);
    }
  
    getConsulta.exec( (err, objeto) => {
  
      if (err) {
        return res.status(404).json({ error: err });
      }
  
      if (objeto) {
        return res.status(200).send(objeto);
      }
      else {
        return res.status(404).json({ error: "No puedo encontrar el objeto" });
      }
    });
  };
  